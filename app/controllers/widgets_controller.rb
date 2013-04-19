class WidgetsController < ApplicationController
  respond_to :json

  def index
    respond_with Widget.all
  end

  def show
    respond_with Widget.find(params[:id])
  end

  def create
    respond_with Widget.create(params[:widget])
  end

  def update
    widget = Widget.find(params[:id])
    widget.update_attributes(params[:widget])

    respond_with widget
  end

  def destroy
    respond_with Widget.find(params[:id]).destroy
  end
end
