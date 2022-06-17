class Artist < ActiveRecord::Base
    has_many :paintings

    def say_hi
        "Hi, my name is #{self.name}. I was born on #{self.birth_date} in #{self.birth_place}, and I was part of the '#{self.art_movement}' art movement. Please enjoy my artwork!"
    end
end