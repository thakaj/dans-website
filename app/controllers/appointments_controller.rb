class AppointmentsController < ApplicationController
    before_action :authenticate_student!

    def index
        appointments = Appointment.all
        render json: appointments, except: [:updated_at, :created_at]
    end

    def show
        appointments = Appointment.find_by(id: params[:id])
        if instruments
            render json: appointments, except: [:updated_at, :created_at]
        else
            render json: {errors: "Appointment not found"}
        end
    end

    def create
        appointments = current_student.appointments.create(appointment_params)
        if appointments.valid?
            render json: appointments
        else
            render json: {errors: "Invalid Entry"}
        end
    end

    def update
        appointments = Appointment.find_by(id: params[:id])
        if appointments
            render json: appointments
        else
            render json: {errors: "Invalid Entry"}
        end
    end

    def destroy
        appointments = Appointment.find_by(id: params[:id])
        if appointments
            appointments.destroy
            head :no_content
        else
            render json: {errors: "Appointment not found"}
        end
    end

    private

    def appointment_params
        params.permit(:remote, :location, :instrument_id)
    end
end
