class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :notebook_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
