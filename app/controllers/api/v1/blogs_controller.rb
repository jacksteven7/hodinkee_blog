module Api
  module V1
    class BlogsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        blogs = Blog.all

        render json: BlogSerializer.new(blogs).serialized_json
      end

      def show
        blog = Blog.find_by(id: params[:id])

        render json: BlogSerializer.new(blog).serialized_json
      end

      def create
        blog = Blog.create(blog_params)

        if blog.save
          render json: BlogSerializer.new(blog).serialized_json
        else
          render json: { error: blog.errors.messages }, status: 422
        end
      end

      def update
        blog = Blog.find_by(id: params[:id])

        if blog.update(blog_params)
          render json: BlogSerializer.new(blog).serialized_json
        else
          render json: { error: blog.errors.messages }, status: 422
        end
      end

      def destroy
        blog = Blog.find_by(id: params[:id])

        if blog&.destroy!
          render json: { message: "Blog destroyed!" }
        else
          render json: { error: "Blog not found!" } , status: 422
        end
      end

      private

      def blog_params
        params.require(:blog).permit(:title, :content, :image_url)
      end

    end
  end
end