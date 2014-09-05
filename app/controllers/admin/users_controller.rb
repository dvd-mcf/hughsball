class Admin::UsersController < Admin::BaseController
  before_action :set_user, only: [
    :show,
    :edit,
    :update,
    :destroy
  ]
  

  def index
    @users = User.search_and_order(params[:search], params[:page])
  end
  
  def show
    redirect_to edit_admin_user_path(params[:id])
  end
  
  def edit
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.skip_confirmation!
      @user.save
      redirect_to admin_users_path, notice: "#{@user.email} created."
    else
      @errors = @user.errors
      flash.now[:error] = @errors.full_messages[0]
      render 'new'
    end
  end
  
  def update
    new_params = user_params.dup
    new_params[:email] = new_params[:email].strip
    
    @user.email = new_params[:email]
    @user.password = new_params[:password] if new_params[:password].strip.length > 0
    @user.password_confirmation = new_params[:password_confirmation] if new_params[:password_confirmation].strip.length > 0
    @user.first_name = new_params[:first_name]
    @user.last_name = new_params[:last_name]
    @user.college = new_params[:college]

    
    if current_user.id != @user.id
      @user.admin = new_params[:admin]=="0" ? false : true
      @user.locked = new_params[:locked]=="0" ? false : true
    end
    
    if @user.valid?
      @user.skip_reconfirmation!
      @user.save
      redirect_to admin_users_path, notice: "#{@user.email} updated."
    else
      @errors = @user.errors
      flash.now[:error] = @errors.full_messages[0]
      render 'edit'
    end
  end

  def destroy
    @user.destroy
    flash[:notice] = "#{@user.email} deleted."
    redirect_to admin_users_path
  end
  
  private 
  
  def set_user
    @user = User.find(params[:id])
  rescue
    flash[:alert] = "The user with an id of #{params[:id]} doesn't exist."
    redirect_to admin_users_path
  end
  
  def user_params
    params.require(:user).permit(
    :email,
    :password,
    :password_confirmation,
    :first_name,
    :last_name,
    :college,
    :admin,
    :locked
    )
  end
  
end
