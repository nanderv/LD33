actions = {}
actions.assist = function(tok)
{
	return false;

}
function find_in_inventory ( item) 
{
		var found = false
		var syn = false
	do {
		syn = false
	for(var i=0;i<map[here].objects.length; i++)
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
			return null
}
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
		konsole.print(map[here].description[1])
		return true
	

}
actions.pickup = function(tok)
{
	
	if(!tok.item)
	{
		konsole.print("No item given")
		return false;
	}
	var i = 0 ; 
	var aa = find_on_map_with_i(tok.item)
	i = aa[1]
	tok.item = aa[0]

	found = ! ( ! tok.item)
	if(!found)
	{
		konsole.print(get_text(tok.item) + " is not found")
		return false
	}
	i = tok.item.i
	map[here].objects.splice(i,0)
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
		konsole.print("you're on your own, sorry")
		return true
	}
	// there is a person given, trying to help person

}
actions.lie = function (tok) {
	if (!map[here].cond["lying down"])
	{
		map[here].cond["lying down"]= true
		konsole.print("you're now lying down")
		return true
	}
	else
		konsole.print("you're not standing")
	return false
}
actions.stand = function (tok) {
	if (map[here].cond["lying down"])
	{
		map[here].cond["lying down"]= false
		konsole.print("You're now standing up.")
		return true
	}
	else
		konsole.print("you're not lying down")
	return false
}

actions.brush = function (tok) {
	var has_brush = false
	for(var i= 0 ; i < inventory.length ; i++)
	{
		has_brush = has_brush || inventory[i] == words.toothbrush
	}
	if (has_brush) {
		object_reaction.teeth.examine = ["", "My teeth are perfectly clean"]
		konsole.print("You cleaned your teeth")
		return true
	} else {
		konsole.print("You need a toothbrush to brush your teeth.")
	}
}

actions.turn_lights = function (tok) {
	if (!map[here].cond["lights"])
	{
		map[here].cond["lights"] = true
		konsole.print("You manage to find a lightswitch. You turned on the lights.")
		return true
	}
	else
		konsole.think("Why would I want to turn the lights back off again?")
	return false
}

actions.eat = function (tok) {
	if(tok.object)
	{
	var aa =  find_on_map_with_i(tok.object)
	tok.object = aa[0]
	found = !(! tok.object)
		if(!found)
	{
		konsole.print(get_text(tok.object) + " is not found")
		return false
	}
	var i =  aa[1]

	map[here].objects.splice(i, 1)

		if(tok.object.is_a == words.food)
		{
			object_reaction.teeth.examine = ["", "My teeth are dirty from the porkchops I ate."]
			konsole.think("I feel refreshed")
			return true
		} else {
			konsole.think("I can't eat the " + get_text(tok.object))
			return false
		}
	}	
	konsole.think("What should I eat?" )
	return false
}