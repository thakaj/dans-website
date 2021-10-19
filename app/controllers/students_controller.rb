class StudentsController < ApplicationController
    def show
        students = Student.find_by(id: params[:id])
        if students
        render json: students, except: [:updated_at, :created_at]
        else
            render json: {errors: "Student not found"}
        end
    end
    def destroy
        students = Student.find_by(id: params[:id])
        if students
            students.destroy
            head :no_content
        else 
            render json: {errors: "Student not found"}
        end
    end
    def update
        students = Student.find_by(id: params[:id])
        if students
            students.update(first_name: params[:first_name], last_name: params[:last_name])
            render json: students, except: [:updated_at, :created_at]
        else
            render json: {errors: "Invalid Entry"}
        end
    end
end
