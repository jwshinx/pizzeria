require 'rails_helper'

describe Restaurant, type: :model do
  describe 'given invalid restaurant' do
    it 'should not be valid' do
      restaurant = build(:restaurant, name: '')
      expect(restaurant).not_to be_valid
    end
  end

  describe 'given valid restaurant' do
    it 'should be valid' do
      restaurant = build(:restaurant)
      expect(restaurant).to be_valid
    end
  end
end
