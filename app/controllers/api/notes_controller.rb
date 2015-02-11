module Api
  class NotesController < ApiController

    def index
      @keyword = params[:query]
      @tag = current_user.tags.find_by(name: @keyword)

      @notes = @tag.try(:notes) ||
      (current_user.notes.where('title LIKE ?', "%#{@keyword}%").all || current_user.notes.where('body LIKE ?', "%#{@keyword}%").all) ||
      current_user.notes
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
        render json: @note.errors.full_messages, status: :unprocessable_entity
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
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @note = Note.find(params[:id])

      if @note.destroy
        redirect_to api_notebooks_url
      else
        render json: @note.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def note_params
      params.require(:note).permit(:title, :body, :notebook_id)
    end
  end
end
