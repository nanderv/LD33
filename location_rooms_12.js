/*******************************************
  * Hospital hallway 12, to_13
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_north_12", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
dir[1]      = {to: "hallway_entrance_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
objects =[]
var enterr  = "In this room you see a large staircase going up on the west side of the room. It looks like no cost was saved while building this. The staircase runs upstairs, but it seems it doesn't go as far as the elevator went down." 
var enter_again  = "You enter a room with a staircase going up on the west side. The exit of the room is to the east.." 
var descr  = "The room is large and well-decorated. The staircase in the room takes an 180 degree turn." 
var descr_t = "I don't know if I should continue."

map.to_13 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 12, experiment_business
  *
  *******************************************/

 dir = []
dir[0]      = {to: "hallway_north_12", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
// word, where, explained, visible
objects = [[words.cabinet, "", false, true], [words.log, "", false,false]]
action_reaction = {}
action_reaction.open = ["You find a log.","",reactions.makevisible(words.log)]
var enterr  = "You enter a room, seperated in two sides by a wall with a window in it. On  your side is a test subject in a chair, on the other side is a researcher. The test subject appears to have electrodes on arms. There's a cabinet in a corner." 
var enter_again  = "You enter the business side of the laboratory." 
var descr  = "It seems a bad experiment is done here." 
var descr_t = ""
map.room_experiment_business ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : { closed:1}, action_reaction : action_reaction}




function check_lab()
{
  if(get_npc("Researcher"))
    get_npc("Researcher").asked_to_leave =false
}
/*******************************************
  * Hospital hallway 12, experiment_client
  *******************************************/
dir = []
dir[0]      = {to: "hallway_east_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
objects =[]
var time_reaction = []
// time, text, reaction, function, used
time_reaction[0] = [2, "", "",check_lab,false]
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
objects =[[words.sedative,words.drawer,false,false],[words.drawer, "",false,true],[words.desk,"",false,true],[words.lasagna,"",false,true]]

var enterr  = "You enter a mess room. There's some food and a desk. The researcher is also here." 
var enter_again  = "You enter a mess room.." 
var descr  = "This is a mess room. There's some food and a desk. The researcher is also here." 
var descr_t = ""
map.room_east_12 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}


/*******************************************
  * Hospital hallway 12, room_west_12
  *
  *******************************************/
dir = []
dir[0]      = {to: "hallway_west_12", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}
objects =[[words.waiver, "", false, true],[words.desk, "", false, true],[words.drawer, "", false, true]]

var enterr  = "You enter a waiting room. It has waiver forms on the desk. There's a filled in waiver here. There's nobody here at the moment." 
var enter_again  = "You enter a waiting room." 
var descr  = "There are some seats here, and there's a desk." 
var descr_t = "I shouldn't stay here long; I shouldn't be here."
map.room_west_12 ={enter: enterr , enter_again: enter_again,description : [descr,descr_t], directions: dir, objects : objects , image: "", cond : {closed:1}, action_reaction : {}}









