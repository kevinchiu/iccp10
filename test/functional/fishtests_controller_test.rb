require 'test_helper'

class FishtestsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fishtests)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fishtest" do
    assert_difference('Fishtest.count') do
      post :create, :fishtest => { }
    end

    assert_redirected_to fishtest_path(assigns(:fishtest))
  end

  test "should show fishtest" do
    get :show, :id => fishtests(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => fishtests(:one).to_param
    assert_response :success
  end

  test "should update fishtest" do
    put :update, :id => fishtests(:one).to_param, :fishtest => { }
    assert_redirected_to fishtest_path(assigns(:fishtest))
  end

  test "should destroy fishtest" do
    assert_difference('Fishtest.count', -1) do
      delete :destroy, :id => fishtests(:one).to_param
    end

    assert_redirected_to fishtests_path
  end
end
