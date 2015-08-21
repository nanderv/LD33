konsole = {}
konsole.out = document.getElementById("out");
konsole.input_field = document.getElementById("in");

konsole.print = function(text)
{	
	konsole.out.innerHTML = konsole.out.innerHTML + "<br>" + text
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
$(document).keypress(function (e) {
    if (e.which == 13) {

        konsole.print("- "+konsole.input_field.value)
        var tok = tokenize(konsole.input_field.value)
        if (tok != false)
        	var interp = interpret(tok)
        debug(tok, interp)

        konsole.input_field.value = ""
    }
})