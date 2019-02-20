var teams = ["arizona cardinals", "atlanta falcons", "baltimore ravens", "buffalo bills", 
"carolina panthers", "chicago bears", "cincinnati bengals", "cleveland browns", "dallas cowboys", 
"denver broncos", "detroit lions", "green bay packers", "houston texans", "indianapolis colts", 
"jacksonville jaguars", "kansas city chiefs", "los angeles chargers", "los angeles rams", "miami dolphins", 
"minnesota vikings", "new england patriots", "new orleans saints", "new york giants", "new york jets", 
"oakland raiders", "philadelphia eagles", "pittsburgh steelers", "san francisco 49ers", "seattle seahawks", 
"tampa bay buccaneers", "tennessee titans", "washington redskins"];

function random_team(teams){
    return teams[Math.floor(Math.random()*teams.length)];
    
}
//console.log(random_team(teams));
var store= teams;


console.log("change to team here is the return" + store);

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    console.log(letter);

var match = document.getElementById(teams);
   if (letter === match){
        console.log("correct guess");
    }
    else{
     console.log("wrong guess" + match);
   }

}