class StudentsController < ApplicationController
    #weird error wont accept index as the get
    def show
        students = Student.all
        render json: students, except: [:updated_at, :created_at]
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
end
