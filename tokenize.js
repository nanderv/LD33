
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
	var result = {}
	for (var i = 0; i < my_words.length; i++)
	{
		my_words[i] = my_words[i].toLowerCase()
		var my_word = my_words[i]
		if(my_word.length < 1)
			continue
		var w = words[my_word]
		if (w== null)
		{
			konsole.print(my_words[i])
			w = get_npc(my_words[i])
		}
		if (w == null){

			konsole.print( my_word + " - wasn't understood")
			return false
		}

		if(w.type == abstract)
		{
			var found = null
			var err = false
			for(var i = 0;  i< inventory.length && err == false; i++)
			{
				if( inventory[i] == 0 )
					continue
				if (inventory[i].is_a && inventory[i].is_a == w)
				{
					if(found != null)
					{
						err = true
						konsole.print("You need to be more specific, I found both "+ get_text(inventory[i])+ " and " + get_text(found) + "!")
						return false
					}
					found = inventory[i]
				}
			}
		for(var i = 0;  i< map[here].objects.length && err == false; i++)
			{
				var o = map[here].objects[i]
				
				if(o[0].is_a)

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
			konsole.print("Word not understood")
			return false
		}

		if (result[w.type] != undefined && w.type != null)
		{
			konsole.print( "I didn't inderstand your sentence, sorry")
			return false
		}
		if ( w.type != null){
		result[w.type] = w 
		if (w.eat != null && i + 1 < my_words.length  && w.eat == my_words[i+1])
			{
				i++
			}

	}
	}
	return result

}
function autocomplete(word)
{
	var result = []
	for (var key in words) {
  	if (words.hasOwnProperty(key)) {
  		if (words[key].text.substring(0, word.length) == word) {
  			
  				result [ result.length] = words[key].text

 	 	}
	}
	}
	if(result.length > 1 && result.length < 5)
	{
			konsole.print("Options: " + result)
			result = [false]
	}
	return result[0]
}