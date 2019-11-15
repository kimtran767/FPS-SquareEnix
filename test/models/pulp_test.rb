# == Schema Information
#
# Table name: pulps
#
#  id            :integer          not null, primary key
#  title         :string
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  newspapers_id :integer          not null
#

require 'test_helper'

class PulpTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
