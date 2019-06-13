function initMap() {
    var syria = {
        lat: 35.009778,
        lng: 38.459732
    };

    var southAfrica = {
        lat: -31.054483,
        lng: 24.168686
    };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2.5,
        center: syria
        //{
        //          lat: 46.619261,
        //        lng: -33.134766
        //  }
    });


    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var contentString = '<div id="content">' +
        '</div>' +
        '<h2 id="SyriaHeading">Syria</h2>' +
        '<div id="bodyContent">' +
        '<p>This is Syria</p>' +
        '<a href="donate.html">' +
        'Donate/a> ' +
        '</div>';
    var contentString2 = '<div id="content">' +
        '</div>' +
        '<h2 id="SyriaHeading">Uluru</h2>' +
        '<div id="bodyContent">' +
        '<p>This is Uluru</p>' +
        '<a href="donate.html">' +
        'Donate/a> ' +
        '</div>';

    var locations = [
        //Syria
        //{
        //  lat: 35.009778,
        //lng: 38.459732
        //},
        //South Africa
        //{
        //    lat: -31.054483,
        //    lng: 24.168686
        //},
        //Indonesia
        {
            lat: -4.326026,
            lng: 122.081875
        },
        //Uzbekistan
        {
            lat: 42.084362,
            lng: 63.582015
        }, //Yemen
        {
            lat: 15.830300,
            lng: 47.516581
        }, //Kyrgystan
        {
            lat: 41.544684,
            lng: 74.327115
        }, //Bangladesh
        {
            lat: 24.183282,
            lng: 90.146031
        }, //Tajikistan
        {
            lat: 38.538064,
            lng: 70.942738
        }, //Pakistan
        {
            lat: 29.861529,
            lng: 69.397467
        }, //India
        {
            lat: 23.009295,
            lng: 79.278429
        }, //DRC
        {
            lat: -2.990635,
            lng: 23.213607
        }, //Mozambique
        {
            lat: -17.257179,
            lng: 35.535016
        }, //Nigeria
        {
            lat: 9.702898,
            lng: 8.131115
        }, //Uganda
        {
            lat: 1.453979,
            lng: 32.347322
        }, //South Sudan
        {
            lat: 7.396102,
            lng: 30.066992
        }, //Zimbabwe
        {
            lat: -19.041653,
            lng: 29.827411
        }, //Malawi
        {
            lat: -13.517843,
            lng: 34.309239
        }, //Somalia
        {
            lat: 2.940413,
            lng: 45.343220
        }, //Botswana
        {
            lat: -22.204538,
            lng: 23.602852
        }, //Bolivia
        {
            lat: -16.610980,
            lng: -64.670684
        }, //Guyana
        {
            lat: 4.793348,
            lng: -58.920553
        }, //Ecuador
        {
            lat: -1.446133,
            lng: -78.435942
        }, //Haiti 
        {
            lat: 18.918287,
            lng: -72.585389
        }, //Brazil
        {
            lat: -7.891161,
            lng: -55.828338
        }, //Moldova
        {
            lat: 47.572718,
            lng: 28.461647
        }, //Ukraine
        {
            lat: 49.097680,
            lng: 31.622624
        }, //Kosovo, Serbia
        {
            lat: 42.632686,
            lng: 20.884051
        }, //Mexico
        {
            lat: 24.001237,
            lng: -102.466664
        }, //Detroit, MI, USA
        {
            lat: 42.333690,
            lng: -83.048441
        }, //United States
        {
            lat: 40.131143,
            lng: -101.715410
        }, //Australia 
        {
            lat: -24.972577,
            lng: 134.742806
        }
    ];

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });



    var marker = new google.maps.Marker({
        position: syria, southAfrica,
        map: map,
        title: 'Syria'
    });


    marker.addListener('click', function() {
        infowindow.open(map, marker);

    });

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
initMap();
