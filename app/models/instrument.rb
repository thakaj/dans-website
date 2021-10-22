class Instrument < ApplicationRecord
    has_many_attached :pdfs, dependent: :destroy
end
