module Api
  class NotebooksController < ApplicationController
    def index
      @notebooks = current_user.notebooks

    end

    def new
      # render :new
    end

    def create
      @notebook = Notebook.new(notebook_params)
      @notebook.owner_id = current_user.id

      if @notebook.save
        redirect_to api_notebooks_url
      else
        flash.now[:errors] = @notebook.errors.full_messages
        render :new
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
        flash.now[:errors] = @notebook.errors.full_messages
        render :edit
      end
    end

    def destroy
      @notebook = Notebook.find(params[:id])

      if @notebook.destroy
        redirect_to api_notebooks_url
      else
        flash.now[:errors] = @notebook.errors.full_messages
      end
    end

    private

    def notebook_params
      params.require(:notebook).permit(:name)
    end
  end
end
