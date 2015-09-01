function reset_map ()
{
	konsole.print("Person: let's reset and try again..")
	reset(murderer)
}
function wait_for_reset()
{
	konsole.over_ride_func = function () 
	{
		if(konsole.input_field.value.toLowerCase() == "reset")
		{

			konsole.out.innerHTML = ""
			konsole.input_field.value = ""
			extra_digit =  Math.floor((Math.random() * 98) + 1);

			reset(0)
		} else {
			konsole.print("Type reset.")
		}
}
}
function freeze()
{
	konsole.over_ride_func = function () {}	
}
/*******************************************
  * DEATH: Jumped out of window.
  * This is an ending. This does NOT loop.
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [0, " ", "",freeze,false]
time_reaction[1] = [2, "", "Did you really think you could get away with that?",no_function,false]
time_reaction[2] = [4, "", "Your actions resulted in your character plummeting to his death. The game is over. <b> You are a monster.</b>",no_function,false]
time_reaction[3] = [6, "Type reset to reset the game and restart..", "",wait_for_reset,false]
map.death_jump = {enter: "" , enter_again: "", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}

/*******************************************
  * DEATH: Killed, innocent
  * This loops back.
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [0, " ", "",freeze,false]
time_reaction[1] = [2, "", "I am put on a stretcher and moved somewhere. I can't make up where I'm going.",no_function,false]
time_reaction[2] = [4, "", "I see the lights on the ceiling flashing.",no_function,false]
time_reaction[3] = [6, "You start to lose consciousness.", "",reset_map,false]
map.death_killed_innocent = {enter: "" , enter_again: "" ,description : ["", ""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}


/*******************************************
  * DEATH: Killed, guilty
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [0, " ", "",freeze,false]
time_reaction[1] = [2, "", "I am put on a stretcher and moved somewhere. I can't make up where I'm going.",no_function,false]
time_reaction[2] = [4, "", "I see the lights on the ceiling flashing.",no_function,false]
time_reaction[3] = [6, "You start to lose consciousness.", "",reset_map,false]
map.death_killed_guilty = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}

/*******************************************
  * DEATH: Boom
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [1, "A timer is counting down from 10.", "",freeze,false]
time_reaction[1] = [2, "9 - <i> I don't think this is going to end well</i> ", "",no_function,false]
time_reaction[2] = [3, "8", "",no_function,false]
time_reaction[3] = [4, "7 - <i> I feel relieved, knowing that I managed to end the madness. </i>", "",no_function,false]
time_reaction[4] = [5, "6", "",no_function,false]
time_reaction[5] = [6, "5", "",no_function,false]
time_reaction[6] = [7, "4", "",no_function,false]
time_reaction[7] = [8, "3", "",no_function,false]
time_reaction[8] = [9, "2", "",no_function,false]
time_reaction[9] = [10, "1", "",no_function,false]
time_reaction[10] = [11, "The building exploded. You are dead.", "",no_function,false]
time_reaction[11] = [12, "<br>", "",no_function,false]
time_reaction[12] = [14, "", "You killed a lot of innocent people, along with some criminals. Does this make you a hero? I don't think so. Congratultions, <b> you are a monster </b>.",wait_for_reset,false]
map.death_boom = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}



/*******************************************
  * DEATH: escape_guilty
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "Your parachute opens", "",no_function,false]
time_reaction[1] = [4, "You go to the police. However, they have already been notified of the fact that you are a murderer.", "",no_function,false]
time_reaction[2] = [6, "Congratulations, thanks to you your character spends the rest of his life in jail. <b>You are a monster </b>.", "",wait_for_reset,false]
time_reaction[3] = [8, "", "Thank you for playing our game. We hope you enjoyed it.",no_function,false]
time_reaction[4] = [9, "", "~ Tim & Nander.",no_function,false]
map.death_escape_guilty = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}



/*******************************************
  * DEATH: escape_innocent, default: no evidence
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "Your parachute opens", "",switch_evidence,false]
map.death_escape_innocent = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}

function switch_evidence()
{
	var count = 0
  debugger;
   if(find_in_inventory(words.log))
   {
    count ++
   }  
   if(find_in_inventory(words.document))
   {
    count ++
   }
   switch(count){
   default: case 0: case 1: change_map("escape_no_evidence")();break;
   case 2:  change_map("escape_two_evidence")();
	}
}
/*******************************************
  * DEATH: escape_no_evidence
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "You run away. You are free from the researchers..", "",no_function,false]
time_reaction[1] = [5, "", "Congratulations: <b> You are <u>not</u> a monster</b> ",no_function,false]
time_reaction[2] = [6, "", " ",no_function,false]
time_reaction[3] = [7, "", " ",no_function,false]
time_reaction[4] = [8, "", "Thank you for playing our game. We hope you enjoyed it.",no_function,false]
time_reaction[5] = [9, "", "~ Tim & Nander.",no_function,false]
map.escape_no_evidence = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}

/*******************************************
  * DEATH: escape_two_evidence
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "The police sees a distressed man, but once you hand over the evidence, they have no choice but to believe you.", "",no_function,false]
time_reaction[1] = [4, "The research laboratory is shut down. You are free.", " ",no_function,false]
time_reaction[2] = [6, "", "Congratulations: <b> You are <u>not</u> a monster</b> ",no_function,false]
time_reaction[3] = [8, "", " ",no_function,false]
time_reaction[4] = [10, "", " ",no_function,false]
time_reaction[5] = [10, "", "Thank you for playing our game. We hope you enjoyed it.",no_function,false]
time_reaction[6] = [12, "", "~ Tim & Nander.",no_function,false]

map.escape_two_evidence = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}



for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}