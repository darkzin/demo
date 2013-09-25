require 'test_helper'

class DemoControllerTest < ActionController::TestCase
  test "should get main" do
    get :main
    assert_response :success
  end

  test "should get sub" do
    get :sub
    assert_response :success
  end

end
