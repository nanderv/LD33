/*******************************************
  * Hospital floor 13, northeast room
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}

objects =[]

descr = ""

map.room_northeast_13 = {
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
