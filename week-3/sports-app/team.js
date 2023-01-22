/* 
Title: Web340_Assign3
Author: Richard Krasso
Date: 1/22/2023
Description: A Word Document that describes how to complete Web340_Assign3
*/
/* 
Title: fruit.js
Author: Richard Krasso
Date: 1/22/2023
Description: One of four documents made to be used as an example for Web340_Assign3
*/

`use strict`

//Creates and initializes the properties of the Team class
class Team{
    constructor(name, mascot, playerCount){
        this.name = name
        this.mascot = mascot
        this.playerCount = playerCount
    }
}

//Exports the Team class for further use in other files
module.exports = Team;