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