class AddWristbandIdIndexToTickets < ActiveRecord::Migration
  def change
    add_index :tickets, :wristband_id, unique: true
  end
end
