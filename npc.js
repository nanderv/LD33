hit_points = 5
max_points = 6
dodging = false
function guard_handle ()
{

	if(this.won )
		return true

	if( central_time - start_time  > npc.ticks * npc.timeout)
	{
		this.ticks += 1
			if(hit_points <= 0)
			{
				konsole.print("The guard manages to hit you unconscious.")
				this.won = true
				if(murderer)
				{
				change_map("death_killed_guilty")()
				} else
				{
				change_map("death_killed_innocent")()
				}
			} else {
		if(this.in_combat &&!this.sleeps)
		{
			if(!dodge)
			{
				hit_points --
		konsole.print("You've been hit.")
		} else {
						dodge = false

			konsole.print("Attack dodged")	
		}

		}
	}
}
	return true

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
npc.reply = "My name is Henk"
npc.ticks = 0
npc.timeout = 3
npc.current_room = "room_northeast_14"
npc.sleeps = true
npc.in_combat = false
npc.rooms = ["room_northeast_14"]
npc.id = 0
npc.react = function () {
	return true
}
/*
* floor 12 guard
*/
npc.handle = guard_handle
npc.die = function () {
	return true
}
npcs[0] = npc

npc = {}
npc.talk = "Hello"
npc.name = "Roxanne"
npc.won = false

npc.type = "Guard"
npc.hit_points = 40
npc.reply = "My name is Roxanne"
npc.ticks = 0
npc.timeout = 2
npc.current_room = "hallway_south_12"
npc.sleeps = true
npc.in_combat = false
npc.rooms = ["hallway_south_12"]
npc.id = 0
npc.react = function () {
	return true
}
npc.handle = guard_handle
npc.die = function () {
	return true
}
npcs[1] = npc






function start_fight (npc) {
	return function  ()
	{
		var input = konsole.input_field.value
		konsole.input_field.value = ""
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
				konsole.print("Guard hit with knife")

			} else {
			npc.hit_points --
			konsole.print("Guard hit")

			}
			if(npc.hit_points == 0)
			{

				konsole.print(npc.name  + " is dead.")
				murderer = true
				konsole.over_ride_func = null
				npcs.splice(npc.id,1)
			}
			return true
		}
		konsole.print("print failed")
		return false

	}
}



/* 
* Researcher
*/ 
exp = {}
exp.in_state = true
exp.state  = 0
exp.states = []
exp.states[0] = ["Researcher: your task is to press the button every time the other person gives a wrong answer. The other person gets an electric shock when you press the button. Every time you press the button, the voltage increases. If you wish to refuse at any time, say refuse. Are you ready to start?","", ["yes", "start"],["no","refuse"]]
exp.states[1] = ["Researcher: What is the capital of Denmark? <br />Subject: Helsinki. <br / > Researcher: Wrong. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[2] = ["<i>The subject twitches and screems softly. </i> <br/>Researcher: Next question: what is 6 * 9? <br />Subject: 42. <br / > Researcher: Wrong again. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[3] = ["<i>The subject twitches and the screams intensify. </i> <br/>Researcher: Next question: how many sides does a triangle have? <br />Subject: 4. <br / > Researcher: Wrong again. Press the button. ", "", ["press", "push"],["no","refuse"]]
exp.states[4] = ["<i>Smoke comes from the electrodes. The subject looks like he's in agony. </i> <br/>Researcher: Next question: In what year was the steam train invented?? <br />Subject: 1824. <br / > Researcher: Wrong again, it was 1804. Press the button. ", "", ["press", "push"],["no","refuse"]]

exp.succesful = ["<i>The subject dies.</i><br>Researcher: excelent, the experiment was succesful.","I don't feel right about this."]
exp.failed = ["Researcher: experiment failed.. Leave the room now.",""]
npc.handle = guard_handle
npc.die = function () {
	return true
}
npcs[0] = npc

npc = {}
npc.talk = "Hello"
npc.name = "Ludwig"
npc.won = false
npc.asked_to_leave = false
npc.type = "Researcher"
npc.hit_points = 40
npc.reply = "My name is Ludwig"
npc.ticks = 0
npc.timeout = 2
npc.current_room = "room_experiment_client"
npc.sleeps = true
npc.in_combat = false
npc.rooms = ["room_experiment_client"]
npc.id = 0
npc.react = function () {
	return true
}
npc.experiment = function () 
{
	var input = konsole.input_field.value
	konsole.input_field.value = ""
	konsole.line_in("- " +input)

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
				konsole.print("You leave the room.")
				change_map("hallway_east_12")()
		}
		return false
	}
	konsole.print("You cannot do that.")
	return false
}

npc.handle = function () {
	if (this.current_room == here && ! this.won  )
	{
		if(! ( ! find_in_inventory(words.waiver)))
		{
			konsole.over_ride_func = this.experiment
			this.start = central_time
			this.won = true
		}
		else{
			if(!this.asked_to_leave )
				konsole.print("Researcher: You're not a test subject, leave now.")
				konsole.print("You leave the room.")
				change_map("hallway_east_12")()
			this.asked_to_leave = true
		}
	} else{
		if (konsole.over_ride_func == this.experiment)
		{
			if(exp.in_state)
				if (exp.states[exp.state][0])
					konsole.print(exp.states[exp.state][0])
				if (exp.states[exp.state][1])
					konsole.think(exp.states[exp.state][1])
			exp.in_state = false
		}else
		{
			this.asked_to_leave = false
			if(this.current_room == here   )
		{
				konsole.print("Researcher: You've failed your research.")
				konsole.print("You leave the room.")
				change_map("hallway_east_12")()
		}
	}
	}  
}
npc.die = function () {
	return true
}
npcs[2] = npc

