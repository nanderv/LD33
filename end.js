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
time_reaction[1] = [2, "9", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [3, "8", "",no_function,false]
time_reaction[3] = [4, "7", "I feel relieved, knowing that I managed to end the madness.",no_function,false]
time_reaction[4] = [5, "6", "",no_function,false]
time_reaction[5] = [6, "5", "",no_function,false]
time_reaction[6] = [7, "4", "",no_function,false]
time_reaction[7] = [8, "3", "",no_function,false]
time_reaction[8] = [9, "2", "",no_function,false]
time_reaction[9] = [10, "1", "",no_function,false]
time_reaction[10] = [11, "The building exploded. You are dead.", "",no_function,false]
time_reaction[10] = [12, "<br>", "",no_function,false]

time_reaction[11] = [14, "", "You killed a lot of innocent people. Congratultions, <b> you are a monster </b>.",wait_for_reset,false]
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
time_reaction[2] = [6, "You spend the rest of your life in jail. Congratulations, thanks to you your character spends the rest of his life in jail. <b>You are a monster </b>.", "",wait_for_reset,false]
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
time_reaction[0] = [2, "Your parachute opens", "",no_function,false]
time_reaction[1] = [4, "", "You go to the police.",switch_evidence,false]
map.death_escape_innocent = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}

function switch_evidence()
{
	var count = 0
   if(find_in_inventory(words.parachute))
   {

   }
   if(find_in_inventory(words.parachute))
   {

   }
   switch(count){
   case 0: change_map("escape_no_evidence")();break;
   case 1: change_map("escape_one_evidence")();break;
   case 2: default: change_map("escape_two_evidence")();
	}
}
/*******************************************
  * DEATH: escape_no_evidence
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "The police sees a distressed man. They received a phonecall from a mental hospital, with your description and the information that you are missing. They call the hospital.", "",no_function,false]
time_reaction[1] = [4, "", "Once you are back you are knocked unconscious.",reset_map,false]
map.escape_no_evidence = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}

/*******************************************
  * DEATH: escape_one_evidence
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "The police sees a distressed man. Despite the 'evidence' he hands over, they are not convinced. They received a phonecall from a mental hospital, with your description and the information that you are missing.", "",no_function,false]
time_reaction[1] = [4, "", "Once you are back in your room you are knocked unconscious.",reset_map,false]
map.escape_one_evidence = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}

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