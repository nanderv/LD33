actions = {}
actions.assist = function(tok)
{
	return false;

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
		if( map[here].objects[i] == tok.item)
		{
			found = 1
			break
		}
	}
	if(!found)
	{
		konsole.print(tok.item.text + " is not here")
		return false
	}
	map[here].objects[i] = 0
	inventory[inventory.length] = tok.item
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
		konsole.print("moving failed")
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
	if (!map[here].cond.lying)
	{
		map[here].cond.lying= true
		konsole.print("you're now lying down")
		return true
	}
	else
		konsole.print("you're not standing")
	return false
}
actions.stand = function (tok) {
	if (map[here].cond.lying)
	{
		map[here].cond.lying= false
		konsole.print("you're now standing")
		return true
	}
	else
		konsole.print("you're not lying down")
	return false
}