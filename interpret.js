function interpret(t)
{
	if(!t)
	{
		konsole.print("Command wasn't understood. Enter help to find out what's supported.")
		return false
	}
	
	var action_exec = t.cmd(t)
			
	if(! konsole.output)
		konsole.print("Action failed")
	else
	{
		if (map[here].action_reaction[t.verb.method])
		{
		if (map[here].action_reaction[t.verb.method][0] != "")
			konsole.print(map[here].action_reaction[t.verb.method][0])
		if (map[here].action_reaction[t.verb.method][1] != "")
			konsole.think(map[here].action_reaction[t.verb.method][1])
		map[here].action_reaction[t.verb.method][0] = ""
		map[here].action_reaction[t.verb.method][1] = ""
		if ( map[here].action_reaction[t.verb.method][2])
			map[here].action_reaction[t.verb.method][2]()
		}

		if (world_reaction[t.verb.method])
		{
		if (world_reaction[t.verb.method][0] != "")
			konsole.print(world_reaction[t.verb.method][0])
		if (world_reaction[t.verb.method][1] != "")
			konsole.think(world_reaction[t.verb.method][1])
		world_reaction[t.verb.method][0] = ""
		world_reaction[t.verb.method][1] = ""
		}
	}
	return action_exec
}