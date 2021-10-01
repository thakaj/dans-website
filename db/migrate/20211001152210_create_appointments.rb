class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :time
      t.belongs_to :student
      t.boolean :remote
      t.string :location
      t.belongs_to :instrument

      t.timestamps
    end
  end
end
