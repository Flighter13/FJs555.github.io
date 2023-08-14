var parallaxImages = document.getElementsByClassName("parallax-images");

for (var i = 0 ; i < parallaxImages.length ; i++) {
	parallaxImages[i].style.display = "block";
}

window.addEventListener("mousemove", function(e) {
	var plane = document.getElementById("plane");
	plane.style.left = (-e.x  * 0.05) + 500 + "px";
	plane.style.top = (-e.y * 0.05) + "px";
	var backClouds = document.getElementById("back-clouds");
	backClouds.style.left = (-e.x  * 0.02) - 100 + "px";
	backClouds.style.top = (-e.y * 0.2) + "px";
	var frontClouds = document.getElementById("front-clouds");
	frontClouds.style.right = (-e.x  * 0.01) - 100 + "px";
	frontClouds.style.bottom = (-e.y * 0.01) + "px";
});