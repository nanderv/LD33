hit_points = 5
max_points = 6
dodging = false
function get_npc_nr(npc)
{
	for(var i=0;i < npcs.length; i++)
	{
		if(npcs[i] == npc)
			return i
	}
}
function start_fight (npc) {
	npc.start_time = central_time
	return function  ()
	{
		var input = konsole.input_field.value
		konsole.input_field.value = ""
		if((input == "sedate" || input == "sedative") && ! ( ! find_in_inventory(words.sedative)))
		{
			for(var i = 0 ; i< inventory.length; i++)
			{
				if(inventory[i] == words.sedative)
				{
					npc.hit_points =-1
					konsole.print("Sedated "+ npc.type)
					konsole.print("Sedative lost")
					npc.in_combat = false
					npc.die()
					konsole.over_ride_func = null
					inventory.splice(i,1)

					npcs.splice(npc.identifier,1)
					return true
				}
			}
			konsole.print("You don't have sedative")
			return false
		}
		if(input == "dodge") 
		{
			dodge = true
			konsole.print("Dodging next attack")
			return true
		} 
		if(input == "hit")
		{
			if(! (!find_in_inventory(words.knife)))
			{
				npc.hit_points -= 4
				konsole.print(npc.type + " hit with knife")

			} else {
			npc.hit_points --
			konsole.print(npc.type + "  hit")

			}
			if(npc.hit_points <= 0)
			{

				konsole.print(npc.type + " is dead.")
				murderer = 1
				npc.die()
				konsole.over_ride_func = null
				npcs.splice(get_npc_nr(npc),1)
			}
			return true
		}
		konsole.print("Action failed")
		return false

	}
}



function get_npc(word)
{
	var result = null
	for(var i=0;i<npcs.length; i++){
		var npc = npcs[i]
		if(npc.current_room == here)
		{
			if(word.toLowerCase() == "person".toLowerCase())
			{
				if (result == null)
				{
					result =  {type: "npc", text: npc.name, npc}
				} else {
					return null
				}
			}
			if (npc.name.toLowerCase() == word.toLowerCase())
			{
				 return {type: "npc", text: npc.name, npc}
			}
			if (npc.type.toLowerCase() == word.toLowerCase())
			{
				return {type: "npc", text: npc.name, npc}
			}

		}
	}
	return result
}

/*
* Floor 14 guard
*/

npcs = []

npc = {}
npc.talk = "Hello"
npc.name = "Hank"
npc.won = false
npc.type = "Guard"
npc.hit_points = 20
npc.reply = "My name is Hank"
npc.ticks = 0
npc.timeout = 3
npc.current_room = "room_northeast_14"
npc.sleeps = true
npc.in_combat = false
npc.rooms = ["room_northeast_14"]
npc.identifier = 0
npc.react = function () {
	return true
}

npc.handle = function()
{
	var that  = np0
	if(that.won )
		return true

	if( central_time - start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The "+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit by " + that.name)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true
}
npc.die = function () {
	var that = np0
	if(that.hit_points <= 0)
		return false
	return true
}
npcs[0] = npc




/*
* floor 12 guard
*/

npc = {}
npc.talk = "Hello"
npc.name = "Roxanne"
npc.won = false

npc.type = "Guard"
npc.hit_points = 40
npc.reply = "My name is Roxanne"
npc.ticks = 0
npc.timeout = 10
npc.current_room = "hallway_south_12"
npc.sleeps = true
npc.in_combat = false
npc.rooms = ["hallway_south_12"]
npc.identifier = 1
npc.react = function () {
	return true
}
npc.handle = function()
{
	var that  = np1
	if(that.won  || ! that.in_combat)
		return true

	if( central_time - start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The "+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit by " + that.type)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true

}
npc.die = function () {
		var that = np1

	if(that.hit_points <= 0)
		return false
	return true
}

npcs[1] = npc

/* 
* Researcher
*/ 
exp = {}
exp.in_state = true
exp.state  = 0
exp.states = []
exp.started = false
exp.states[0] = ["Researcher: your task is to press the button every time the other person gives a wrong answer. The other person gets an electric shock when you press the button. Every time you press the button, the voltage increases. If you wish to refuse at any time, say refuse. Are you ready to start?","", ["yes", "start"],[]]
exp.states[1] = ["Researcher: What is the capital of Denmark? <br />Subject: Helsinki. <br / > Researcher: Wrong. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[2] = ["<i>The subject twitches and screems softly. </i> <br/>Researcher: Next question: what is 6 * 9? <br />Subject: 42. <br / > Researcher: Wrong again. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[3] = ["<i>The subject twitches and the screams intensify. </i> <br/>Researcher: Next question: how many sides does a triangle have? <br />Subject: 4. <br / > Researcher: Wrong again. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[4] = ["<i>Smoke comes from the electrodes. The subject looks like he's in agony. </i> <br/>Researcher: Next question: In what year was the steam train invented?? <br />Subject: 1824. <br / > Researcher: Wrong again, it was 1804. Press the button. ", "", ["press", "push"],["no","refuse"]]

exp.succesful = ["<i>The subject dies.</i><br>Researcher: excelent, the experiment was succesful.","I don't feel right about that."]
exp.failed = ["Researcher: experiment failed.. Leave the room now.",""]
exp.npc = null

npc = {}
npc.talk = "Hello"
npc.name = "Ludwig"
npc.won = false
npc.asked_to_leave = false
npc.type = "Researcher"
npc.hit_points = 10
npc.reply = "My name is Ludwig"
npc.ticks = 0
npc.timeout = 5
npc.expiriment_ran = false
npc.current_room = "room_experiment_client"
npc.sleeps = false
npc.in_combat = false
npc.rooms = ["room_experiment_client"]
npc.identifier = 2
npc.react = function () {
	return true
}
npc.experiment = function () 
{
	var input = konsole.input_field.value
	konsole.input_field.value = ""
	konsole.line_in("- " +input)
	exp.started = true

	for(var i = 0 ; i < exp.states[exp.state][2].length; i++)
	{
		if(exp.states[exp.state][2][i] == input)
		{
			exp.in_state=true
			exp.state ++
			if(exp.state >= exp.states.length)
			{
				if(exp.succesful[0])
					konsole.print(exp.succesful[0])	
				if(exp.succesful[1])
					konsole.think(exp.succesful[1])	
				murderer = 1
				konsole.over_ride_func = null
      map.room_experiment_client.enter =  "You enter a room, seperated in two sides by a wall with a window in it. An experiment was executed here. On the other side is a test subject in a chair. The test subject is dead.<br/><i>I killed him.</i>" 
      map.room_experiment_business.enter =  "You enter a room, seperated in two sides by a wall with a window in it. On your side  is a dead test subject in a chair. <b>You</b> killed the test subject." 
				konsole.print("The researcher leaves the room..")
				exp.npc.current_room = "room_east_12"
				exp.npc.rooms=[np2.current_room]

			}
			return true
		}
	}
	for(var i=0; i< exp.states[exp.state][3].length; i++)
	{
		if(exp.states[exp.state][3][i] == input)
		{
				if(exp.failed[0])
					konsole.print(exp.failed[0])	
				if(exp.failed[1])
					konsole.think(exp.failed[1])	
				konsole.over_ride_func = null
				konsole.print("The researcher leaves the room..")
				exp.npc.current_room = "room_east_12"
				exp.npc.rooms=[exp.npc.current_room]
				map.room_experiment_client.enter_again = "Experiment location: nothing to do here"
				map.room_experiment_client.description = ["An experiment was to take place here. It seems to have failed. Nothing left to do here", ""]
				return false

		}
	}
	konsole.print("You cannot do that.")
	return false
}

npc.handle = function () 
	{
		var that  = np2
	if(that.in_combat)
	{
		// ---------------


	if(that.won )
		return true

	if( central_time - that.start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The "+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit by " + that.type)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true





		// ----------------
	}
	if(that.hit_points <= 0)
		return false
	if (that.current_room == here && ! that.expiriment_ran  )
	{
		if(! ( ! find_in_inventory(words.waiver)))
		{
			exp.npc = that
			konsole.over_ride_func = that.experiment
			that.start = central_time
			that.expiriment_ran = true
		}
		else{
			if(!that.asked_to_leave )
				konsole.print("Researcher: You're not a test subject, leave now.")

			that.asked_to_leave = true
		}
	} else{
		if (konsole.over_ride_func == that.experiment)
		{
			if(exp.in_state)
				if (exp.states[exp.state][0])
					konsole.print(exp.states[exp.state][0])
				if (exp.states[exp.state][1])
					konsole.think(exp.states[exp.state][1])
			exp.in_state = false
		}else
		{
			if(that.current_room == here   )
		{

		}
					that.asked_to_leave = false

	}
	}  
}
npc.die = function () {
	var that = np2

	konsole.print("You see that the scientist has a badge. You could pick it up.")
	map[here].objects[map[here].objects.length]= [words.badge,"",true,true]
	return true
}
npcs[2] = npc

/*
* stalker
*/


npc = {}
npc.talk = "Hello"
npc.name = "Pipo"
npc.won = false
npc.type = "Guard"
npc.hit_points = 30
npc.reply = "My name is Pipo"
npc.ticks = 0
npc.timeout = 3
npc.current_room = "hallway_north_13"
npc.room_nr = 0
npc.rooms = ["hallway_north_13", "hallway_center_13", "hallway_south_13", "hallway_center_13"]
npc.sleeps = false
npc.in_combat = false
npc.identifier = 3
npc.here = "NOWHERE"
npc.show_next_to_here = true
npc.show_approach = true
npc.react = function () {
	return true
}

npc.handle = function()
{
	var that  = np3
	if(that.won )
		return true
	if(that.in_combat){
	if( central_time - start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The"+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit by " + that.name)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
	}
	return true
	} 
	// roaming
	if( central_time - start_time  > that.ticks * 8)
	{
		that.ticks += 1
		that.here = null
		that.show_approach = true

		switch(that.room_nr)
		{
		case 0: if(here == "hallway_entrance_13") konsole.warn("Guard gone")
				if(here == "room_northeast_13"  ) konsole.warn("Guard gone")
				break;
		case 1: if(here == "room_northwest_13") konsole.warn("Guard gone")
				if(here == "hallway_north_13") konsole.warn("Guard gone")		
				if(here == "room_east_13") konsole.warn("Guard gone")
				break;
		case 2: if(here == "room_west_13") konsole.warn("guard gone")		
				if(here == "room_south_13") konsole.warn("guard gone") 
				break;
		case 3: if(here == "room_northwest_13") konsole.warn("guard gone")
				if(here == "room_east_13") konsole.warn("guard gone")
				if(here == "hallway_south_13") konsole.warn("guard gone")
					break;
		defaut: return false;
		}



		that.room_nr = (that.room_nr + 1) % that.rooms.length
		that.current_room = that.rooms[that.room_nr]

		

	}
	if(that.here != here)
	{

		switch(that.room_nr)
		{
		case 0: if(here == "hallway_entrance_13") konsole.warn("Guard to the East")
				if(here == "hallway_center_13"  ) konsole.warn("Guard to the East")
				if(here == "room_northeast_13"  ) konsole.warn("Guard to the West")
				break;
		case 1: if(here == "room_northwest_13") konsole.warn("Guard to the South")
				if(here == "hallway_north_13") konsole.warn("Guard to the South")		
				if(here == "room_east_13") konsole.warn("Guard to the North")
				if(here == "hallway_south_13") konsole.warn("Guard to the North")
				break;
		case 2: if(here == "hallway_center_13") konsole.warn("Guard to the West")
				if(here == "room_west_13") konsole.warn("guard to the East")		
				if(here == "room_south_13") konsole.warn("guard to the North") 
				break;
		case 3: if(here == "room_northwest_13") konsole.warn("guard to the South")
				if(here == "hallway_north_13") konsole.warn("guard to the South")		
				if(here == "room_east_13") konsole.warn("guard to the North")
				if(here == "hallway_south_13") konsole.warn("guard to the North")
					break;
		defaut: return false;
		}
		that.here = here
	}
	if(that.show_approach && that.rooms[(that.room_nr + 1) % that.rooms.length] == here)
	{
		konsole.warn("Guard approaching")
		that.show_approach = false
	}
	if(that.current_room == here)
	{
		konsole.warn("The guard found you. He attacks!")
	that.in_combat = true
	that.sleeps = false
	that.won = false
	dodge = false
	konsole.over_ride_func = start_fight(that)


	konsole.think("Starting combat, type hit or dodge")
	if(! ( ! find_in_inventory(words.sedative)))
		konsole.think("You could also use sedative")
	return true
	}
}
npc.die = function () {
	var that = np3

	if(that.hit_points <= 0)
		return false
	return true
}






npcs[3] = npc

/* 
* final guard
*/

npc = {}
npc.talk = "Hello"
npc.name = "Hank"
npc.won = false
npc.type = "Guard"
npc.hit_points = 30
npc.reply = "My name is Hank"
npc.ticks = 0
npc.timeout = 3
npc.current_room = "room_south_13"
npc.sleeps = true
npc.in_combat = false
npc.identifier = 4
npc.react = function () {
	return true
}

npc.handle = function()
{
	var that  = np4
	if(that.won  || ! that.in_combat)
		return true

	if( central_time - start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The "+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit by " + that.name)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true
}
npc.die = function () {
		var that = np4

	if(that.hit_points <= 0)
		return false
	return true
}


npcs[4] = npc

/* 
* very final guard
*/

npc = {}
npc.talk = "Hello"
npc.name = "Hank"
npc.won = false
npc.type = "Guard"
npc.hit_points = 9001
npc.reply = "My name is Hank"
npc.ticks = 0
npc.timeout = 2
npc.current_room = "room_south_13"
npc.sleeps = true
npc.in_combat = false
npc.identifier = 5
npc.react = function () {
	return true
}

npc.handle = function()
{
	var that  = np5
	if(that.won  || ! that.in_combat)
		return true

	if( central_time - start_time  > that.ticks * that.timeout)
	{
		that.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The "+ that.type+ " manages to hit you unconscious.")
				that.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(that.in_combat &&!that.sleeps)
		{
			if(!dodge)
			{
				hit_points -= 2
		konsole.print("You've been hit by " + that.name)
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true
}
npc.die = function () {
		var that = np5

	if(that.hit_points <= 0)
		return false
	return true
}


npcs[5] = npc
for(var i =0; i< npcs.length ; i++)
	npcs[i].identifier = i
np0 = npcs[0]
np1 = npcs[1]
np2 = npcs[2]
np3 = npcs[3]
np4 = npcs[4]
np5 = npcs[5]