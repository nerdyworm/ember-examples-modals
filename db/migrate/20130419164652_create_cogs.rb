class CreateCogs < ActiveRecord::Migration
  def change
    create_table :cogs do |t|
      t.string :name

      t.timestamps
    end
  end
end
