class AddJitiToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :jti, :string, null: false
    add_index :students, :jti, unique: true
  end
end
