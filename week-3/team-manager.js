/* 
Title: Web340_Assign3
Author: Richard Krasso
Date: 1/22/2023
Description: A Word Document that describes how to complete Web340_Assign3
*/
/* 
Title: fruit-manager.js
Author: Richard Krasso
Date: 1/22/2023
Description: One of four documents made to be used as an example for Web340_Assign3
*/

`use strict`;

//Imports Team from the sport-app's team.js
const Team = require(`./sports-app/team.js`);

// A new constant named teams is assigned an array of five 
// team objects 
const teams = [
  new Team(`Alabama`, `Crimson Tide`, 45),
  new Team(`LSU`, `Tigers`, 45),
  new Team(`Georgia`, `Bulldogs`, 45),
  new Team(`Texas`, `Longhorns`, 45),
  new Team(`USC`, `Trojans`, 45),
];

//Exports getTeams and assigns it an anonymous function that 
//returns fruits 
module.exports.getTeams = function () {
  return teams;
};

//Exports getTeam and assigns it an anonymous function that 
//returns a team based on its name property 
module.exports.getTeam = function (name) {
  return teams.find((team) => team.name === name);
};

//Exports displayTeam and assigns it an anonymous function 
//that returns a string involving a team's name, mascot, and 
//player count 
module.exports.displayTeam = function (team) {
  return `Name: ${team.name} \nMascot: ${team.mascot} \nPlayer Count: ${team.playerCount} \n`;
};
