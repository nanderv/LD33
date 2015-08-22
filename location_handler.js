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