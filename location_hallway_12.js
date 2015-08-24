function guard_check () 
{
	if(!get_npc("Roxanne"))
	{
		konsole.print("Dead guards don't check employee badges.")
		return true
	}
	if(find_in_inventory(words.badge))
	{
		konsole.print("Guard: Move along")
		return true
	} else {
		konsole.print("Guard: You are not an employee, you can't go any further.")
		return false

	}

}
/*******************************************
  * Hospital hallway 12, south
  *
  *******************************************/
dir = []
 dir[0]      = {to: "hallway_north_12", methods  : [words.walk],hidden : 1, direction: words.north, cond: [guard_check]}
 dir[1]      = {to: "room_elevator_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
 dir[2]      = {to: "hallway_east_12", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
 dir[3]      = {to: "hallway_west_12", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
 objects =[]
 descr = "From where you are hallways leave in every direction. The hallway north seems to be blocked by a guard." 

map.hallway_south_12 ={enter: descr , enter_again: descr,description : [descr,""], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 12, north
  *
  *******************************************/
dir = []
 dir[1]      = {to: "hallway_south_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
 dir[2]      = {to: "to_13", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
 dir[0]      = {to: "room_experiment_business", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
 objects =[]
 descr = "The hallway ends here. Return by going south, or enter a room to your west and east." 

map.hallway_north_12 ={enter: descr , enter_again: descr,description : [descr,""], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}

/*******************************************
  * Hospital hallway 12, east
  *
  *******************************************/
  function east_cond()
  {
  	if(exp.started)
  		return true
  	konsole.print("You can't enter this room.")
  	return false
  }
dir = []
 dir[0]      = {to: "hallway_south_12", methods  : [words.walk],hidden : 1, direction: words.west, cond: []}
 dir[1]      = {to: "room_east_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: [east_cond]}
 // The one blow has to remain number 2. Hardcoded scripting reasons.
  dir[2]      = {to: "room_experiment_client", methods  : [words.walk],hidden : 1, direction: words.north, cond: []}

 objects =[]
 descr = "The hallway ends here. Return by going west, or enter rooms to your south and north." 

map.hallway_east_12 ={enter: descr , enter_again: descr,description : [descr,""], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}





/*******************************************
  * Hospital hallway 12, west
  *
  *******************************************/
dir = []
 
 dir[1]      = {to: "hallway_south_12", methods  : [words.walk],hidden : 1, direction: words.east, cond: []}
 dir[0]      = {to: "room_west_12", methods  : [words.walk],hidden : 1, direction: words.south, cond: []}
 objects =[]
 descr = "The hallway ends here. Return by going east, or enter rooms to your south and north."

map.hallway_west_12 ={enter: descr , enter_again: descr,description : [descr,""], directions: dir, objects : objects , image: "", cond : {}, action_reaction : {}}
