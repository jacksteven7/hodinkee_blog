class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :image_url
  
end
