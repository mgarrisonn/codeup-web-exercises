(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    //solution
    planets.unshift('The Sun');

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    //solution
    planets.push('Pluto');

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    //solution
    var theSun = planets.shift();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    //solution
    var pluto = planets.pop();

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    //solution
    console.log(planets.indexOf('Earth'));;

    console.log('Finding and logging the index of "Earth" in the planets array.');

    //solution
    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    //solution
    console.log(planets.sort());;

    console.log("Sorting the planets array.");
    console.log(planets);
})();
