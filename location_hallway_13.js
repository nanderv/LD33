/*******************************************
  * Hospital floor 13, hallway entrance
  *
  *******************************************/
dir = []
	dir[0] = {to: "to_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
	dir[1] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}


objects = [[words.floorplan13, "", false, true]]

descr = "This hallway is the entrance of the 13th floor. To the west are the stairs back down. To the east is a hallway. There is a floorplan on the wall."

map.hallway_entrance_13 = {
	enter: "As you enter the 13th floor you hear footsteps coming from the corridor to the east. There is a hallway to your east, the stairs back down are to your west. You notice a floorplan on the wall.", 
	thoughts: "I should be careful.", 
	enter_again: descr, 
	description : [
		descr, 
		""], 
	directions: dir, 
	objects : objects , 
	cond : {}, 
	action_reaction : {}}

/*******************************************
  * Hospital floor 13, hallway north
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_entrance_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
	dir[1] = {to: "room_northeast_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
	dir[2] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}


objects = []

descr = "This hallway is in the northwest corner of this floor. To the west is the entrance of the floor. To the south is a hallway with a corner to the west. To the east is room."

map.hallway_north_13 = {
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
  * Hospital floor 13, hallway center
  *
  *******************************************/
dir = []
	dir[0] = {to: "room_northwest_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
	dir[1] = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
	dir[2] = {to: "room_east_13", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
	dir[3] = {to: "hallway_south_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}

objects = []

descr = "This hallway is in the center of this floor. The hallway runs north to west. To the north and south are rooms."

map.hallway_center_13 = {
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
  * Hospital floor 13, hallway south
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
	dir[1] = {to: "room_west_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
	dir[2] = {to: "room_south_13", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}

objects = []

descr = "This hallway is in the southwest corner of this floor. To the west is a room. To the south is an importantant-looking room. There is a hallway going north."

map.hallway_south_13 = {
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
  * Hospital floor 13, hallway south
  *
  *******************************************/
dir = []
	dir[0] = {to: "hallway_center_13", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
	dir[1] = {to: "room_west_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
	dir[2] = {to: "room_south_13", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}

objects = []

descr = "This hallway is in the southwest corner of this floor. To the west is a room. To the south is an importantant-looking room. There is a hallway going north."

map.hallway_death_13 = {
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



















