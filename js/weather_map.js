"use strict";
$(document).ready(function(){
var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
var weatherOptions = {
    lat: 29.4241,
    lon: -98.4936,
    appid: OPEN_WEATHER_MAP_KEY,
    exclude: 'minutely, current, hourly',
    units: 'imperial',
    timezone: 'Chicago'
};
$.get(weatherUrl, weatherOptions).done(function (data) {
    console.log(data);
    console.log(data.daily);
    console.log(data.daily[0]);
    // for (var i = 0; i < data.daily.length; i++) {
    //     var html = "<ul class='weather-list'> ";
    //     html += "<li class='list-group-item'>" + new Date(data.daily[0].dt * 1000) + "</li>";
    //     html += "<li class='list-group-item'>" + data.daily[i].temp + "</li>";
    //     html += "<li class='list-group-item'>" + data.daily[i].weather[0].description + "</li>";
    //     html += "<li class='list-group-item'>" + +"</li>";
    //     html += "</ul>";
    // }
    // $('#weather-info').append(html);

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
});

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

});
