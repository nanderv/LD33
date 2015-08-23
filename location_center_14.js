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
