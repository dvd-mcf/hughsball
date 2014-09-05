class AddExternalEmailToUsers < ActiveRecord::Migration
  def change
    add_column :users, :external_email, :boolean, default: false
  end
end
