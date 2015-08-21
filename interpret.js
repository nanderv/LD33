function interpret(t)
{

	if (! t.verb)
		konsole.print("no verb, sentence doens't make sense")
	while(t.verb.synonym != null || actions[t.verb.text] == null)
		t.verb = t.verb.synonym

	if (actions[t.verb.text] != null)
		return actions[t.verb.text](t)
	konsole.print("Action failed")
	return false
}