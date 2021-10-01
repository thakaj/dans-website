class Pdf < ApplicationRecord
    has_many_attached :documents
    belongs_to :instrument
end
