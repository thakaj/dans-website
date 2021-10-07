class CurrentStudentController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: current_student, status: :ok
  end
end
