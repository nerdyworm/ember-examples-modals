class CogsController < ApplicationController
  respond_to :json

  def index
    respond_with Cog.all
  end

  def show
    respond_with Cog.find(params[:id])
  end

  def create
    respond_with Cog.create(params[:cog])
  end

  def update
    cog = Cog.find(params[:id])
    cog.update_attributes(params[:cog])

    respond_with cog
  end

  def destroy
    respond_with Cog.find(params[:id]).destroy
  end
end
