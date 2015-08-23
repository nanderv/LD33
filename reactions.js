reactions = {}
reactions.makevisible = function(cond)
{
	return function()
	{
		var aa = find_on_map_with_i_internally(cond)
		if (aa == null)
		{
			konsole.print("oopz")
			return false
		}
		map[here].objects[aa[1]][3] = true
		
		return true
	}
}