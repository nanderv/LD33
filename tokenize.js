
function tokenize(sentence)
{
	var my_words = sentence.split(" ")
	var result = {}
	for (var i = 0; i < my_words.length; i++)
	{
		var my_word = my_words[i]

		var w = words[my_word]
		if (w == null){
			konsole.print( my_word + " - wasn't understood")
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