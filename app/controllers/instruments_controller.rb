class InstrumentsController < ApplicationController
    def index
        instruments = Instrument.all
        render json: instruments, except: [:updated_at, :created_at]
    end

    def show
        instruments = Instrument.find_by(id: params[:id])
        if instruments
            render json: instruments, except: [:updated_at, :created_at]
        else
            render json: {error: "Instrument not found"}
        end
    end

    def update
        instruments = Instrument.find_by(id: params[:id])
        if instruments
            instruments.update!(instrument_params)
            render json: instruments
        else
            render json: {error: "Insturment not found"}
        end
    end

    def create
        instruments = Instrument.create!(instrument_params)
        if instruments.valid?
            render json: instruments
        else
            render json: {error: "Invalid entry"}
        end
    end

    def destroy
        instruments = Instrument.find_by(id: params[:id])
        if instruments
            instruments.destroy
            head :no_content
        else
            render json: {error: "Instrument not found"}
        end
    end
    private

    def instrument_params
        permit.params(:name, pdfs: [])
    end
end
