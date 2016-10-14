$(function () {

    var map;

    function initMap() {

        // Load the map
        var location = new google.maps.LatLng(50.0875726, 14.4189987);

        var mapCanvas = document.getElementById('map');
        
        // Map Options
        mapOptions = {
	    center: new google.maps.LatLng(20, 145.644),
	    zoom: 2,
	    minZoom: 1,
            mapTypeId: google.maps.MapTypeId.HYBRID 
	};
	
	map = new google.maps.Map(mapCanvas, mapOptions);
	
	// Latitude (Example)
	var latitude = -25.363;
	// Longitude (Example)
	var longitude = 131.044;
	// Info Message (Example)
	var infMess = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Title</h1>'+
        '<div id="bodyContent">'+
        '<p>Text.</p>'+
        '</div>'+
        '</div>';
	
	// Add a point with the latitude, the longitude and the info message
	addPoint(latitude, longitude, infMess);
	
    }
    
    //Add a single point with the info message
    function addPoint(latitude, longitude, infMess) {

        var point = {lat: latitude, lng: longitude};

        var infowindow = new google.maps.InfoWindow({
        	content: infMess
        });

        // Add the marker
        var marker = new google.maps.Marker({
        	position: point,
        	map: map,
        	// You can change it - hover action
        	title: 'Title',
        	// Point icon
        	icon: 'http://cdn.sobekrepository.org/images/misc/map_point.png'
        });

        // Add the click event each marker
        marker.addListener('click', function() {
        	infowindow.open(map, marker);
        });
    }

   google.maps.event.addDomListener(window, 'load', initMap);
});