class Student < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
    validates :email, uniqueness: true
    # validates :first_name, presence: true
    # validates :last_name, presence: true
    has_many :appointments
    has_many :instruments, through: :appointments

    # def jwt_payload
    #   super.merg()
    # end
end
