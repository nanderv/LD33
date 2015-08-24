/*******************************************
  * Hospital hallway 12, to_13
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_north_12", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
dir[1]      = {to: "hallway_north_13", methods  : [words.walk],hidden : 1, direction: words.up, cond: []}
objects =[]
var enterr  = "In this room you see a large staircase going up. It looks like no cost was saved while building this. The staircase runs upstairs, but it seems it doesn't go as far as the elevator went down." 
var enter_again  = "You enter a room with a staircase going up." 
var descr  = "The room is large and well-decorated." 
var descr_t = "I don't know if I should continue."

map.to_13 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 12, experiment_business
  *
  *******************************************/

 dir = []
dir[0]      = {to: "hallway_north_12", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
// word, where, explained, visible
objects = [[words.cabinet, "", false, true], [words.log, words.cabinet, false,false]]

var enterr  = "You enter a room, seperated in two sides by a wall with a window in it. On  your side is a test subject in a chair, on the other side is a researcher. The test subject appears to have electrodes on arms. There's a filing cabinet in a corner." 
var enter_again  = "You enter the business side of the laboratory." 
var descr  = "It seems a bad experiment is done here." 
var descr_t = ""
map.room_experiment_business ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}





/*******************************************
  * Hospital hallway 12, experiment_client
  *******************************************/
dir = []
dir[0]      = {to: "hallway_east_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
objects =[]
var enterr  = "You enter a room, seperated in two sides by a wall with a window in it. On your side is a researcher, on the other side is a test subject in a chair. The test subject appears to have electrodes on arms." 
var enter_again  = "You enter a laboratory." 
var descr  = "It seems a bad experiment is done here." 
var descr_t = ""
map.room_experiment_client ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}



/*******************************************
  * Hospital hallway 12, room_east_12
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_east_12", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
objects =[[words.sedative,words.drawer,false,false],[words.drawer, words.desk,false,false],[words.desk,"",false,true],[words.lasagna,"",false,true]]
var enterr  = "You enter a mess room. There's some food and a desk. The researcher is also here." 
var enter_again  = "You enter a mess room.." 
var descr  = "" 
var descr_t = ""
map.room_east_12 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}


/*******************************************
  * Hospital hallway 12, room_west_12
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_west_12", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
objects =[[words.waiver, "", false, true]]
var enterr  = "You enter a waiting room. It has waiver forms on the desk. There's a filled in waiver here. There's nobody here at the moment." 
var enter_again  = "You enter a waiting room." 
var descr  = "There are some seats here, and there's a desk." 
var descr_t = "I shouldn't stay here long; I shouldn't be here."
map.room_west_12 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}









