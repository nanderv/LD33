function get_path_to(from, to,method)
{
	var here = map[from]
	var directions = here.directions
	for(var direction in directions)
	{
		if(direction.to == to &&in_array( method, direction.methods))
			return direction
	}
	return false
}

function get_direction(from, dir,method)
{

	
	var directions = from.directions	

	for(var i=0;i <directions.length ; i++)
	{
		var direction = directions[i]


		if(direction.direction == dir && in_array( method, direction.methods))
			return direction
	}
	return false
}
function in_array(item, array)
{
	for(var i = 0; i < array.length ; i++)
		if (item == array[i])
			return true
	return false
}

function has_item(item)
{
	return function(){
		for(var i = 0; i < inventory.length; i++)
		{
			if (inventory[i] == item)
				return true
		}
		konsole.print("You don't have a " + get_text(item) + " so you can't do this")
		return false
		}
}
function condition_false(cond)
{
	return function()
	{
		if( map[here].cond[cond] )
			konsole.print("You cannot do that, you're " + cond)
		return !map[here].cond[cond] 
	}
}
function enter(loc)
{
	if(loc.entered)
		konsole.print(loc.enter_again)
	else
	{
		konsole.print(loc.enter)
	
	loc.entered = true
	if(loc.thoughts )
		konsole.think(loc.thoughts)
	}
	for(var i = 0; i< loc.directions.length ; i++)
	{
		var d = loc.directions[i]
		if(!d.hidden)
			konsole.print(d.methods[0].text +" " + d.direction.text +" to go to " + d.to)
	}

		for(var i = 0; i< loc.objects.length ; i++)
	{
		var d = loc.objects[i]
		if(d[3])
			konsole.print( "You see a "+ d[0].text)
	}
}
function no_function ()
{

}