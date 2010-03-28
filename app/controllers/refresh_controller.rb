class RefreshController < ApplicationController
  def get
    id = params[:id]
    
    response = 'myslideshows[' + id + '] = ' + photo_hash_array
    
    render({:content_type => :js, :text => response})    
  end
  
  protected
  
  def photo_to_hash(p)
    {
      :src_s => p['url_o'],
      :src_m => p['url_o'],
      :src_l => p['url_o'],
      :title => p['title'],
      :url => 'http://www.flickr.com/photos/' + p['owner'] + '/' + p['id']
    }
  end
  
  def photo_hash_array
    flickr_search.map{|p| photo_to_hash(p)}.to_json
  end
  
  def flickr_search
    require 'xmlsimple'
    url = 'http://www.flickr.com/services/rest/?method=flickr.photos.search&format=rest&api_key=739e578b0095d2ce5978331ac7466bd4&tags=iccp10,iccp2010&per_page=30&extras=url_o'
    xml_data = Net::HTTP.get_response(URI.parse(url)).body
    data = XmlSimple.xml_in(xml_data)
    data['photos'][0]['photo']
  end
  
  '[{
      "src_s": "http://farm3.static.flickr.com/2691/4465206449_0efba57e1d_m.jpg",
      "src_m": "http://farm3.static.flickr.com/2691/4465206449_0efba57e1d.jpg",
      "src_l": "http://farm3.static.flickr.com/2691/4465206449_eda088c2bc_o.jpg",
      "title": "ICCP10",
      "url": "http://kevinchiu.org"
  },
  {
      "src_s": "http://farm3.static.flickr.com/2796/4464164406_ae4f34ee2f_m.jpg",
      "src_m": "http://farm3.static.flickr.com/2796/4464164406_ae4f34ee2f.jpg",
      "src_l": "http://farm3.static.flickr.com/2796/4464164406_d463d3f789_o.jpg",
      "title": "IMG_6684.jpg",
      "url": "http://www.flickr.com/photos/48727269@N07/4464164406/"
  }]'
end
