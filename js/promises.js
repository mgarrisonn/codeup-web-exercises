"use strict";
// $(document).ready(function (){
//    function userInfo(username) {
//        var githubAPI = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}});
//        githubAPI.then(response => response.json())
//            .then(events => console.log(new Date(events[0].created_at).toDateString()));
//    }
//    userInfo('mgarrisonn');
// });

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        // want to filter through PushEvents only
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

getLastCommitDate('mgarrisonn').then(date => {
    console.log(new Date(date).toDateString());
});

function wait(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
       setTimeout(() => {
           if(seconds > 1000){
               console.log("You'll see this after " + seconds/1000 + " seconds");
           } else {
               console.log("You'll see this after " + seconds/1000 + " seconds");
           }
       }, seconds)
    });
}

wait(1);
wait(2);
wait(3);