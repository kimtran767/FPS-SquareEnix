class User < ApplicationRecord
    
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    # validate :password_complexity #did i use the right method?

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

  # def password_complexity #method right?

  #   return if password.blank? || password =~ /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,70}$/

  #   errors.add :password, 'Complexity requirement not met. Length should be minimum 8 characters and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character'
  # end

  def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password) 
      BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.update(session_token: SecureRandom.urlsafe_base64)
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
