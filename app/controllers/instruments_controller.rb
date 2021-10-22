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
    private

    def instrument_params
        params.permit(:id, pdfs: [])
    end
end
