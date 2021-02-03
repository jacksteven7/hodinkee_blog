class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :content, :image_url
  
end
