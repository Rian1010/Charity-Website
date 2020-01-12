window.initMap = function () {
    function initMap() {
        GoogleMap.initGoogleMap();
    }
    // Set up the location of each country to use them for the location of the markers
    function countryPosition(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    var syria = new countryPosition(35.009778, 38.459732);
    var southAfrica = new countryPosition(-31.054483, 24.168686);
    var indonesia = new countryPosition(-4.326026, 122.081875);
    var Uzbekistan = new countryPosition(42.084362, 63.582015);
    var Yemen = new countryPosition(15.830300, 47.516581);
    var Kyrgystan = new countryPosition(41.544684, 74.327115);
    var Bangladesh = new countryPosition(24.183282, 90.146031);
    var Tajikistan = new countryPosition(38.538064, 70.942738);
    var Pakistan = new countryPosition(29.861529, 69.397467);
    var India = new countryPosition(23.009295, 79.278429);
    var DRC = new countryPosition(-2.990635, 23.213607);
    var Mozambique = new countryPosition(-17.257179, 35.535016);
    var Nigeria = new countryPosition(9.702898, 8.131115);
    var Uganda = new countryPosition(1.453979, 32.347322);
    var SouthSudan = new countryPosition(7.396102, 30.066992);
    var Zimbabwe = new countryPosition(-19.041653, 29.827411);
    var Malawi = new countryPosition(13.2543, 34.3015);
    var Somalia = new countryPosition(2.940413, 45.343220);
    var Botswana = new countryPosition(-22.204538, 23.602852);
    var Bolivia = new countryPosition(-16.610980, -64.670684);
    var Guyana = new countryPosition(4.793348, -58.920553);
    var Ecuador = new countryPosition(-1.446133, -78.435942);
    var Haiti = new countryPosition(18.918287, -72.585389);
    var Brazil = new countryPosition(-7.891161, -55.828338);
    var Moldova = new countryPosition(47.572718, 28.461647);
    var Ukraine = new countryPosition(49.097680, 31.622624);
    var KosovoSerbia = new countryPosition(42.632686, 20.884051);
    var Mexico = new countryPosition(24.001237, -102.466664);
    var DetroitMIUSA = new countryPosition(42.333690, -83.048441);
    var UnitedStates = new countryPosition(40.131143, -101.715410);
    var Australia = new countryPosition(-24.972577, 134.742806);


    // Set up the initial zoomed in position on the map nearby the middle of it for one to at first have a clear overall look at the map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2.5,
        center: syria
    });

    // The content that shall appear in the info boxes of the markers
    var contentString = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Syria</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        `<p>Syria is going through the world's largest humanitarian crisis of all time. You could help to make a change!</p>` +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';

    var contentString2 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">South Africa</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>South Africa requires your support to improve economic growth and development!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';

    var contentString3 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Indonesia</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>As there is political instability, in Indonesia and after going through a lot of natural disasters, Indonesia needs your help, in order to lead a happier and healthier life!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';

    var contentString4 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Uzbekistan</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Since Uzbekistan lost subsidies from Russia in 1991, their economy is suffering. However, you could help them to live better lives, decrease child labour and get better education!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';

    var contentString5 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Yemen</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Yemen seems like it is going through the worst humanitarian crisisin 50 years, as war and horrific human right abuses still continue! Please donate to help people, whose lives are at risk!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString6 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Kyrgystan</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Kyrgystan is one of the poorest countries in Asia. Please help them overcome poverty and limited economic growth by donating!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString7 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Bangladesh</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>You could help Bangladesh against various kinds of violence, conflicts and more by donating!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString8 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Tajikistan</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Caritas is an organisation from a Catholic Church that helps people around the world, including Tajikistan to have clean water and better treatments against various illnesses.</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString9 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Pakistan</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Around two million people in Pakistan are blind in both eyes. Please donate to "The Fred Hallows Foundation", in order to help them! </p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString10 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">India</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The organisation called "Educate for Life" provides education, healthcare and community work. Please find out more by clicking the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString11 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Democratic Republic of Congo</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The Democratic Republic of Congo has the lowest GDP per capita in the world! You could help them to improve their education, decrease child labour and decrease poverty by donating!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString12 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Mozambique</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>In Mozambique, 27% of children cannot get education, 22% are engaged in child labour, 55% of girls have problems reading or writing and 46% of the people live in poverty! You could help them by donating!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString13 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Nigeria</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The organisation called "Child Voice" helps people in Nigeria, Uganda and South Sudan by giving them education, counselling and more! Find out more by clicking the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString14 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Uganda</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The organisation called "Child Voice" helps people in Nigeria, Uganda and South Sudan by giving them education, counselling and more! Find out more by clicking the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString15 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">South Sudan</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The organisation called "Child Voice" helps people in Nigeria, Uganda and South Sudan by giving them education, counselling and more! Find out more by clicking the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString16 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Zimbabwe</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Zimbabwe is suffering from natural disasters. Help them to have a better future by donating! For more information, please click the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString17 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Malawi</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Support Malawi to have greater education, improved health care, greater better conservation by donating to the organisation, "Ripple Africa"! Find out more by clicking on the button below!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString18 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Somalia</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Around 49% of children are caught in child labour and cannot receive education! Help children survive and help the education in Somalia to be improved, through donating! Please click the button below for more information!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString19 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Botswana</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Orphans and parents in Botswana need your support, as AIDS and poverty has been a big problem, in Botswana. Please find out more by clicking the button below and donate!</p>' +
        '<a href="donate.html#AsiaAfricaSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString20 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Bolivia</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>With 39% of people living in poverty and child labour still going on, Bolivia is the poorest country in South America. Please find out more by clicking on the button below and donate!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString21 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Guyana</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Due to a shortage of dollars, people in Guyana require medical assistance. Find out more by clicking on the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString22 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Ecuador</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>People in Ecuador, including indigenous people, need more access to clean water, education, health care and more! Please help them by donating and find more information, through clicking the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString23 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Haiti</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>The organisation called "Haiti-Now" helps people in Haiti against extreme poverty and social isolation, and supports them to have education. To find out more, please click the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString24 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Brazil</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>"Action Aid" educates children in slums, helps against drought and protect girls in Brazil. Find out more by clicking on the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString25 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Moldova</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>People in Moldova require gives orphans parental support, educates children, offers rehabilitation services and more. Find out more by clicking the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString26 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Ukraine</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>"Ukraine Charity" helps young adults, orphans and underprivilagessd children in Ukraine. For more information, please click on the button below!</p>' +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString27 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Kosovo, Serbia</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        `<p>"SOS Children's Villages offers kindergartens, family-based care and social centers in the capital city of Pristina. For more information, please click the button below!</p>` +
        '<a href="donate.html#SAEuropeSection" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString28 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Mexico</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Children and orphans, who got abused, neglected, abandoned and or went through extreme poverty in Mexico, get help by "Misión Mèxico". Please find out more by clicking the button below!</p>' +
        '<a href="donate.html#NAAusCharities" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString29 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Detroit, MI, USA</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>"McLaren" helps girls and parents, give education and more! Please click on the button below, in order to find out more!</p>' +
        '<a href="donate.html#NAAusCharities" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString30 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">United States</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>People that got affected by natural disasters receive help from "American Red Cross". In order to find out more, please click on the button below!</p>' +
        '<a href="donate.html#NAAusCharities" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';


    var contentString31 = '<div id="content">' +
        '</div>' +
        '<h2 id="markerInfoHeading">Australia</h2>' +
        '<div id="mapmarkerInfoBodyContent">' +
        '<p>Families and people with illnesses and injuries receive from organisations that help them to get treatment and stay close. For more information, please click on the button below!</p>' +
        '<a href="donate.html#NAAusCharities" class="btn donateButtonStyle">' +
        'Donate</a> ' +
        '</div>';



    // Set up the info windows to be available with the content in the variables above, each with a size of 250px max-width
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 250
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 250
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
        maxWidth: 250
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
        maxWidth: 250
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
        maxWidth: 250
    });

    var infowindow6 = new google.maps.InfoWindow({
        content: contentString6,
        maxWidth: 250
    });

    var infowindow7 = new google.maps.InfoWindow({
        content: contentString7,
        maxWidth: 250
    });

    var infowindow8 = new google.maps.InfoWindow({
        content: contentString8,
        maxWidth: 250
    });

    var infowindow9 = new google.maps.InfoWindow({
        content: contentString9,
        maxWidth: 250
    });

    var infowindow10 = new google.maps.InfoWindow({
        content: contentString10,
        maxWidth: 250
    });

    var infowindow11 = new google.maps.InfoWindow({
        content: contentString11,
        maxWidth: 250
    });

    var infowindow12 = new google.maps.InfoWindow({
        content: contentString12,
        maxWidth: 250
    });

    var infowindow13 = new google.maps.InfoWindow({
        content: contentString13,
        maxWidth: 250
    });

    var infowindow14 = new google.maps.InfoWindow({
        content: contentString14,
        maxWidth: 250
    });

    var infowindow15 = new google.maps.InfoWindow({
        content: contentString15,
        maxWidth: 250
    });

    var infowindow16 = new google.maps.InfoWindow({
        content: contentString16,
        maxWidth: 250
    });

    var infowindow17 = new google.maps.InfoWindow({
        content: contentString17,
        maxWidth: 250
    });

    var infowindow18 = new google.maps.InfoWindow({
        content: contentString18,
        maxWidth: 250
    });

    var infowindow19 = new google.maps.InfoWindow({
        content: contentString19,
        maxWidth: 250
    });

    var infowindow20 = new google.maps.InfoWindow({
        content: contentString20,
        maxWidth: 250
    });

    var infowindow21 = new google.maps.InfoWindow({
        content: contentString21,
        maxWidth: 250
    });

    var infowindow22 = new google.maps.InfoWindow({
        content: contentString22,
        maxWidth: 250
    });

    var infowindow23 = new google.maps.InfoWindow({
        content: contentString23,
        maxWidth: 250
    });

    var infowindow24 = new google.maps.InfoWindow({
        content: contentString24,
        maxWidth: 250
    });

    var infowindow25 = new google.maps.InfoWindow({
        content: contentString25,
        maxWidth: 250
    });

    var infowindow26 = new google.maps.InfoWindow({
        content: contentString26,
        maxWidth: 250
    });

    var infowindow27 = new google.maps.InfoWindow({
        content: contentString27,
        maxWidth: 250
    });

    var infowindow28 = new google.maps.InfoWindow({
        content: contentString28,
        maxWidth: 250
    });

    var infowindow29 = new google.maps.InfoWindow({
        content: contentString29,
        maxWidth: 250
    });

    var infowindow30 = new google.maps.InfoWindow({
        content: contentString30,
        maxWidth: 250
    });

    var infowindow31 = new google.maps.InfoWindow({
        content: contentString31,
        maxWidth: 250
    });

    // Set up markers for each country's position
    var marker = new google.maps.Marker({
        position: syria,
        map: map,
        title: 'Syria'
    });

    var marker2 = new google.maps.Marker({
        position: southAfrica,
        map: map,
        title: 'South Africa'
    });

    var marker3 = new google.maps.Marker({
        position: indonesia,
        map: map,
        title: 'Indonesia'
    });

    var marker4 = new google.maps.Marker({
        position: Uzbekistan,
        map: map,
        title: 'Uzbekistan'
    });


    var marker5 = new google.maps.Marker({
        position: Yemen,
        map: map,
        title: 'Yemen'
    });


    var marker6 = new google.maps.Marker({
        position: Kyrgystan,
        map: map,
        title: 'Kyrgystan'
    });


    var marker7 = new google.maps.Marker({
        position: Bangladesh,
        map: map,
        title: 'Bangladesh'
    });


    var marker8 = new google.maps.Marker({
        position: Tajikistan,
        map: map,
        title: 'Tajikistan'
    });


    var marker9 = new google.maps.Marker({
        position: Pakistan,
        map: map,
        title: 'Pakistan'
    });


    var marker10 = new google.maps.Marker({
        position: India,
        map: map,
        title: 'India'
    });


    var marker11 = new google.maps.Marker({
        position: DRC,
        map: map,
        title: 'Democratic Republic of Congo'
    });


    var marker12 = new google.maps.Marker({
        position: Mozambique,
        map: map,
        title: 'Mozambique'
    });


    var marker13 = new google.maps.Marker({
        position: Nigeria,
        map: map,
        title: 'Nigeria'
    });


    var marker14 = new google.maps.Marker({
        position: Uganda,
        map: map,
        title: 'Uganda'
    });


    var marker15 = new google.maps.Marker({
        position: SouthSudan,
        map: map,
        title: 'South Sudan'
    });


    var marker16 = new google.maps.Marker({
        position: Zimbabwe,
        map: map,
        title: 'Zimbabwe'
    });

    var marker17 = new google.maps.Marker({
        position: Malawi,
        map: map,
        title: 'Malawi'
    });

    var marker18 = new google.maps.Marker({
        position: Somalia,
        map: map,
        title: 'Somalia'
    });


    var marker19 = new google.maps.Marker({
        position: Botswana,
        map: map,
        title: 'Botswana'
    });


    var marker20 = new google.maps.Marker({
        position: Bolivia,
        map: map,
        title: 'Bolivia'
    });


    var marker21 = new google.maps.Marker({
        position: Guyana,
        map: map,
        title: 'Guyana'
    });


    var marker22 = new google.maps.Marker({
        position: Ecuador,
        map: map,
        title: 'Ecuador'
    });


    var marker23 = new google.maps.Marker({
        position: Haiti,
        map: map,
        title: 'Haiti'
    });


    var marker24 = new google.maps.Marker({
        position: Brazil,
        map: map,
        title: 'Brazil'
    });


    var marker25 = new google.maps.Marker({
        position: Moldova,
        map: map,
        title: 'Moldova'
    });


    var marker26 = new google.maps.Marker({
        position: Ukraine,
        map: map,
        title: 'Ukraine'
    });


    var marker27 = new google.maps.Marker({
        position: KosovoSerbia,
        map: map,
        title: 'KosovoSerbia'
    });


    var marker28 = new google.maps.Marker({
        position: Mexico,
        map: map,
        title: 'Mexico'
    });


    var marker29 = new google.maps.Marker({
        position: DetroitMIUSA,
        map: map,
        title: 'DetroitMIUSA'
    });


    var marker30 = new google.maps.Marker({
        position: UnitedStates,
        map: map,
        title: 'UnitedStates'
    });


    var marker31 = new google.maps.Marker({
        position: Australia,
        map: map,
        title: 'Australia'
    });




    // Open markers on click

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    marker2.addListener('click', function () {
        infowindow2.open(map, marker2);
    });

    marker3.addListener('click', function () {
        infowindow3.open(map, marker3);
    });

    marker4.addListener('click', function () {
        infowindow4.open(map, marker4);
    });

    marker5.addListener('click', function () {
        infowindow5.open(map, marker5);
    });

    marker6.addListener('click', function () {
        infowindow6.open(map, marker6);
    });

    marker7.addListener('click', function () {
        infowindow7.open(map, marker7);
    });

    marker8.addListener('click', function () {
        infowindow8.open(map, marker8);
    });

    marker9.addListener('click', function () {
        infowindow9.open(map, marker9);
    });

    marker10.addListener('click', function () {
        infowindow10.open(map, marker10);
    });

    marker11.addListener('click', function () {
        infowindow11.open(map, marker11);
    });


    marker12.addListener('click', function () {
        infowindow12.open(map, marker12);
    });


    marker13.addListener('click', function () {
        infowindow13.open(map, marker13);
    });


    marker14.addListener('click', function () {
        infowindow14.open(map, marker14);
    });


    marker15.addListener('click', function () {
        infowindow15.open(map, marker15);
    });


    marker16.addListener('click', function () {
        infowindow16.open(map, marker16);
    });


    marker17.addListener('click', function () {
        infowindow17.open(map, marker17);
    });


    marker18.addListener('click', function () {
        infowindow18.open(map, marker18);
    });


    marker19.addListener('click', function () {
        infowindow19.open(map, marker19);
    });


    marker20.addListener('click', function () {
        infowindow20.open(map, marker20);
    });


    marker21.addListener('click', function () {
        infowindow21.open(map, marker21);
    });


    marker22.addListener('click', function () {
        infowindow22.open(map, marker22);
    });


    marker23.addListener('click', function () {
        infowindow23.open(map, marker23);
    });


    marker24.addListener('click', function () {
        infowindow24.open(map, marker24);
    });


    marker25.addListener('click', function () {
        infowindow25.open(map, marker25);
    });


    marker26.addListener('click', function () {
        infowindow26.open(map, marker26);
    });


    marker27.addListener('click', function () {
        infowindow27.open(map, marker27);
    });


    marker28.addListener('click', function () {
        infowindow28.open(map, marker28);
    });


    marker29.addListener('click', function () {
        infowindow29.open(map, marker29);
    });


    marker30.addListener('click', function () {
        infowindow30.open(map, marker30);
    });


    marker31.addListener('click', function () {
        infowindow31.open(map, marker31);
    });
}