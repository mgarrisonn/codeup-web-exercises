"use strict";
$(document).ready(function () {

    //-----------weather for san antonio--------
    // var weatherIcon = 'http://openweathermap.org/img/wn/10d@2x.png';
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.4241,
        lon: -98.4936,
        appid: OPEN_WEATHER_MAP_KEY,
        exclude: 'minutely, current, hourly',
        units: 'imperial',
        timezone: 'Chicago'
    };
    //-------------5 day forecast-------------
    $.get(weatherUrl, weatherOptions).done(function (data) {
        console.log(data);
        console.log(data.daily);
        console.log(data.daily[0]);
        function weeklyForecast() {
            data.daily.forEach(function (day, index) {
                if (index <= 4) {
                    var grabDate = new Date(day.dt * 1000);
                    var html = "<div class='card-body'>";
                    html += "<div class='card-header text-center'>" + " " + (grabDate.getMonth() + 1) + "/" + grabDate.getDate() + "/" + grabDate.getFullYear() + "</div>";
                    html += "<li class='list-group-item'>" + "High/Lows: " + day.temp.max + " &#8457;" + "/" + day.temp.min + " &#8457;" + "</li>";
                    html += "<li class='list-group-item'>" + "Description: " + day.weather[0].description + "</li>";
                    html += "<li class='list-group-item'>" + "Humidity: " + day.humidity + "</li>";
                    html += "<li class='list-group-item'>" + "Wind: " + day.wind_speed + "</li>";
                    html += "<li class='list-group-item'>" + "Pressure: " + day.pressure + "</li>";

                    html += "</div>";
                    $('#weather-info').append(html);
                }
            });
        };
        //---------weather based on marker-------
        function markerDaily (){
            var lngLat = marker.getLngLat();
            var longitude = lngLat.lng;
            var latitude = lngLat.lat;
            weatherOptions.lat = latitude
            weatherOptions.lon = longitude
            reverseGeocode({lng: longitude, lat: latitude}, mapboxKey).then(function(result){
                $('#current-city').empty()
                $('#current-city').append("Current Location " + result)
            });
            weeklyForecast();
        }
    });

    var searchBar = document.querySelector('#input');
    $("newLocation").click(function(e) {
        e.preventDefault();
        geocode(searchBar.value, mapboxKey).then(function(result) {
            map.setCenter(result);
            map.setZoom(10);
            marker.setLngLat(result);
            markerDaily();
        })
    });

    // MAPBOX
    mapboxgl.accessToken = mapboxKey;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: {lng: -98.4936, lat: 29.4241},
    });

    var marker = new mapboxgl.Marker();
    marker.setLngLat({lng: -98.4936, lat: 29.4241});
    marker.addTo(map);
    marker.setDraggable(true);

    // reverseGeocode(marker.getLngLat(), mapboxKey).then(function (results) {
    //     console.log(results);
    //     $('#current-city').html('Current City: ' + results);
    // });

});
