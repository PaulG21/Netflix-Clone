class Api::MylistsController < ApplicationController

    def show
        render :show
    end

    def index
        # debugger
        @mylists = MyList.where(user_id: current_user.id) #SQL query
        if @mylists
            render :index
        else
            render json: {message: "My List is empty"}, status: 400
        end

        # @mylists = MyList.all
    end

    def create
        @mylist = MyList.new(user_id: current_user.id, movie_id: params[:movieId])
        if @mylist.save
             @mylist = current_user.my_list
            render :index
        else
            render json: {message: "Failed to add to My List"}, status: 400
        end
    end

    def destroy
        @mylist = current_user.my_list.find_by(movie_id: params[:id])
        if @mylist
            @mylist.destroy
            render :index
        else
            render json: {message: "My List does not contain this"}, status: 422
        end
    end

end