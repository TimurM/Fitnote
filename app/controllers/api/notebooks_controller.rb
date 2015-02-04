module Api
  class NotebooksController < ApiController
    def index
      @notebooks = current_user.notebooks
      render json: @notebooks
    end

    def show
      @notebook = Notebook.includes(:owners, :notes).find(params[:id])

      if @notebook.is_owner?(current_user)
        render :show
      else
        render json: ["This is not your notebook"], status: 403
      end
    end

    def new
      # render :new
    end

    def create
      @notebook = Notebook.new(notebook_params)
      @notebook.owner_id = current_user.id

      if @notebook.save
        render json: @notebook
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit
      @notebook = Notebook.find(params[:id])
    end

    def update
      @notebook = Notebook.find(params[:id])

      if @notebook.update(notebook_params)
        render json: @notebook
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @notebook = Notebook.find(params[:id])

      if @notebook.destroy
        render json: {}
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def notebook_params
      params.require(:notebook).permit(:name)
    end
  end
end
