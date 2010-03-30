

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
      :src_l => p['url_m'],
      :title => p['title'],
      :url => 'http://www.flickr.com/photos/' + p['owner'] + '/' + p['id']
    }
  end
  
  def photo_hash_array
    flickr_search.map{|p| photo_to_hash(p)}.to_json
  end
  
  def flickr_search
    # per_page = params[:per_page]
    # per_page = 5
    require 'xmlsimple'
    url = "http://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=739e578b0095d2ce5978331ac7466bd4&user_id=48727269@N07&extras=url_o,url_s,url_m,url_l,date_upload"
    xml_data = Net::HTTP.get_response(URI.parse(url)).body
    data = XmlSimple.xml_in(xml_data)
    results = data['photos'][0]['photo'].sort_by{rand}
    top = results.max{|a,b| a["dateupload"].to_i <=> b["dateupload"].to_i}
    #.sort{|x,y| y["dateupload"].to_i <=> x["dateupload"].to_i}
    recent = results.index(top)
    results[0], results[recent] = results[recent], results[0]
    results
  end
end
