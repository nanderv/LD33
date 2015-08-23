
/*******************************************
  * Hospital hallway 14, west
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_west_14", methods  : [words.walk], hidden : 1, direction: words.west, cond: []}
 dir[1]      = {to: "hallway_northwest_14", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
 dir[2]      = {to: "hallway_southwest_14", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
 dir[3]      = {to: "hallway_centerwest_14", methods  : [words.walk],hidden : 1, direction: words.east, cond: [has_item(words.copper)]}
 objects =[]
descr = "You are in a hallway. To your west is the room you woke up in, the hallway runs north to south. To your east is a locked door." 
map.hallway_west_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}


/*******************************************
  * Hospital hallway 14, northwest
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_northwest_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "hallway_west_14", methods  : [words.walk], direction: words.south, cond: []}
 dir[2]      = {to: "hallway_north_14", methods  : [words.walk], direction: words.east, cond: []}
 objects =[]
 descr = "You are in a hallway. To your north a room. There are hallways here leading east and south." 
map.hallway_northwest_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, north
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_north_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "hallway_northwest_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[2]      = {to: "hallway_northeast_14", methods  : [words.walk], direction: words.east, cond: []}
 dir[3]      = {to: "hallway_centercenter_14", methods  : [words.walk], direction: words.south, cond: [has_item(words.copper)]}
descr = "You are in a hallway. To the north a room. The hallway runs west to east. To the south is a locked door." 

 objects =[]
map.hallway_north_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, northeast
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_northeast_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "hallway_north_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[2]      = {to: "hallway_east_14", methods  : [words.walk], direction: words.south, cond: []}
 objects =[]
 descr = "You are in a hallway...." 

map.hallway_northeast_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, east
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_east_14", methods  : [words.walk], direction: words.east, cond: []}
 dir[1]      = {to: "hallway_northeast_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.south, cond: []}
dir[3]      = {to: "hallway_centereast_14", methods  : [words.walk], direction: words.west, cond: [has_item(words.copper)]}
 objects =[]
map.hallway_east_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}


/*******************************************
  * Hospital hallway 14, southeast
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_kitchen_14", methods  : [words.walk], direction: words.east, cond: []}
 dir[1]      = {to: "hallway_east_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.west, cond: []}
 objects =[]
map.hallway_southeast_14 = {enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, south
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_reception_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "room_elevator_14", methods  : [words.walk], direction: words.south, cond: []}
 dir[2]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.east, cond: []}
 dir[3]      = {to: "hallway_southwest_14", methods  : [words.walk], direction: words.west, cond: []}
 objects =[]
map.hallway_south_14 ={enter: descr , enter_again: descr, description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}


/*******************************************
  * Hospital hallway 14, southwest
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_southwest_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[1]      = {to: "hallway_west_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.east, cond: []}
 objects =[]
map.hallway_southwest_14 = {enter: "You are in a hallway" , enter_again: "This hallway is in the northwest corner of the building.", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, centerwest
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_center_northwest_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "room_center_southwest_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_west_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[3]      = {to: "hallway_centercenter_14", methods  : [words.walk], direction: words.east, cond: []}
 objects =[]
map.hallway_centerwest_14 = {enter: "You are in a hallway" , enter_again: "This hallway is in the northwest corner of the building.", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, center
  *
  *******************************************/
dir = []
 dir[0]      = {to: "hallway_north_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_centerwest_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[3]      = {to: "hallway_centereast_14", methods  : [words.walk], direction: words.east, cond: []}
 objects =[]
map.hallway_center_14 = {enter: "You are in a hallway" , enter_again: "This hallway is in the northwest corner of the building.", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 14, centereast
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_center_northeast_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[1]      = {to: "room_center_southeast_14", methods  : [words.walk], direction: words.north, cond: []}
 dir[2]      = {to: "hallway_centercenter_14", methods  : [words.walk], direction: words.west, cond: []}
 dir[3]      = {to: "hallway_east_14", methods  : [words.walk], direction: words.east, cond: []}
 objects =[]
map.hallway_centereast_14 = {enter: "You are in a hallway" , enter_again: "This hallway is in the northwest corner of the building.", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}
