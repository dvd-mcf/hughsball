class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :first_name
      t.string :last_name
      t.integer :user_id

      t.timestamps
    end
    add_index :tickets, [:user_id, :created_at]
  end
end
