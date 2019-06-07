function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var locations = [{
        lat: 50.0328308,
        lng: 8.6947798
    }, {
        lat: -33.928992,
        lng: 18.417396
    }, {
        lat: 40.754932,
        lng: -73.984016
    }];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
