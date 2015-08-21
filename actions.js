actions = {}
actions.walk = function (tok) {
	konsole.print("not going anywhere (yet)")
}
actions.help = function(tok)
{
	if(tok.person == undefined)
		{
		konsole.print("you're on your own, sorry")
		return true
	}
	while (! action[tok.verb.text] && tok.verb.synonym != null)
		tok.verb = tok.verb.synonym
	if (action[tok.verb.text])
		return action[tok.verb.text](tok)
	else
	{
		konsole.print("verb not found")
		return false
	}
}