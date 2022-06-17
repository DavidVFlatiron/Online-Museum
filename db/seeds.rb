puts "🌱 Seeding data..."

# Make 10 users
10.times do
  Artist.create(name: Faker::Name.name, art_movement: "#{Faker::Hipster.words[0]} #{rand() > 0.5 ? 'modernism' : 'classicism'}", birth_place: "#{Faker::Address.street_address}, #{Faker::Address.city}, #{Faker::Address.country}", birth_date: Faker::Date.between(from: '1000-09-23', to: '2002-09-25'))
end

# Make 40 paintings 

40.times do
    Painting.create(
        name: rand() > 0.5 ? "#{Faker::Emotion.noun} of #{Faker::Ancient.god}" : "#{Faker::Emotion.adjective} #{Faker::Hipster.words[0]}",
        location: "#{Faker::Address.street_address}, #{Faker::Address.city}, #{Faker::Address.country}",
        medium: "#{Faker::Hipster.words[0]} on #{Faker::Hipster.words[0]}", 
        year_created: Faker::Date.between(from: '1000-09-23', to: '2002-09-25'),
        artist_id: (rand() * Artist.count).round
        )
end



