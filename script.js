function screenMode(){
	const html = document.documentElement
	html.classList.toggle("light")
	
	const img = document.querySelector("#profile img")
	
	if(html.classList.contains("light")){
		img.setAttribute("src", "./assets/avatar-light.jpg")
		img.setAttribute("alt","Foto PB de Rodolfo Nakakubo")
		
	} else{
		img.setAttribute("src", "./assets/avatar.jpg")
		img.setAttribute("alt","Foto Colorida de Rodolfo Nakakubo")
	}
}