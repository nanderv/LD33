function reset_map ()
{
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
time_reaction[0] = [2, "", "I am put on a stretcher and moved somewhere. I can't make up where I'm going.",no_function,false]
time_reaction[1] = [4, "", "I see the lights on the ceiling flashing.",no_function,false]
time_reaction[2] = [6, "You start to lose consciousness.", "",reset_map,false]
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
time_reaction[0] = [2, "The ground is still rapidly approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
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
time_reaction[0] = [2, "The ground is still rapidly approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
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
time_reaction[0] = [2, "The ground is still rapidly approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
map.death_escape_guilty = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}



/*******************************************
  * DEATH: escape_innocent
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "The ground is still rapidly approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
map.death_boom = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : ["You are dead",""], directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}