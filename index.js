var gMap;
var marker1;
var marker2;

function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: { lat: 41.878, lng: 10 },
        zoom: 3
    });

    marker1 = new google.maps.Marker({
        position: { lat: 45.3306, lng: -91.4918 },
        map: gMap
    });

    marker2 = new google.maps.Marker({
        position: { lat: 36.3932, lng: 25.4615 },
        map: gMap,
        icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'
    });

    var infoWindow = new google.maps.InfoWindow({ content: 'Santorini, Greece' });

    marker2.addListener('click', function () {
        infoWindow.open(gMap, marker2);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame();
    });
}

function updateGame() {
    var zoomLevel = gMap.getZoom();
    var inBounds = gMap.getBounds().contains({ lat: 45.3306, lng: -91.4918 });

    console.log('InBounds:', inBounds);
    console.log('Zoom Level:', zoomLevel);
}

function initApplication() {
    console.log('Map Mania Lite - Starting');
}