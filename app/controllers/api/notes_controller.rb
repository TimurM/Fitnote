module Api
  class NotesController < ApiController

    def index
      @notes = Note.all
    end

    def show
      @note = Note.find(params[:id])
    end

    def new

    end

    def create
      @note = Note.new(note_params)

      if @note.save
        redirect_to api_note_url(@note)
      else
        flash.now[:errors] = @note.errors.full_messages
        render :new
      end
    end

    def edit
      @note = Note.find(params[:id])
      render :edit
    end

    def update
      @note = Note.find(params[:id])

      if @note.update(note_params)
        redirect_to api_note_url(@note)
      else
        flash.now[:errors] = @note.errors.full_messages
        render :edit
      end
    end

    def destroy
      @note = Note.find(params[:id])

      if @note.destroy
        redirect_to api_notebooks_url
      else
        flash.now[:errors] = @note.errors.full_messages
      end
    end

    private

    def note_params
      params.require(:note).permit(:title, :body, :notebook_id)
    end
  end
end
