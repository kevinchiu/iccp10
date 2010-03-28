class RefreshController < ApplicationController
  def get
    id = params[:id]
    
    response = 'myslideshows[' + id + '] = ' + photo_hash_array
    
    render({:content_type => :js, :text => response})    
  end
  
  protected
  
  def photo_to_hash(p)
    {
      :src_s => p['url_s'],
      :src_m => p['url_m'],
      :src_l => p['url_o'],
      :title => p['title'],
      :url => 'http://www.flickr.com/photos/' + p['owner'] + '/' + p['id']
    }
  end
  
  def photo_hash_array
    flickr_search.map{|p| photo_to_hash(p)}.to_json
  end
  
  def flickr_search
    tags = params[:tags]
    per_page = params[:per_page]
    require 'xmlsimple'
    url = "http://www.flickr.com/services/rest/?method=flickr.photos.search&format=rest&api_key=739e578b0095d2ce5978331ac7466bd4&tags=#{tags}&per_page=#{per_page}0&extras=url_o,url_s,url_m,date_upload"
    xml_data = Net::HTTP.get_response(URI.parse(url)).body
    data = XmlSimple.xml_in(xml_data)
    data['photos'][0]['photo'].sort{|x,y| y["dateupload".to_i] <=> x["dateupload"].to_i}
  end
end
