
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  # Artists 
    get '/artists' do
      artists = Artist.all
      artists.to_json
    end

    get '/artists/:id' do
      artist = Artist.find(params[:id])
      artist.to_json(include: :paintings)
    end

    get '/artists/:id/say_hi' do
      artist = { message: Artist.find(params[:id]).say_hi }
      artist.to_json
    end

    delete '/artists/:id' do
      artist = Artist.find(params[:id])
      artist.destroy
      artist.to_json
    end

    post '/artists' do
     artist = Artist.create(
      name: params[:name],
      art_movement: params[:art_movement],
      birth_place: params[:birth_place],
      birth_date: params[:birth_date]
      )
      artist.to_json
    end



    patch '/artists/:id' do
    artist = Artist.find(params[:id])
      artist.update(
        name: params[:name],
        art_movement: params[:art_movement],
        birth_place: params[:birth_place],
        birth_date: params[:birth_date]
      )
      artist.to_json
    end
  

  #paintings 

  get '/paintings' do
    paintings = Painting.all
    paintings.to_json
  end

  get '/paintings/:id' do
    painting = Painting.find(params[:id])
    painting.to_json(include: :artist)
  end

  delete '/paintings/:id' do
    painting = Painting.find(params[:id])
    painting.destroy
    painting.to_json
  end

  post '/paintings' do
    painting = Painting.create(
      name: params[:name],
      location: params[:location],
      medium: params[:medium],
      year_created: params[:year_created],
      artist_id: params[:artist_id]
    )
    painting.to_json
  end

  patch '/paintings/:id' do
    painting = Painting.find(params[:id])
    painting.update(
      name: params[:name],
      location: params[:location],
      medium: params[:medium],
      year_created: params[:year_created],
      artist_id: params[:artist_id]
    )
    painting.to_json
  end
  
end
