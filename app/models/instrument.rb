class Instrument < ApplicationRecord
    has_many_attached :pdfs, service: :s3
end
