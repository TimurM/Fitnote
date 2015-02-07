module Api
  class NotebooksController < ApplicationController
    def index
      @notebooks = current_user.notebooks
    end

    def show
      @notebook = Notebook.find(params[:id])
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
        redirect_to api_notebooks_url
      else
        render json: @notebook.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @notebook = Notebook.find(params[:id])

      if @notebook.destroy
        redirect_to api_notebooks_url
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
