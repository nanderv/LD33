konsole = {}
konsole.out = document.getElementById("out");
konsole.input_field = document.getElementById("in");
konsole.history = []
konsole.back = 0
konsole.over_ride_func = null
konsole.output = false
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
konsole.line_in = function(text)
{
	text = capitalizeFirstLetter(text) 
	konsole.out.innerHTML =  konsole.out.innerHTML + "<br><br/ > <b>" + text + "</b>"
	konsole.out.scrollTop = konsole.out.scrollHeight;	
}
konsole.think = function(text)
{
	text = capitalizeFirstLetter(text)
	konsole.out.innerHTML = konsole.out.innerHTML + "<br><i>" + text + "</i>"
	konsole.out.scrollTop = konsole.out.scrollHeight;	
    konsole.output = true
}

konsole.warn = function(text)
{
	text = capitalizeFirstLetter(text)
	konsole.out.innerHTML = konsole.out.innerHTML + "<br><b><i>" + text + "</i></b>"
	konsole.out.scrollTop = konsole.out.scrollHeight;	
    konsole.output = true
}

konsole.print = function(text)
{	
	text = capitalizeFirstLetter(text)
	konsole.out.innerHTML = konsole.out.innerHTML + "<br>" + text
	konsole.out.scrollTop = konsole.out.scrollHeight;
    konsole.output = true
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