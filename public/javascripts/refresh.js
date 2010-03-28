function checkFreshness () {
	results = new JSONscriptRequest(url)
	results.buildScriptTag(); 
	results.addScriptTag();
}

function jsonFlickrApi(o) {
	if(first){
		baseline = o.toSource()
		first = false
	}else{
		current = o.toSource()
		if (current != baseline) {
			rand_5 = Math.floor(Math.random()*6)
			setTimeout("window.location=window.location", rand_5*1000)
		}		
	}
}

first = true
url = "http://www.flickr.com/services/json/?method=flickr.people.getPublicPhotos&api_key=739e578b0095d2ce5978331ac7466bd4&user_id=48727269@N07&extras=url_o,url_s,url_m,url_l,date_upload"

setInterval("checkFreshness();", 10000)
