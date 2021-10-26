class InstrumentsController < ApplicationController
    def index
        instruments = Instrument.with_attached_pdfs.all
        render json: instruments, include: ["pdfs"] ,except: [:updated_at, :created_at]
    end

    def show
        instruments = Instrument.with_attached_pdfs.find_by(id: params[:id])
        if instruments
            render json: instruments, include: ["pdfs"] ,except: [:updated_at, :created_at]
        else
            render json: {errors: "Instrument not found"}
        end
    end

    def update
        instruments = Instrument.with_attached_pdfs.find_by(id: params[:id])
        if instruments
            instruments.update!(instrument_params)
            render json: instruments
        else
            render json: {errors: "Insturment not found"}
        end
    end

    def create
        instruments = Instrument.create!(instrument_params)
        if instruments.valid?
            render json: instruments
        else
            render json: {errors: "Invalid entry"}
        end
    end

    def destroy
        instruments = Instrument.find_by(id: params[:id])
        if instruments
            instruments.destroy
            head :no_content
        else
            render json: {errors: "Instrument not found"}
        end
    end
    
    def download 
        document = Instrument.with_attached_pdfs.find(params[:i_id])
        pdf = document.pdfs.find(params[:p_id])

        s3 = Aws::S3::Client.new(access_key_id: ENV["AWS_ACCESS_KEY_ID"], secret_access_key: ENV["AWS_SECRET_ACESS_KEY"])
        s3_pdf = s3.get_object(bucket: ENV['BUCKET'], key: pdf.key)

        send_data s3_pdf.body.read, filename: pdf.filename.to_s, type: pdf.content_type, disposition: 'attachment'
    end

    def show_pdf 
        instrument = Instrument.with_attached_pdfs.find_by(id: params[:id])
        document = instrument.pdfs.all
        if document
            render json: document, except: [:updated_at, :created_at]
        else
            render json: {errors: "Instrument not found"}
        end

    end


    private

    def instrument_params
        params.permit(:id, pdfs: [])
    end
end
