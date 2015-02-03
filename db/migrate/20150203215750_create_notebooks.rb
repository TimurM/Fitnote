class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end
