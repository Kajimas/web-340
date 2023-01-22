/* 
Title: Web340_Assign3
Author: Richard Krasso
Date: 1/22/2023
Description: A Word Document that describes how to complete Web340_Assign3
*/
/* 
Title: index.js
Author: Richard Krasso
Date: 1/22/2023
Description: One of four documents made to be used as an example for Web340_Assign3
*/

`use strict`;

//Imports TeamManager from the previous directories' team-manager.js
const TeamManager = require(`../team-manager.js`);

//
let teams = TeamManager.getTeams();

// Displays the contents of the teams array
console.log(`--DISPLAYING TEAMS--`);
for (let team of teams ){
    console.log(TeamManager.displayTeam(team))
}


// Creates constants named alabama and lsu respectively
// Both constants call the getTeam() function 
const alabama = TeamManager.getTeam(`Alabama`);
const lsu = TeamManager.getTeam(`LSU`);


// Displays the contents of the alabama and lsu constants respectively
console.log(`--DISPLAYING A SINGLE TEAM--`);
console.log(TeamManager.displayTeam(alabama));
console.log(`--DISPLAYING A SINGLE TEAM--`);
console.log(TeamManager.displayTeam(lsu));