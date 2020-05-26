"use strict";
$(document).ready(function (){
   function userInfo(username) {
       var githubAPI = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}});
       githubAPI.then(response => response.json())
           .then(events => console.log(new Date(events[0].created_at).toDateString()));
   }
   userInfo('mgarrisonn');
});