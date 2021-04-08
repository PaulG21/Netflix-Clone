class Api::MylistsController < ApplicationController

    def show
        render :show
    end

    def index
        @mylists = MyList.where(user_id: current_user.id)
        # @mylists = MyList.all

        if @mylists
            render :index
        else
            render json: {message: "My List is empty"}, status: 400
        end
    end

    def create
        @mylist = MyList.new(user_id: current_user.id, movie_id: params[:movieId])
        if @mylist.save
            # render json: {movie_id: @mylist[:movie_id]}
            render :show
        else
            render json: {message: "Failed to add to My List"}, status: 400
        end
    end

    def destroy
        @mylist = current_user.mylists.find_by(movie_id: params[:id])
        # @mylists = MyList.find_by(user_id: current_user.id, movie_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else
            render json: {message: "My List does not contain this"}, status: 422
        end
    end

end