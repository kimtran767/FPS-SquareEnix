# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  birthday        :date             not null
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment

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
