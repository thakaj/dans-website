require "test_helper"

class CurrentStudentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get current_student_index_url
    assert_response :success
  end
end
