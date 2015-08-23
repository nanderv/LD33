map = {}

immovable = ["lying","sleeping"]


/*******************************************
  * Hospital room, first room in game.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_west_14", methods  : [words.walk], direction: words.east, hidden: 1, cond: [condition_false("lying down")]}
dir[1]      = {to: "window", methods  : [words.jump], direction: words.west, hidden: 1, cond: [condition_false("lying down")]}
// word, where, explained, visible
objects = [[words.toothbrush, words.sink, false, false], [words.sink,"",  false, false], [words.bed, "", false, false]]
action_reaction = {}
action_reaction.stand = ["Even though the room is dimly lit, you still see a window on the west, a door on the east, your bed and a sink.", "Damm, I have a headache."]
map.room_west_14 = {enter: "You wake up, alone, in a dark room. <br / > You don't remember this place at all."
 , thoughts : "Where am I? ",
   enter_again:"You are back at the hospital room where you woke up",
   description : "It's a hospital room",
   directions: dir,
   objects: objects,
   cond : {"lying down":1},
   action_reaction:  action_reaction}



/*******************************************
  * Jump out of window, death.
  *
  *******************************************/
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "The ground is still approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
map.window = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : "You are dead", directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


here = "room_west_14"

for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}


