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
			rand_30 = Math.floor(Math.random()*31)
			setTimeout("window.location=window.location", (rand_30+10)*1000)
		}		
	}
}

first = true
url = 'http://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=739e578b0095d2ce5978331ac7466bd4&user_id=48727269@N07&per_page=40&extras=url_o'

setInterval("checkFreshness();", 600000)
