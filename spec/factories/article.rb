require 'faker'

FactoryBot.define do 
  factory :article do
    title { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
    image_url { Faker::Avatar.image }
  end
end