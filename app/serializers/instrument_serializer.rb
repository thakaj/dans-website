class InstrumentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers


  attributes :id, :name, :pdfs
  def pdfs
    return unless object.pdfs.attached?
    object.pdfs.map do | pdf |

      pdf.blob.attributes 
        .slice("filename", "id")
        .merge(url: pdf_url(pdf))
    end
  end
  
  def pdf_url(file)
    rails_blob_path(file, only_path: true)
  end




end