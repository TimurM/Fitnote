module Api
  class TagsController < ApiController

    def index
      @tags = current_user.tags.order('name')
      render :index
    end

    def show
      @tag = Tag.find(params[:id])
      @notes = @tag.notes.order('updated_at DESC')
      render :show
    end

    def create
      @tag = Tag.new(tag_params)
      @tag.user_id = current_user.id

      if @tag.save
        render :show
      else
        render json: @tag.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @tag = Tag.find(params[:id])

      if tag.update(tag_params)
        render :show
      else
        render json: @tag.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @tag = Tag.find(params[:id])
      @tag.destroy
      render json: "deleted 1 tag"
    end

    private

    def tag_params
      params.require(:tag).permit(:name)
    end
  end
end
