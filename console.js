konsole = {}
konsole.out = document.getElementById("out");
konsole.input_field = document.getElementById("in");
konsole.inventory = document.getElementById("inv");
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

$(document).keydown(function(e){
   if ( e.which == 9) {
          e.preventDefault();
          var sentence = konsole.input_field.value.split(" ")
          var ac = complete(sentence,konsole.input_field.value )
          
          if (ac == false)
            return false
          
            konsole.input_field.value = ac
          
  }
    if(e.which == 38) {
        if(konsole.back < konsole.history.length)
        {
            konsole.back = konsole.back + 1
            konsole.input_field.value = konsole.history[konsole.history.length- konsole.back]
        } else {
            konsole.print("- End of history")
        }
    }
    if(e.which == 40) {
        if(konsole.back > 1)
        {
            konsole.back = konsole.back - 1
            konsole.input_field.value = konsole.history[konsole.history.length- konsole.back]
        } else {
            konsole.print("- Begin of history")
        }
    }
})
$(document).keypress(function (e) {
    if (e.which == 13) {
        if(!konsole.over_ride_func)
        {
        konsole.history[konsole.history.length] = konsole.input_field.value
        konsole.back = 0
        konsole.line_in("- "+konsole.input_field.value)
        konsole.output = false
        var tok = tokenize(konsole.input_field.value)
        if (tok != false)
        {
          var interp = interpret(parse(tok))
          //debug(tok, interp)

          konsole.input_field.value = ""
        }
        
          } else
            konsole.over_ride_func()
            konsole.output = true
    }

if(! konsole.output )
            if(interp)
                konsole.print("Action succesful")
            else
                konsole.print("Action failed")

       
})