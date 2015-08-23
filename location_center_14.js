/*******************************************
  * Hospital reception, on the 14th floor, southeast room.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_center_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: [has_item(words.copper), condition_false("sitting")]}
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
   description : "This is the reception area. There is a large desk with a nice chair. To the east and west are small waiting areas with a few simple wooden chairs.",
   directions: dir,
   objects: objects,
   cond : {"sitting":0, "closed":1},
   action_reaction:  action_reaction}