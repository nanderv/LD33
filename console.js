konsole = {}
konsole.out = document.getElementById("out");
konsole.input_field = document.getElementById("in");
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
konsole.line_in = function(text)
{
	text = capitalizeFirstLetter(text) 
	konsole.out.innerHTML = konsole.out.innerHTML + "<br><b>" + text + "</b>"
	konsole.out.scrollTop = konsole.out.scrollHeight;	
}
konsole.think = function(text)
{
	text = capitalizeFirstLetter(text)
	konsole.out.innerHTML = konsole.out.innerHTML + "<br><i>" + text + "</i>"
	konsole.out.scrollTop = konsole.out.scrollHeight;	
}
konsole.print = function(text)
{	
	text = capitalizeFirstLetter(text)
	konsole.out.innerHTML = konsole.out.innerHTML + "<br>" + text
	konsole.out.scrollTop = konsole.out.scrollHeight;
	}
konsole.in = function()
{
}
function debug (tok, interp)
{

        if(tok == false || tok == null || tok == undefined)
        	konsole.print("Please try again")
    	for (var key in tok) {
  			if (tok.hasOwnProperty(key)) {
  				konsole.print(key + " : " + tok[key].text)
			}
		}
}
$(document).keydown(function(e){
	 if ( e.which == 9) {
        	e.preventDefault();
        	var sentence = konsole.input_field.value.split(" ")
        	var ac = autocomplete(sentence[sentence.length -1 ])
        	
        	if (ac != false)
        		sentence[sentence.length -1] = ac
        	else
        		return false
        	konsole.input_field.value = ""

        	var i = 0
        	for (var i = 0; i< sentence.length ; i++)
        	{
        		if(i != 0)
        			konsole.input_field.value += " "
        		konsole.input_field.value += sentence[i]
        	}
	}
})
$(document).keypress(function (e) {
    if (e.which == 13) {

        konsole.line_in("- "+konsole.input_field.value)
        var tok = tokenize(konsole.input_field.value)
        if (tok != false)
        {
        	var interp = interpret(tok)
        	debug(tok, interp)
        	konsole.input_field.value = ""
        }
          
    }

       
})