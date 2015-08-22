function interpret(t)
{

	if (! t.verb)
	{
		konsole.print("no verb, sentence doens't make sense")
		return false
	}
	action_exec = false

	if( t.verb.method)
			if(t.verb.method(t))
				action_exec = true
	while((t.verb.synonym != null && t.verb.synonym != undefined) && !action_exec)
	{


		if(! action_exec && t.verb.synonym != null)
		{

			t.verb = t.verb.synonym
		}
		if( t.verb.method)
			if(t.verb.method(t))
				action_exec = true
	}

	
		
	if(! action_exec)
		konsole.print("Action failed")
	return action_exec
}