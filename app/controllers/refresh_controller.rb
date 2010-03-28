class RefreshController < ApplicationController
  require 'fleakr'
  Fleakr.api_key = '739e578b0095d2ce5978331ac7466bd4'
  
  def get
    id = params[:id]
    
    response = 'myslideshows[' + id + '] = ' + photo_hash_array
    
    render({:content_type => :js, :text => response})    
  end
  
  protected
  
  def photo_to_hash(photo)
    {
      :src_s => photo.small.url,
      :src_m => photo.medium.url,
      :src_l => photo.original.url,
      :title => photo.title,
      :url => photo.url
    }
  end
  
  def photo_hash_array
    photos = Fleakr.search('iccp10 OR iccp2010')
    photos.collect{|p| photo_to_hash(p)}.to_json
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
