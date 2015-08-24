/*******************************************
  * Hospital reception, on the 14th floor, southeast room.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_centercenter_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: [has_item(words.copper), condition_false("sitting")]}
dir[1]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.east, hidden: 1, cond: [condition_false("sitting")]}
dir[2]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.south, hidden: 1, cond: [condition_false("sitting")]}
dir[3]      = {to: "hallway_southwest_14", methods  : [words.walk], direction: words.west, hidden: 1, cond: [condition_false("sitting")]}
// word, where, explained, visible
objects = [[words.newspaper, "", false, false], [words.drawer, words.desk, false, true], [words.desk, "", false, true], [words.chair, "", false, true]]
action_reaction = {}
action_reaction.sit = ["As you sit down, you notice an unlocked drawer.",
	""]
action_reaction.open = ["You see a newspaper inside.",
	"",
	reactions.makevisible(words.newspaper)]
map.room_reception_14 = {enter: "You are at the reception. You see large desk with a nice chair.", 
   thoughts : "That chair looks comfortable.",
   enter_again: "You are at the reception.",
   description : ["This is the reception area. There is a large desk with a nice chair. To the east and west are small waiting areas with a few simple wooden chairs. To the north is a locked door, to the south is a hallway.",""],
   directions: dir,
   objects: objects,
   cond : {"sitting":0, "closed":1},
   action_reaction:  action_reaction}

/*******************************************
* Hospital center southwest room, on the 14th floor.
*
*******************************************/
dir = []
dir[0]      = {to: "hallway_centerwest_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: [condition_false("sitting")]}
// word, where, explained, visible
objects = [[words.chair, "", false, true], [words.table, "", false, true], [words.rubbish, words.table, false, true], [words.small, words.rubbish, false, false]]
action_reaction = {}
map.room_center_southwest_14 = {
	enter: "You enter what looks like an examination room. There is a chair in the middle of the room, next to a table with some rubbish on it.", 
	thoughts : "Have I been here before?",
	enter_again: "You enter the examination room.",
	description : ["This is an examination room. The walls a plain but dirty white. There is a chair in the middle of the room, next to a table with some rubbish on it.",""],
	directions: dir,
	objects: objects,
	cond : {"sitting":0},
	action_reaction:  action_reaction}

/*******************************************
* Hospital center southeast room, on the 14th floor.
*
*******************************************/
dir = []
dir[0]      = {to: "hallway_centereast_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: []}
// word, where, explained, visible
objects = [[words.painting, "", false, true], [words.safe, "", false, false], [words.parachute, "", false, false]]
action_reaction = {}
action_reaction.move_obj = ["You found a safe.", "", reactions.makevisible(words.safe)]
map.room_center_southeast_14 = {
	enter: "You enter a room which is completely empty except for a painting some flowers on the far wall.", 
	thoughts : "I like this painting.",
	enter_again: "You enter the room with the painting.",
	description : ["The walls of this mostly empty room are painted a light beige. There is a painting on the far wall. There are some scuff marks next to the painting.","This room somehow calmes me."],
	directions: dir,
	objects: objects,
	cond : {"closed":1},
	action_reaction:  action_reaction}

/*******************************************
* Hospital center northwest room, on the 14th floor.
*
*******************************************/
dir = []
dir[0]      = {to: "hallway_centerwest_14", methods  : [words.walk], direction: words.south, hidden: 1, cond: []}
// word, where, explained, visible
objects = []
action_reaction = {}
map.room_center_northwest_14 = {
	enter: "Cheater.", 
	thoughts : "I can't be here.",
	enter_again: "Cheater.",
	description : ["Cheater.","I can't be here."],
	directions: dir,
	objects: objects,
	cond : {},
	action_reaction:  action_reaction}

dir = []
dir[0]      = {to: "hallway_centereast_14", methods  : [words.walk], direction: words.south, hidden: 1, cond: []}
// word, where, explained, visible
objects = [[words.table, "", false, true], [words.medical, "", false, true], [words.file, words.table, false, true]]
action_reaction = {}
map.room_center_northeast_14 = {
	enter: "You enter a bright, tiled room, which has been perfectly cleaned. There is a table with some medical equipment in the corner.", 
	thoughts : "My headache seems worse here.",
	enter_again: "You enter the room with the medical equipment.",
	description : ["It is a tiled room, presumably for easy cleaning. The room has been meticulously cleaned. There is a table with some medical equipment in the corner.",
		"My headache seems worse here."],
	directions: dir,
	objects: objects,
	cond : {},
	action_reaction:  action_reaction}







