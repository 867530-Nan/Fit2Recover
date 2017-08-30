class CreateTestimonials < ActiveRecord::Migration[5.1]
  def change
    create_table :testimonials do |t|
      t.string :subject
      t.text :body
      t.string :date
      t.string :author

      t.timestamps
    end
  end
end
