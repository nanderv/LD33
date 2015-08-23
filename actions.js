actions = {}
actions.assist = function(tok)
{
	return false;

}
actions.examine = function (tok)
{

	if(tok.item)
	{
		var found = false
	for(var i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == tok.item)
			{
				if (! obj[3])
					{
						konsole.think("I don't know anything about this")
						return false
					}
					found = true
			}
		}
	for(var i=0;i<inventory.length; i++)
		{
			var obj = inventory[i]
			if(obj == tok.item)
			{
				
					found = true
			}
		}
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
		konsole.think("What do you want to examine?")

}
actions.pickup = function(tok)
{
	
	if(!tok.item)
	{
		konsole.print("No item given")
		return false;
	}
	var i = 0 ; 
	var found = false;
	for( i  = 0; i < map[here].objects.length ; i++)
	{
		if( map[here].objects[i][0] == tok.item && map[here].objects[i][3] )
		{
			found = 1
			break
		}
	}
	if(!found)
	{
		konsole.print(get_text(tok.item) + " is not found")
		return false
	}
	map[here].objects[i] = 0
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