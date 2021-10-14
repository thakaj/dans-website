# frozen_string_literal: true
#bug in the code ask laura her opnion. Login is sucessful code returns good status. Logout always returns 401 even if it destroys the session something to do with 
#before_action in current_student controller possibly because it has a different base
class Student::SessionsController < Devise::SessionsController
  respond_to :json
  private

  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: 'Logged in sucessfully.'},
      data: StudentsSerializer.new(resource).serializable_hash[:data][:attributes]
    }, status: :ok
  end

  def respond_to_on_destroy
    #if current_student
      render json: {
        status: 200,
        message: "logged out successfully"
      }, status: :ok
    # else
    #   render json: {
    #     status: 401,
    #     message: "Couldn't find an active session."
    #   }, status: :unauthorized
    # end
  end
end