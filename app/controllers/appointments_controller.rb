class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments, except: [:updated_at, :created_at]
    end

    def show
        appointments = Appointment.find_by(id: params[:id])
        if instruments
            render json: appointments, except: [:updated_at, :created_at]
        else
            render json: {error: "Appointment not found"}
        end
    end

    def create
        appointments = Appointment.create!(appointment_params)
        if appointments.valid?
            render json: appointments
        else
            render json: {error: "Invalid Entry"}
        end
    end

    def update
        appointments = Appointment.find_by(id: params[:id])
        if appointments
            render json: appointments
        else
            render json: {error: "Invalid Entry"}
        end
    end

    def destroy
        appointments = Appointment.find_by(id: params[:id])
        if appointments
            appointments.destroy
            head :no_content
        else
            render json: {error: "Appointment not found"}
        end
    end

    private

    def appointment_params
        permit.params(:time, :remote, :location)
    end
end
