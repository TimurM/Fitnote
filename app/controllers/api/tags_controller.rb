module Api
  class TagsController < ApiController

    def index
      @tags = current_user.tags.order('name')
      render json: @tags
    end

    def show
      @tag = Tag.find(params[:id])
      @notes = @tag.notes.order('updated_at DESC')
      render json: @tags
    end

    def create
      # @tag = Tag.find(params[:name])
      #
      # if @tag
      #   @tag += [params[:note_id]]
      # else
        @tag = current_user.tags.new(tag_params)
        @tag.note_ids += [params[:note_id]]
      # end

      if @tag.save
        render json: @tag
      else
        render json: @tag.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @tag = Tag.find(params[:id])

      if tag.update(tag_params)
        render json: @tag
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
