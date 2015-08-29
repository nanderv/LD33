
function tokenize(sentence)
{
	if(sentence.toLowerCase() =="e")
		sentence = "east"
	if(sentence.toLowerCase() =="n")
		sentence = "north"
	if(sentence.toLowerCase() =="s")
		sentence = "south"
	if(sentence.toLowerCase() =="w")
		sentence = "west"
	var my_words = sentence.split(" ")
	var result = []
	var to_go = 1
	for (var i = 0; i < my_words.length; i += to_go)
	{
		to_go = 1
		my_words[i] = my_words[i].toLowerCase()
		var my_word = my_words[i]
		// TODO : split up word..
		if(my_word.length < 1)
			continue
		var w = words[my_word]
		if (w== null)
		{
			w = get_npc(my_words[i])
		}
		if (w == null){
			if(my_words.length >= i  && words[my_words[i] + " "+ my_words[i +1]])
			{
				w = words[my_words[i] + " "+ my_words[i +1]]
				to_go = 2
			}
			else
			{
			konsole.print( my_word + " - wasn't understood")
			return false
		}
		}

		if(w.type == abstract)
		{
			var found = null
			var err = false
			for(var t = 0;  t< inventory.length && err == false; t++)
			{
				if( inventory[t] == 0 )
					continue
				if (inventory[t].is_a && inventory[t].is_a == w)
				{
					if(found != null)
					{
						err = true
						konsole.print("You need to be more specific, I found both "+ get_text(inventory[t])+ " and " + get_text(found) + "!")
						return false
					}
					found = inventory[t]
				}
			}

		for(var t = 0;  t< map[here].objects.length && err == false; t++)
			{
				var o = map[here].objects[t]

				if( o == 0 )
					continue
				if (o[0].is_a && o[0].is_a == w && o[3])
				{
					if(found != null)
					{
						err = true
						konsole.print("You need to be more specific, I found both "+ get_text(o[0]) + " and " + get_text(found) + "!")
						return false
					}
					found = o[0]
				}
			}
			w = found
			if(err)
				w = null
		}
		if(w== null)
		{
			konsole.print(my_word+" wasn't  understood. Is it here?")
			return false
		}

		if (result[w.type] != undefined && w.type != null)
		{
			konsole.print( "I didn't inderstand your sentence, sorry")
			return false
		}
		if ( w.type != null){
		result[i] = w
		/*if (w.eat != null && i + 1 < my_words.length  && w.eat == my_words[i+1])
			{
				i++
			}*/

	}
	}
	return result

}
function ac (word)
{
	var result = []
	for (var key in words) {
  	if (words.hasOwnProperty(key)) {
  		if (words[key].text.substring(0, word.length) == word) {
  			
  				result [ result.length] = words[key].text

 	 	}
	}
	}
	return result
}
function autocomplete(word)
{
	var result=  ac(word)
	if(result.length > 1 && result.length < 5)
	{
			konsole.print("Options: " + result)
			result = [false]
	}
	return result[0]
}