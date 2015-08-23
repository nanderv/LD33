function interpret(t)
{

	if (! t.verb)
	{
		konsole.print("no verb, sentence doens't make sense")
		return false
	}
	action_exec = false
	if( actions[t.verb.method])
			if(actions[t.verb.method](t))
				action_exec = true
	while((t.verb.synonym != null && t.verb.synonym != undefined) && !action_exec)
	{


		if(! action_exec && t.verb.synonym != null)
		{

			t.verb = t.verb.synonym
		}
		if( actions[t.verb.method])
			if(actions[t.verb.method](t))
				action_exec = true

	}

	
		
	if(! action_exec)
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