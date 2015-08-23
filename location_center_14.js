/*******************************************
  * Hospital hallway 14, secretary
  *
  *******************************************/
dir = []
 dir[0]      = {to: "room_southwest_14", methods  : [words.walk], direction: words.south, cond: []}
 dir[1]      = {to: "hallway_southwest_14", methods  : [words.walk], direction: words.south, cond: []}
 dir[2]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.east, cond: []}
 dir[3]      = {to: "hallway_centercenter_14", methods  : [words.walk], direction: words.north, cond: [has_item(words.copper)]}

 objects =[[words.towel,"",  true, true]]
map.room_reception_14 = {enter: "You are in a hallway" , enter_again: "This hallway is in the northwest corner of the building.", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital reception, on the 14th floor, southeast room.
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_center_14", methods  : [words.walk], direction: words.north, hidden: 1, cond: []}
dir[1]      = {to: "hallway_southeast_14", methods  : [words.walk], direction: words.east, hidden: 1, cond: []}
dir[2]      = {to: "hallway_south_14", methods  : [words.walk], direction: words.south, hidden: 1, cond: []}
dir[3]      = {to: "hallway_southwest_14", methods  : [words.walk], direction: words.west, hidden: 1, cond: []}
// word, where, explained, visible
objects = []
action_reaction = {}
map.room_reception_14 = {enter: "You enter a dark room and can't really see anything", 
   thoughts : "I can smell... some kind of meat?",
   enter_again: "You are back in the kitchen",
   description : "It's a kitchen.",
   directions: dir,
   objects: objects,
   cond : {"lights":0},
   action_reaction:  action_reaction}