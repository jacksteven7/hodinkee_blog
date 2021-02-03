module Api
  module V1
    class ArticlesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        articles = Article.all

        render json: ArticleSerializer.new(articles).serialized_json
      end

      def show
        article = Article.find_by(id: params[:id])

        render json: ArticleSerializer.new(article).serialized_json
      end

      def create
        article = Article.create(article_params)

        if article.save
          render json: ArticleSerializer.new(article).serialized_json
        else
          render json: { error: Article.errors.messages }, status: 422
        end
      end

      def update
        article = Article.find_by(id: params[:id])

        if Article.update(article_params)
          render json: ArticleSerializer.new(article).serialized_json
        else
          render json: { error: Article.errors.messages }, status: 422
        end
      end

      def destroy
        article = Article.find_by(id: params[:id])

        if article&.destroy!
          render json: { message: "Article destroyed!" }
        else
          render json: { error: "Article not found!" } , status: 422
        end
      end

      private

      def article_params
        params.require(:article).permit(:title, :content, :image_url)
      end

    end
  end
end