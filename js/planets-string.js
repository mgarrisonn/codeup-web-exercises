(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // var namesString = "Joe,Bob,Sally";

//     console.log(namesString);
// // Joe,Bob,Sally
//
//     var namesArray = namesString.split(',');
//
//     console.log(namesArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanet = planetsArray.join('<br>');

    var planetsList = "<ul>";
        planetsArray.foreach(function(element) {
            planetsList += "<li>" + planet + "</li>";
        });
    planetsList += "</ul>";

    document.getElementById('planets-list').innerHTML = planetsList;

})();
