/*******************************************
  * Hospital floor 13, northeast room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: [condition_false("sitting")]}

objects =[[words.bookcase, "", false, true], 
	[words.boxes, "", false, true], 
	[words.airduct, "", false, false], //must have air eat duct synonym
	[words.chair, "", false, true] 
	[words.table, "", false, true], 
	[words.paper, words.table, false, false], 
	[words.trashcan, "", false, true], 
	[words.rubbish, words.trashcan, false, false],
	[words.pencil, words.table, false, false],
	[words.stapler, words.table, false, false]
	[words.plant, "", false, true]]

action_reaction = {}
action_reaction.move = ["As you move the boxes, you reveal an air duct.","I might fit in there.",reactions.makevisible(words.airduct)]

descr = "This room looks like an office. It contains a chair with a table, a bookcase with some boxes on top, and a plant."

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
	action_reaction : actions_reaction}

/*******************************************
  * Hospital floor 13, east room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}

objects =[]

descr = ""

map.room_east_13 = {
	enter: descr, 
	thoughts: "", 
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

objects =[]

descr = ""

map.room_northwest_13 = {
	enter: descr, 
	thoughts: "", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {}, 
	action_reaction : {}}

/*******************************************
  * Hospital floor 13, west room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_south_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}

objects =[]

descr = ""

map.room_west_13 = {
	enter: descr, 
	thoughts: "", 
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

objects =[]

descr = ""

map.room_south_13 = {
	enter: descr, 
	thoughts: "", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {"capture": 1}, 
	action_reaction : {}}
