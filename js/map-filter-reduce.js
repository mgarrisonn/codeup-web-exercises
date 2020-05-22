const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeLanguages =  users.filter((user) => user.languages.length > 2);
console.log(threeLanguages);

//Use .map to create an array of strings where each element is a user's email address
let filteredEmail = users.map(user => {
    return user.email;
});
console.log(filteredEmail);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalExperience);

let averageExperience = totalExperience/users.length;
console.log(averageExperience);

//Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longestEmail, user) => {
   if (longestEmail.length > user.email.length) {
       return longestEmail;
   } else {
       return user.email;
   }
}, "");
console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let names = users.reduce((finalString, instructor) => {
//    if(index < users.length - 1) {
//        return `$(finalString)$(instructor.nam.substring(0,1).toUpperCase()
//    } $(instructor.name.substring(1,instructor.name.length).toLowerCase()},`
//    } else {
//        return `$(finalString)$(instructor.nam.substring(0,1).toUpperCase()
//    } $(instructor.name.substring(1,instructor.name.length).toLowerCase()},`
//    }
// }, "Your instructors are: ");

// ES6
let names = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name,'');
console.log("Your instructors are: " + names + '.');

// using function format, not ES6
// let names = users.reduce(function(sentence, user) {
//     if(sentence === '') {
//         // this means we're on our first run through
//         return user.name; // this means user.name is being returned to 'sentence'
//     } else {
//         // we're on our 2nd through last run through
//         return sentence + ', ' + user.name; // i.e. 2nd run through 'ryan' + ', ' + 'zach'
//         // 3rd run through 'ryan , zach' + ', ' + 'luis'
//     }
// },'');
// console.log("Your instructors are: " + names + '.');

//Use .reduce to get the unique list of languages from the list of users.
let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages){
        if (!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList
}, []);

console.log(uniqueLangs);