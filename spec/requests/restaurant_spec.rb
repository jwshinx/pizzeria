require 'rails_helper'

describe 'Restaurant', type: :request do
  describe 'POST /api/v1/restaurants' do
    context 'given valid params' do
      it 'should create a restaurant' do
        name_value = 'pizza hut'
        image_url_value = 'https://pizza-hut-image.png'
        location_value = 'la'

        expect {
          post '/api/v1/restaurants', params: {
            restaurant: { 
              name: name_value,
              image_url: image_url_value,
              location: location_value
            }
          }
        }.to change { Restaurant.count }.from(0).to(1)

        body = JSON.parse(response.body)
        expect(response).to have_http_status(:ok)
        # puts "\n\n"
        # pp body
        # puts "\n\n"

        # {"data"=>
        #   {"id"=>"24",
        #    "type"=>"restaurant",
        #    "attributes"=>
        #     {"name"=>"pizza hut",
        #      "slug"=>"pizza-hut",
        #      "image_url"=>"https://pizza-hut-image.png",
        #      "location"=>"la"},
        #    "relationships"=>{"reviews"=>{"data"=>[]}}}}

        expect(body.dig('data', 'id')).not_to be_nil
        expect(body.dig('data', 'type')).to eq('restaurant')
        expect(body.dig('data', 'attributes', 'name')).to eq(name_value)
        expect(body.dig('data', 'attributes', 'image_url')).to eq(image_url_value)
        expect(body.dig('data', 'attributes', 'location')).to eq(location_value)
        expect(body.dig('data', 'attributes', 'slug')).to eq(name_value.parameterize)
      end
    end

    context 'given invalid params' do
      it 'should not create a restaurant' do
        image_url_value = 'https://pizza-hut-image.png'
        location_value = 'la'

        post '/api/v1/restaurants', params: {
          restaurant: { 
            name: '',
            image_url: image_url_value,
            location: location_value
          }
        }

        expect(response).to have_http_status(:unprocessable_entity)
        expect(Restaurant.count).to eq(0)
        body = JSON.parse(response.body)
        # puts "\n\n"
        # pp body
        # puts "\n\n"
        # {"error"=>{"name"=>["can't be blank"]}}

        expect(body.dig('error', 'name')).to include("can't be blank")
      end
    end
  end

  describe 'DELETE /api/v1/restaurants/:id' do
    context 'given valid id' do
      xit 'should destroy restaurant' do
        restaurant = create(:restaurant, name: 'fender 123', price: 500)

        delete "/api/v1/restaurants/#{restaurant.id}"
        expect(response).to have_http_status(:ok)
        data = JSON.parse(response.body)
        expect(data).to eq({})
      end
    end

    context 'given invalid id' do
      xit 'should not destroy restaurant' do
        restaurant = create(:restaurant, name: 'pizza shop 123', price: 500)

        random_number = 333
        delete "/api/v1/restaurants/#{restaurant.id + random_number}"
        expect(response).to have_http_status(:not_found)
        data = JSON.parse(response.body)
        expect(data['message']).to match(/Couldn't find Restaurant/)
      end
    end
  end

  xdescribe 'PUT /api/v1/restaurants/:id' do
    context 'given invalid id' do
      it 'should not update restaurant' do
        restaurant = create(:restaurant, name: 'pizza shop 123', price: 500)

        random_number = 333
        put "/api/v1/restaurants/#{restaurant.id + random_number}"
        expect(response).to have_http_status(:not_found)
        data = JSON.parse(response.body)
        expect(data['message']).to match(/Couldn't find Restaurant/)
      end
    end

    context 'given valid id' do
      it 'should update restaurant' do
        restaurant = create(:restaurant, name: 'pizza shop 123', price: 500)

        put "/api/v1/restaurants/#{restaurant.id}", params: {
          restaurant: {
            name: 'pizza shop 999'
          }
        }
        expect(response).to have_http_status(:ok)
        data = JSON.parse(response.body)
        expect(data).to eq(
          {'id' => 1, 'name' => 'pizza shop 999', 'price' => 500, 'stores' => []},
        )
      end
    end
  end

  xdescribe 'GET /api/v1/restaurants/:id' do
    context 'given invalid id' do
      it 'should return an error' do
        restaurant = create(:restaurant, name: 'pizza shop 123', price: 500)

        random_number = 333
        get "/api/v1/restaurants/#{restaurant.id + random_number}"
        expect(response).to have_http_status(:not_found)
        data = JSON.parse(response.body)
        expect(data['message']).to match(/Couldn't find Restaurant/)
      end
    end

    context 'given valid id' do
      it 'should return restaurants with id' do
        restaurant = create(:restaurant, name: 'pizza shop 123', price: 500)

        get "/api/v1/restaurants/#{restaurant.id}"
        expect(response).to have_http_status(:ok)

        data = JSON.parse(response.body)

        expect(data).to eq(
          {'id' => 1, 'name' => 'pizza shop 123', 'price' => 500, 'stores' => []},
        )
      end
    end
  end

  xdescribe 'GET /api/v1/restaurants' do
    it 'should return all restaurants' do
      create(:restaurant, name: 'pizza shop 123')

      get '/api/v1/restaurants'
      expect(restaurant.all.length).to eq(1)
      expect(response).to have_http_status(:ok)
      data = JSON.parse(response.body)

      expect(data.first['name']).to eq('pizza shop 123')
    end
  end
end
