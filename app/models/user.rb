class User < ActiveRecord::Base
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token
  before_save :ensure_notebook

  has_many(
    :notebooks,
    class_name: 'Notebook',
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :tags,
    class_name: "Tag",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :notes,
    through: :notebooks,
    source: :notes
  )

  def ensure_notebook
    if self.notebooks.empty?
      self.notebooks.build(:name => "First Notebook")
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
