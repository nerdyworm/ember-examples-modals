class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string :name
      t.timestamps
    end

    add_index :widgets, :name, unqiue: true
  end
end
