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

  delete '/artists/:id' do
    artist = Artist.find(params[:id])
    artist.destroy
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

  

end
