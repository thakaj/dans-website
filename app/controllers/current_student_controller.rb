class CurrentStudentController < ApplicationController
  before_action :authenticate_student!
  def index
    render json: current_student, status: :ok
  end
end
