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

objects = [[words.toothbrush, words.sink, false, false], [words.sink,"",  false, true], [words.bed, "", false, true], [words.window, "", false, true]]
action_reaction = {}
action_reaction.stand = ["Even though the room is dimly lit, you still see a window on the west, a door on the east, your bed and a sink.", "Damm, I have a headache."]
map.room_west_14 = {enter: "You wake up, alone, in a dark room. <br / > You don't remember this place at all.", 
   thoughts : "Where am I?",
   enter_again: "You are back at the hospital room where you woke up",
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
time_reaction[0] = [2, "The ground is still rapidly approaching", "",no_function,false]
time_reaction[1] = [4, "", "I don't think this is going to end well",no_function,false]
time_reaction[2] = [6, "You are dead", "",no_function,false]
map.window = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : "You are dead", directions: [], objects : [] , image: "", cond: {dead: 1}, action_reaction : {},time_reaction: time_reaction}


here = "room_west_14"

for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}


/*******************************************
  * Hospital kitchen, on the 14th floor, southeast room.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.west, hidden: 1, cond: []}
// word, where, explained, visible
objects = [[words.porkchops, words.countertop, false, true], [words.knife, words.countertop, false, false], [words.stove, "", false, true], [words.countertop, "", false, true]]
action_reaction = {}
action_reaction.turn_lights = ["Now that the room is lit, you can see that most of it hasn't been cleaned for quite a while. The only clean things in here are a stove and a countertop next to it. There is some food on the countertop.",
   "It looks like someone recently cooked here."]
map.room_kitchen_14 = {enter: "You enter a dark room and can't really see anything", 
   thoughts : "I can smell... some kind of meat?",
   enter_again: "You are back in the kitchen",
   description : "It's a kitchen.",
   directions: dir,
   objects: objects,
   cond : {"lights":0},
   action_reaction:  action_reaction}


/*******************************************
  * Hospital elevator, on the 14th floor.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: []}
dir[1]      = {to: "room_elevator_12", methods  : [words.go], direction: words.down, hidden: 1, cond: []}
// word, where, explained, visible
objects = [[words.panel, "", false, true]]
action_reaction = {}
map.room_elevator_14 = {enter: "You enter the elevator. There is a panel with buttons on the wall.", 
   thoughts : "",
   enter_again: "You enter the elevator.",
   description : "It is an elevator. There is a panel with buttons on the wall.",
   directions: dir,
   objects: objects,
   cond : {},
   action_reaction:  action_reaction}


/*******************************************
  * Hospital elevator, on the 12th floor.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_south_12", methods  : [words.walk], direction: words.north, hidden: 1, cond: []}
dir[1]      = {to: "room_elevator_14", methods  : [words.go], direction: words.up, hidden: 1, cond: []}
// word, where, explained, visible
objects = []
action_reaction = {}
map.room_elevator_12 = {enter: "You enter the elevator.", 
   thoughts : "",
   enter_again: "You enter the elevator.",
   description : "",
   directions: dir,
   objects: objects,
   cond : {},
   action_reaction:  action_reaction}