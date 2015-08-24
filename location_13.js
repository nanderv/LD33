/*******************************************
  * Hospital floor 13, northeast room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: [condition_false("sitting")]}

objects =[[words.bookcase, "", false, true], 
	[words.book, words.bookcase, false, false],
	[words.boxes, "", false, true], 
	[words.airduct, "", false, false], //make action
	[words.chair, "", false, true], 
	[words.desk, "", false, true], 
	[words.paper, words.desk, false, false], 
	[words.trashcan, "", false, true], 
	[words.rubbish, words.trashcan, false, true],
	[words.pencil, words.desk, false, false],
	[words.stapler, words.desk, false, false],
	[words.plant, "", false, true]]

action_reaction = {}
action_reaction.move_obj = ["As you move the boxes, you reveal an airduct.","I might fit in there.",reactions.makevisible(words.airduct)]

descr = "This room looks like an office. It contains a chair with a desk, a bookcase with some boxes on top, and a plant. There is a door to the west."

map.room_northeast_13 = {
	enter: descr, 
	thoughts: "I looks like someone has been working here.", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {"sitting": 0}, 
	action_reaction : action_reaction}

/*******************************************
  * Hospital floor 13, east room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}

objects =[
	[words.table, "", false, true],
	[words.chair, "", false, true], 
	[words.apple, words.table, false, true], 
	[words.document, words.table, false, false]]

descr = "This is a lounge, is contains several chairs and table. You see an apple lying on the table. There is a door to the north."

map.room_east_13 = {
	enter: descr, 
	thoughts: "I looks like someone was reading something here during a break.", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {}, 
	action_reaction : {}}

/*******************************************
  * Hospital floor 13, northwest room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}

action_reaction = {}
action_reaction.open = ["You find a sedative inside.","",reactions.makevisible(words.sedative)]

objects =[
	[words.cabinet, "", false, true],
	[words.sedative, "", false, false,],
	[words.stretcher, "", false, true]]

descr = "This room contains a few odd stretchers and a cabinet. There is a door to the south."

map.room_northwest_13 = {
	enter: descr, 
	thoughts: "", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {"closed":1}, 
	action_reaction : action_reaction}

/*******************************************
  * Hospital floor 13, west room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_south_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}

objects =[
	[words.airduct, "", false, true],
	[words.crates, "", false, true]]

descr = "It's some kind of cooled storage room with several crates. There is large, suspicious stain on the floor. Cold air is provided by an airduct. There is a door to east."

map.room_west_13 = {
	enter: descr, 
	thoughts: "It's cold in here.", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {}, 
	action_reaction : {}}

/*******************************************
  * Hospital floor 13, south room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.north, cond: [condition_false("capture")]}

objects =[
	[words.console, "", false, true],
	[words.chair, "", false, true], 
	[words.post, words.console, false, false],
	[words.button, words.console, false, true]]

descr = "In the middle of the room, a large console has been placed against the wall. There is a chair in front of it. The exit is to the north."

map.room_south_13 = {
	enter: "As you enter the room you face the back of a guard standing in front of a large console. The guard doesn't seem to have noticed you... yet.", 
	thoughts: "I should handle this carefully.", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {"capture": 1}, 
	action_reaction : {}}
