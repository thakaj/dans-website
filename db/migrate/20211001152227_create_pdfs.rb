class CreatePdfs < ActiveRecord::Migration[6.1]
  def change
    create_table :pdfs do |t|
      t.string :content
      t.belongs_to :instrument

      t.timestamps
    end
  end
end
