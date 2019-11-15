# == Schema Information
#
# Table name: newspapers
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  date       :date             not null
#  body       :text             not null
#  author     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class NewspaperTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
