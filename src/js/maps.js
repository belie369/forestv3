// Initialize and add the map
function initMap() {
	// The location of McD Krakow
	const cracow = { lat: 50.088188342170994, lng: 19.8928494793613 };
	// The map, centered at McD Krakow
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: cracow,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: cracow,
		map: map,
	});
}
