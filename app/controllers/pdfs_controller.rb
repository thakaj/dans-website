class PdfsController < ApplicationController
    def index
        pdfs = Pdf.all
        render json: pdfs, except: [:updated_at, :created_at]
    end

    def show
        pdfs = Pdf.find_by(id: params[:id])
        if pdfs
            render json: pdfs, except: [:updated_at, :created_at]
        else
            render json: {error: "Pdf not found"}
        end
    end

    def update
        pdfs = Pdf.find_by(id: params[:id])
        if pdfs
            pdfs.update!(pdf_params)
            render json: pdfs
        else
            render json: {error: "Pdf not found"}
        end
    end
    def create
        pdfs = Pdf.create!(pdf_params)
        if pdfs.valid?
            render json: pdfs
        else
            render json: {error: "Invalid entry"}
        end
    end
    def destroy
        pdfs = Pdf.find_by(id: params[:id])
        if pdfs
            pdfs.destroy
            head :no_content
        else
            render json: {error: "Could not find Pdf"}
        end
    end
    private
    def pdf_params
        params.permit(:content)
    end
end
