function embedSlideshow(){
	embed = document.createElement('iframe')
	embed.setAttribute('width', '100%')
	embed.setAttribute('height', '100%')
	embed.setAttribute('frameborder', '0')
	embed.setAttribute('src', 'http://iccp10.com')
}

window.onload = embedSlideshow()