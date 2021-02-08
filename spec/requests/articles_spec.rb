require 'rails_helper'
require 'factory_bot'

describe 'Blog Api', type: :request do
  describe 'Create one Article ' do
    it 'returns a successful message' do 

      article_params = {
        article: {
          title: "Dirk Kuyt's opinion on Liverpool vs Man City ahead of 'do or die' clash",
          content: "Liverpool host an in form Man City side on Sunday and former Red Dirk Kuyt is adamant that Jurgen Klopp's side need to win if they harbour any hopes of winning the league",
          image_url: "https://i2-prod.mirror.co.uk/incoming/article23446076.ece/ALTERNATES/s1200/0_FILE-PHOTO-Premier-League-Manchester-City-v-Liverpool.jpg"
        }
      }

      post '/api/v1/articles', params: article_params
     
      response.code.should eq "200"
    end
  end

  describe 'Get all Articles' do
    it 'returns a successful message' do 

      FactoryBot.create_list(:article , 10)

      get '/api/v1/articles'
      JSON.parse(response.body)["data"].count eq 10
    end
  end

  describe 'Get one Article' do
    it 'returns a the article information' do 

      article = FactoryBot.create(:article)
      
      get "/api/v1/articles/#{article.id}"

      article_req = JSON.parse(response.body)["data"]["attributes"]
      expect(article.attributes.except('created_at','updated_at')).to eq article_req
    end
  end

  describe 'Update one Article' do
    it 'returns a the updated article' do 

      article = FactoryBot.create(:article)
      
      put "/api/v1/articles/#{article.id}", params: {article: { content: "this is a new content"}}

      article_req = JSON.parse(response.body)["data"]["attributes"]
      expect(article_req["content"]).to eq "this is a new content"
    end
  end

  describe 'Destroy one Article' do
    it 'returns a successful message' do 

      article = FactoryBot.create(:article)
      
      delete "/api/v1/articles/#{article.id}"
      
      resp = JSON.parse(response.body)["message"]
      expect(JSON.parse(response.body)["message"]).to eq "Article destroyed!"
    end
  end

end 
 