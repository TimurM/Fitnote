module Api
  class TaggingsController < ApiController

    def index
      note = Note.find(params[:note_id])
      @taggings = note.taggins

      render :index
    end

    def create
      @note = Note.find(params[:note_id])

      @tag = Tag.find_or_create_by(
        name: params[:name],
        user_id: current_user.id
      )

      @tagging = Tagging.create(note_id: @note.id, tag_id: @tag.id)

      if @tagging.save
        render :index
      else
        render json: @tagging.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @tagging = Tagging.find(params[:id])

      @tagging.destroy

      render json: @tagging
    end
  end
end
