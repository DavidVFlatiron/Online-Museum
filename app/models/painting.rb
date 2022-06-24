class Painting < ActiveRecord::Base
    belongs_to :artist

    def self.define
        "art is meant to be enjoyed!"
    end
end