class AddWristbandIdToTickets < ActiveRecord::Migration
  def change
    add_column :tickets, :wristband_id, :string
  end
end
