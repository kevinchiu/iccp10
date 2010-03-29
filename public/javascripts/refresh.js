function checkFreshness () {
	url = "http://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=739e578b0095d2ce5978331ac7466bd4&user_id=48727269@N07&format=json&extras=url_o,url_s,url_m,url_l,date_upload"
	results = new JSONscriptRequest(url)
	results.buildScriptTag(); 
	results.addScriptTag();
}

function jsonFlickrApi(o) {
	current = o.photos.photo[photo.length-1].dateupload
	if(first){
		baseline = current
		first = false
	}else{
		if (current != baseline) {
			window.location=window.location
		}		
	}
}

first = true
setInterval("checkFreshness();", Math.floor(Math.random()*10000)+5000)
