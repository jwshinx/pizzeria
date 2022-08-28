require 'rails_helper'

describe '/api/v1/restaurants', type: :routing do
  describe 'GET /api/v1/restaurants' do
    it 'should route to restaurants#index' do
      expect(:get => 'api/v1/restaurants').to route_to(
        {
          controller: 'api/v1/restaurants',
          action: 'index'
        }
      )
    end
  end

  describe 'GET /api/v1/restaurants/:slug' do
    it 'should route to restaurants#show' do
      restaurant = create(:restaurant)
      expect(:get => "/api/v1/restaurants/#{restaurant.slug}").to route_to(
        {
          controller: 'api/v1/restaurants',
          action: 'show',
          slug: restaurant.slug
        }
      )
    end
  end

  describe 'POST /api/v1/restaurants' do
    it 'should route to restaurants#create' do
      expect(:post => '/api/v1/restaurants').to route_to(
        {
          controller: 'api/v1/restaurants',
          action: 'create'
        }
      )
    end
  end

  describe 'PUT /api/v1/restaurants/:id' do
    it 'should route to restaurants#update' do
      restaurant = create(:restaurant)
      expect(:put => "/api/v1/restaurants/#{restaurant.slug}").to route_to(
        {
          controller: 'api/v1/restaurants',
          action: 'update',
          slug: restaurant.slug
        }
      )
    end
  end

  describe 'DELETE /api/v1/restaurants/:id' do
    it 'should route to restaurants#update' do
      restaurant = create(:restaurant)
      expect(:delete => "/api/v1/restaurants/#{restaurant.slug}").to route_to(
        {
          controller: 'api/v1/restaurants',
          action: 'destroy',
          slug: restaurant.slug
        }
      )
    end
  end
end
