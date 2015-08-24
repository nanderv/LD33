actions = {}
code = [4, 51, 42, 13, 37]
code_pointer = 0
actions.assist = function(tok)
{
	return false;

}
actions.kill = function(tok)
{
	if(! tok.npc)
	{
		konsole.print("If you want to kill, you'll need to specify who.")
		return false
	}
	tok.npc.npc.in_combat = true
	tok.npc.npc.sleeps = false
	dodge = false
	konsole.over_ride_func = start_fight(tok.npc.npc)
	konsole.think("Starting combat, type hit or dodge")
	return true
}

function find_in_inventory ( item) 
{
		var found = false
		var syn = false
	do {
		syn = false
	for(var i=0;i<inventory.length; i++)
		{
			var obj =inventory[i]
			if(obj == item)
			{
			
					found = true
					break
			}
		}
		if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)
		if(found)
			return item
		else
			return null
}

function find_on_map_with_i_internally (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
			
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return [item,i]
		else
			return null}

function find_on_map_with_i (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
				if (! obj[3])
					{
						konsole.think("I don't know anything about this")
						return false
					}
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return [item,i]
		else
			return null}
function find_on_map (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
				if (! obj[3])
					{
						konsole.think("I don't know anything about this")
						return false
					}
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return item
		else
			return null}
actions.examine = function (tok)
{

	if(tok.item)
	{
		var ot = tok.item
		tok.item =  find_in_inventory(tok.item)
		if(tok.item == null)
		 tok.item =  find_on_map(ot)
	found = !(! tok.item)

	if (!found)
	{
			konsole.think("I can't see that, so I can't examine that.")

			return false
	}
	if(object_reaction[tok.item.text]  )
	{
		if (object_reaction[tok.item.text].examine[0] != "")
			konsole.print(object_reaction[tok.item.text].examine[0])
		if (object_reaction[tok.item.text].examine[1] != "")
			konsole.think(object_reaction[tok.item.text].examine[1])

	} else {
		konsole.think("I don't know anything about this")
	}
		return true;
	}

	if(tok.object)
	{

		 tok.object =  find_on_map(tok.object)
	found = !(! tok.object)
	if (!found)
	{
			konsole.think("I can't see that, so I can't examine that.")

			return false
	}


	if(object_reaction[tok.object.text])
	{
		if (object_reaction[tok.object.text].examine[0] != "")
			konsole.print(object_reaction[tok.object.text].examine[0])
		if (object_reaction[tok.object.text].examine[1] != "")
			konsole.think(object_reaction[tok.object.text].examine[1])
		
	} else {
		konsole.think("I don't know anything about this")
	}
		for(var i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0].type == item && obj [1] == tok.object)
			{
				konsole.print("You found a "+ get_text(obj[0]))
				obj[3] = true
			}
		}
	
		return true;
		
	}
	if(map[here].description[0])
		konsole.print(map[here].description[0])
	if(map[here].description[1])
		konsole.think(map[here].description[1])
		return true
	

}
actions.pickup = function(tok)
{
	
	if(!tok.item)
	{
		konsole.print("No item given.")
		return false;
	}

	var i = 0 ; 
	var aa = find_on_map_with_i(tok.item)
	found = ! ( ! aa)
	if(!found)
	{
		konsole.print(get_text(tok.item) + " is not found.")
		return false
	}
	
	i = aa[1]
	tok.item = aa[0]
	konsole.print(tok.item.text+ ": " + aa[1])


	map[here].objects.splice(i,1)
	inventory[inventory.length] = tok.item
	if(object_reaction[tok.item.text])
	{
		if (object_reaction[tok.item.text].pickup[0] != "")
			konsole.print(object_reaction[tok.item.text].pickup[0])
		if (object_reaction[tok.item.text].pickup[1] != "")
			konsole.think(object_reaction[tok.item.text].pickup[1])

	}
	return true
}


actions.move = function (tok) {
	if(tok.direction)
	{
		var dir = 	get_direction(map[here],tok.direction,tok.verb)
	}
	if(tok.location)
	{
				var dir = get_path_to(map[here],tok.location,tok.verb)
	}
	if (! dir)
		return false
	else 
		{
			for(var i = 0; i < dir.cond.length ; i++)
			{
				if ( ! dir.cond[i]())
				{
								
					return false
				}
			}
			if(!map[dir.to])
			{
				konsole.print("ERROR ERROR, room doesn't exist. This is not good, sorry.")
				return false
			}

			here = dir.to
			enter(map[here])

		}
	return dir != false
}
actions.help = function(tok)
{
	if(tok.person == undefined)
		{
		konsole.print("you're on your own, sorry.")
		return true
	}
	// there is a person given, trying to help person

}
actions.lie = function (tok) {
	if (!map[here].cond["lying down"])
	{
		map[here].cond["lying down"]= true
		konsole.print("you're now lying down.")
		return true
	}
	else
		konsole.print("you're not standing.")
	return false
}
actions.stand = function (tok) {
	if (map[here].cond["lying down"])
	{
		map[here].cond["lying down"] = false
		konsole.print("You're now standing up.")
		return true
	}
	else if (map[here].cond["sitting"]) 
	{
		map[here].cond["sitting"] = false
		konsole.print("You're now standing up.")
		return true
	}
	else
		konsole.print("You are already standing.")
	return false
}
actions.brush = function (tok) {
	var has_brush = false
	for(var i= 0 ; i < inventory.length ; i++)
	{
		has_brush = has_brush || inventory[i] == words.toothbrush
	}
	if (has_brush) {
		object_reaction.teeth.examine = ["", "My teeth are perfectly clean."]
		konsole.print("You cleaned your teeth.")
		return true
	} else {
		konsole.print("You need a toothbrush to brush your teeth.")
	}
}
actions.turn_lights = function (tok) {
	if (tok.object)	{
		if (tok.object == words.light || tok.object == words.lights) {
			if (!map[here].cond["lights"]) {
				map[here].cond["lights"] = true
				konsole.print("You manage to find a lightswitch. You turned on the lights.")
				return true
			} else {
				konsole.think("Why would I want to turn the lights back off again?")
				return false
			}
		} else {
			konsole.think("I cannot turn on " + get_article(tok.object) + get_text(tok.object) + ".")
			return false
		}
	} else {
		konsole.print("What do you want to turn on?")
		return false
	}
}
actions.eat = function (tok) {
	if(tok.object)
	{
	var aa =  find_on_map_with_i(tok.object)
	tok.object = aa[0]
	found = !(! tok.object)
		if(!found)
	{
		konsole.print(get_text(tok.object) + " is not found.")
		return false
	}
	var i =  aa[1]

	map[here].objects.splice(i, 1)

		if(tok.object.is_a == words.food)
		{
			object_reaction.teeth.examine = ["", "My teeth are dirty from the porkchops I ate."]
			konsole.think("I feel refreshed.")
			return true
		} else {
			konsole.think("I can't eat the " + get_text(tok.object) +".")
			return false
		}
	}	
	konsole.think("What should I eat?" )
	return false
}
actions.sit = function (tok) {
	if (tok.object && tok.object.is_a == words.sittable) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print("The " + get_text(tok.object) + " is not found.")
			return false
		}
		if (!map[here].cond["sitting"]) {
			map[here].cond["sitting"]= true
			konsole.print("You sit down on the " + get_text(tok.object) + ".")
			if (tok.object == words.chair) {
				konsole.think("This is rather comfortable.")
			} 
			return true
		} else {
			konsole.think("I am already sitting.")
			return false
		}
	}
	else {
		konsole.think("I cannot sit here.")
	}
	return false
}

actions.open = function (tok) {
	if (tok.object && tok.object.is_a == words.container) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}

		if(!found) {
			konsole.print(get_text(tok.object) + " is not found.")
			return false
		}
		if (tok.object == words.drawer) {
			object_reaction.drawer.examine = ["An open drawer.", ""]
		}
		if (tok.object == words.safe) 
		{	
			if(map[here].cond["closed"] == 0)
				{
					konsole.think("I already opened the safe.")
					return false
				}
			konsole.think("I have to enter the code. I don't think I have it.")
			konsole.over_ride_func = function()
			{
				var input = konsole.input_field.value
				konsole.input_field.value = ""
				var safe = tok.object
				if(input == code[code_pointer])
				{
					konsole.print("The mechanics of the lock seem to work.")
					code_pointer ++
				}
				else
					{
						konsole.print("The mechanics of the lock reset into base position.")
						code_pointer =0
						konsole.over_ride_func = null
					}
				if(code_pointer == code.length)
				{
					konsole.print("The lock unlocks itself.")
					konsole.print("You find a parachute in the safe.")
					konsole.think("Why would someone store a parachute here?")
					reactions.makevisible(words.parachute)()
					object_reaction.safe.examine=["","I still don't understand how I managed to unlock it."]
					map[here].cond["closed"] = 0
					konsole.over_ride_func = null
				}

			}
			return true
		}
		
		if (map[here].cond["closed"]) {
			map[here].cond["closed"] = 0
		} else {
			konsole.think("The " + get_text(tok.object) + " is already open.")
			return false
		}

		konsole.print("You open the " + get_text(tok.object))
		return true
	} else {
		konsole.think("I cannot open this.")
	}
	return false
}
actions.close = function (tok) {
	if (tok.object && tok.object.is_a == words.container) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.object) + " is not found.")
			return false
		}
		if (!map[here].cond["closed"]) {
			map[here].cond["closed"] = 1
		} else {
			konsole.think("The " + get_text(tok.object) + " is already closed.")
			return false
		}
		if (tok.object == words.drawer) {
			object_reaction.drawer.examine = ["A closed drawer.", "I can't see into a closed drawer."]
		}
		konsole.print("You close the " + get_text(tok.object) + ".")
		return true
	} else {
		konsole.think("I cannot close this.")
	}
	return false
}
actions.read = function (tok) {
	if (find_in_inventory(tok.item)) {
		if (tok.item.is_a == words.readable) {
			if (object_reaction[tok.item.text].read[0] != "") {
				konsole.print(object_reaction[tok.item.text].read[0])
			}
			if (object_reaction[tok.item.text].read[1] != "") {
				konsole.think(object_reaction[tok.item.text].read[1])
			}
			return true
		} else {
			konsole.think("I cannot read that.")
			return false
		}
	} else if (tok.item || tok.object) {
		konsole.think("I do not have " + get_article(tok.item) + get_text(tok.item) + ".")
		return false
	} else {
		konsole.think("I cannot read that.")
		return false
	}
}
actions.move_obj = function (tok) {
	if (tok.object) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.object) + " is not found.")
			return false
		}
		if (tok.object.is_a == words.movable) {
			konsole.print("You move the " + get_text(tok.object) + ".")
			if (tok.object == words.painting) {
				map[here].enter_again = "You enter the room with the painting and the safe.",
				map[here].description = ["The walls of this mostly empty room are painted a light beige. You see a painting standing next to the safe in the far wall.","This room somehow calmes me."]
			}
			return true
		} else {
			konsole.think("I cannot move " + get_article(tok.object) + get_text(tok.object) + ".")
			return false
		}
	} else {
		return false
	}
}
actions.enter_obj = function (tok) {
	if (tok.object) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.object) + " is not found.")
			return false
		}
		if (tok.object.is_a == words.enterable) {
			konsole.print("You enter the " + get_text(tok.object) + ".")
			konsole.print("You crawl through the air duct and end up in another room.")
			if (here == "room_northeast_13") {
				here = "room_southwest_13"
			} else {
				here = "room_northeast_13"
			}
			enter(map[here])
			return true
		} else {
			konsole.think("I cannot enter " + get_article(tok.object) + get_text(tok.object) + ".")
			return false
		}
	} else {
		return false
	}
}