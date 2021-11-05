class RemoveNameFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :time, :datetime
  end
end
