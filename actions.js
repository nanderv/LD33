actions = {}
code = [4, 51, 42, 13, 37]
code_pointer = 0
actions.assist = function(tok)
{
	return false;

}
actions.inventory = function(tok)
{
	if(inventory.length == 0)
	{
		konsole.print("You don't have anything yet")
		return false
	}
	konsole.print("You have the following items in your inventory")
	for(var i = 0; i< inventory.length; i++)
		konsole.print("- "+ get_text(inventory[i]))
	return true;

}

actions.knife = function(tok)
{
	if(! (!find_in_inventory(words.knife)))
	{
		konsole.print("Attacking guard with knife")
		actions.kill(tok)
	} else
	{
		konsole.print("You can't attack with knife if you 'don't have a knife")
	}
}

actions.kill = function(tok)
{
	if(! tok.subject)
	{
		konsole.print("If you want to kill, you'll need to specify who.")
		return false
	}

	tok.subject.npc.in_combat = true
	tok.subject.npc.sleeps = false
	tok.subject.npc.won = false
	dodge = false
	konsole.over_ride_func = start_fight(tok.subject.npc)


	konsole.think("Starting combat, type hit or dodge")
	if(! ( ! find_in_inventory(words.sedative)))
		konsole.think("You could also use sedative")
	return true
}

function find_in_inventory ( item) 
{
		var found = false
		var syn = false
	do {
		syn = false
	for(var i=0;i<inventory.length; i++)
		{
			var obj =inventory[i]
			if(obj == item)
			{
			
					found = true
					break
			}
		}
		if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)
		if(found)
			return item
		else
			return null
}

function find_on_map_with_i_internally (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
			
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return [item,i]
		else
			return null}

function find_on_map_with_i (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
				if (! obj[3])
					{
						konsole.think("I don't know anything about this")
						return false
					}
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return [item,i]
		else
			return null}
function find_on_map (item)
{
			var found = false
					var syn = false
						var i=0;

	do {
		syn = false
	for(i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0] == item)
			{
				if (! obj[3])
					{
						konsole.think("I don't know anything about this")
						return false
					}
					found = true
					break
			}
		}
				if(item.synonym)
		{
			item = item.synonym
			syn = true
		}
		} while (!found && syn)

		if(found)
			return item
		else
			return null}
actions.examine = function (tok)
{

	if(tok.subject && tok.subject.type == item)
	{
		var ot = tok.subject
		tok.subject =  find_in_inventory(tok.subject)
		if(tok.subject == null)
		 tok.subject =  find_on_map(ot)
	found = !(! tok.subject)

	if (!found)
	{
			konsole.think("I can't see that, so I can't examine that.")

			return false
	}
	if(object_reaction[tok.subject.text]  )
	{
		if (object_reaction[tok.subject.text].examine[0] != "")
			konsole.print(object_reaction[tok.subject.text].examine[0])
		if (object_reaction[tok.subject.text].examine[1] != "")
			konsole.think(object_reaction[tok.subject.text].examine[1])

	} else {
		konsole.think("I don't know anything about this")
	}
		return true;
	}

	if(tok.subject && tok.subject.type == objj)
	{


	tok.subject =  find_on_map(tok.subject)
	found = !(! tok.subject)
	if (!found)
	{
			konsole.think("I can't see that, so I can't examine that.")

			return false
	}
		if(tok.subject.text == "clock")
		{
			konsole.print("The current time is "+ get_time(1))
		}

	if(object_reaction[tok.subject.text])
	{
		if (object_reaction[tok.subject.text].examine[0] != "")
			konsole.print(object_reaction[tok.subject.text].examine[0])
		if (object_reaction[tok.subject.text].examine[1] != "")
			konsole.think(object_reaction[tok.subject.text].examine[1])
		
	} else {
		konsole.think("I don't know anything about this")
	}
		for(var i=0;i<map[here].objects.length; i++)
		{
			var obj = map[here].objects[i]
			if(obj[0].type == item && obj [1] == tok.subject)
			{
				konsole.print("You found a "+ get_text(obj[0]))
				obj[3] = true
			}
		}
	
		return true;
		
	}
	if(map[here].description[0])
		konsole.print(map[here].description[0])
	if(map[here].description[1])
		konsole.think(map[here].description[1])
		return true
	

}
actions.pickup = function(tok)
{
	var it = tok.subject

	if(!(it.type == item))
	{
		konsole.print("You can't pick up " + get_article(it) + " " + get_text(it)+"!")
		return false;
	}

	var i = 0 ; 
	var aa = find_on_map_with_i(it)
	found = ! ( ! aa)
	if(!found)
	{
		konsole.print(get_text(it) + " is not found.")
		return false
	}
	
	i = aa[1]
	tok.item = aa[0]


	map[here].objects.splice(i,1)
	inventory[inventory.length] = it
	if(object_reaction[it.text])
	{
		if (object_reaction[it.text].pickup[0] != "")
			konsole.print(object_reaction[it.text].pickup[0])
		if (object_reaction[it.text].pickup[1] != "")
			konsole.think(object_reaction[it.text].pickup[1])

	} else{
		konsole.print("HOI")
	}
	return true
}


actions.move = function (tok) {
	if(tok.subject && tok.subject.type == direction)
	{
		var dir = 	get_direction(map[here],tok.subject,tok.verb)
	}
	if(tok.subject && tok.subject.type == location)
	{
				var dir = get_path_to(map[here],tok.subject,tok.verb)
	}
	if (! dir)
	{
		konsole.print("You can't go there.")
		if(here =="room_west_14" && tok.subject == words.west)
			konsole.think("You could try another method")
		return false
	}
	else 
		{
			for(var i = 0; i < dir.cond.length ; i++)
			{
				if ( ! dir.cond[i]())
				{
								
					return false
				}
			}
			if(!map[dir.to])
			{
				konsole.print("ERROR ERROR, room doesn't exist. This is not good, sorry.")
				return false
			}

			here = dir.to
			enter(map[here])

		}
	return dir != false
}
actions.help = function(tok)
{
	if(tok.person == undefined)
		{
		konsole.print("To get help, you must first help yourself.<br>			<br>You are playing the reloaded version of this game. This version is improved after the gamejam that spawned it. Do not use this one to judge the Ludum Dare entry, but please do enjoy it.			<br/> <br/><i>Movement</i><br>			You can move in six directions: north, east, south, west, up, down. The options depend on the location, read the text carefully.<br>			Sometimes you need to explicitly say how you want to move.<br>			<br>			<i>Actions</i><br>			Here is an (incomplete) list of actions:<br>			- examine <br>			- open <br>			- attack<br>			- eat <br>			- pick up <br>			- stand <br>			- lie <br>			- sit <br>			<br>			<i>Different input</i><br>			Some sections of the game use different input. In these situations, input is explained on the spot.<br/> When moving, keys are just requirements. You automatically use them when you have them.")		
		return true
	}
	// there is a person given, trying to help person

}
actions.lie = function (tok) {
	if (!map[here].cond["lying down"])
	{
		map[here].cond["lying down"]= true
		konsole.print("you're now lying down.")
		return true
	}
	else
		konsole.print("you're not standing.")
	return false
}
actions.stand = function (tok) {
	if (map[here].cond["lying down"])
	{
		map[here].cond["lying down"] = false
		konsole.print("You're now standing up.")
		return true
	}
	else if (map[here].cond["sitting"]) 
	{
		map[here].cond["sitting"] = false
		konsole.print("You're now standing up.")
		return true
	}
	else
		konsole.print("You are already standing.")
	return false
}
actions.brush = function (tok) {
	var has_brush = false
	for(var i= 0 ; i < inventory.length ; i++)
	{
		has_brush = has_brush || inventory[i] == words.toothbrush
	}
	if (has_brush) {
		object_reaction.teeth.examine = ["", "My teeth are perfectly clean."]
		konsole.print("You cleaned your teeth.")
		return true
	} else {
		konsole.print("You need a toothbrush to brush your teeth.")
	}
}
actions.turn_lights = function (tok) {
	if (tok.object)	{
		if (tok.object == words.light || tok.object == words.lights) {
			if (!map[here].cond["lights"]) {
				map[here].cond["lights"] = true
				konsole.print("You manage to find a lightswitch. You turned on the lights.")
				return true
			} else {
				konsole.think("Why would I want to turn the lights back off again?")
				return false
			}
		} else {
			konsole.think("I cannot turn on " + get_article(tok.object) + get_text(tok.object) + ".")
			return false
		}
	} else {
		konsole.print("What do you want to turn on?")
		return false
	}
}
actions.eat = function (tok) {
	if(tok.subject && tok.subject.type == objj)
	{
	var aa =  find_on_map_with_i(tok.subject)
	tok.subject = aa[0]
	found = !(! tok.subject)
		if(!found)
	{
		konsole.print(get_text(tok.subject) + " is not found.")
		return false
	}
	var i =  aa[1]

	map[here].objects.splice(i, 1)

		if(tok.subject.is_a == words.food)
		{
			object_reaction.teeth.examine = ["", "My teeth are dirty from the food I ate."]
			konsole.print("You eat the " + get_text(tok.object) + ".")
			konsole.think("I feel refreshed.")
			if (tok.subject == words.apple) {
				map[here].descr = "This is a lounge, is contains several chairs and table. There is a door to the north."
			}
			return true
		} else {
			konsole.think("I can't eat the " + get_text(tok.subject) +".")
			return false
		}
	}	
	konsole.think("What should I eat?" )
	return false
}
actions.sit = function (tok) {
	if (tok.subject && tok.subject.is_a == words.sittable) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.subject && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print("The " + get_text(tok.subject) + " is not found.")
			return false
		}
		if (!map[here].cond["sitting"]) {
			map[here].cond["sitting"]= true
			konsole.print("You sit down on the " + get_text(tok.subject) + ".")
			if (tok.subject == words.chair) {
				konsole.think("This is rather comfortable.")
			} 
			return true
		} else {
			konsole.think("I am already sitting.")
			return false
		}
	}
	else {
		konsole.think("I cannot sit here.")
	}
	return false
}

actions.open = function (tok) {
	if (tok.subject && tok.subject.is_a == words.container) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.subject && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}

		if(!found) {
			konsole.print(get_text(tok.subject) + " is not found.")
			return false
		}
		if (tok.subject == words.drawer) {
			object_reaction.drawer.examine = ["An open drawer.", ""]
		}
		if (tok.subject == words.safe) 
		{	
			if(map[here].cond["closed"] == 0)
				{
					konsole.think("I already opened the safe.")
					return false
				}
			konsole.think("I have to enter the code. I don't think I have it.")
			konsole.over_ride_func = function()
			{

				var input = konsole.input_field.value
				konsole.input_field.value = ""
				var safe = tok.subject
				if(code_pointer == code.length)
				{
					if(input ==extra_digit)
				{
					konsole.print("The mechanics of the lock seem to work")
					code_pointer ++

				}
				else
					{
						konsole.print("The mechanics of the lock reset into base position.")
						code_pointer =0
						konsole.over_ride_func = null
					}
				} 
				if(code_pointer < code.length){
				if(input == code[code_pointer])
				{
					konsole.print("The mechanics of the lock seem to work.")
					code_pointer ++
				}
				else
					{
						konsole.print("The mechanics of the lock reset into base position.")
						code_pointer =0
						konsole.over_ride_func = null
					}
				}
				
				if ( code_pointer > code.length)
				{
					konsole.print("The lock unlocks itself.")
					konsole.print("You find a parachute in the safe.")
					konsole.think("Why would someone store a parachute here?")
					reactions.makevisible(words.parachute)()
					object_reaction.safe.examine=["","I still don't understand how I managed to unlock it."]
					map[here].cond["closed"] = 0
					konsole.over_ride_func = null
				}

			}
			return true
		}
		
		if (map[here].cond["closed"]) {
			map[here].cond["closed"] = 0
		} else {
			konsole.think("The " + get_text(tok.subject) + " is already open.")
			return false
		}

		konsole.print("You open the " + get_text(tok.subject) + ".")
		return true
	} else {
		if(tok.subject == words.door)
			konsole.print("You don't need to open or unlock doors. Simply type the direction you want to go. Doors open automatically if you have the required key.")
		else
			konsole.think("I cannot open this.")
	}
	return false
}
actions.close = function (tok) {
	if (tok.subject && tok.subject.is_a == words.container) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.object && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.subject) + " is not found.")
			return false
		}
		if (!map[here].cond["closed"]) {
			map[here].cond["closed"] = 1
		} else {
			konsole.think("The " + get_text(tok.subject) + " is already closed.")
			return false
		}
		if (tok.subject == words.drawer) {
			object_reaction.drawer.examine = ["A closed drawer.", "I can't see into a closed drawer."]
		}
		konsole.print("You close the " + get_text(tok.subject) + ".")
		return true
	} else {
		konsole.think("I cannot close this.")
	}
	return false
}
actions.window_text = function(tok){
	if(tok.subject == words.window){
	konsole.print("The window is locked.")
	konsole.think("This window won't open unless brute force is used.")
	} else
	{
		konsole.print("The airvent is already open.")
		konsole.think("I could crawl through it, but there's no telling where I may end up.")
	}
}
actions.read = function (tok) {
	var tt = tok.subject
	if (tok.subject  = find_in_inventory(tok.subject)) {

		if (tok.subject.is_a == words.readable || object_reaction[tok.subject.text].read) {
			if (object_reaction[tok.subject.text].read[0] != "") {
				konsole.print(object_reaction[tok.subject.text].read[0])
			}
			if (object_reaction[tok.subject.text].read[1] != "") {
				konsole.think(object_reaction[tok.subject.text].read[1])
			}
			return true
		} else {
			konsole.think("I cannot read that.")
			return false
		}
	} else { 
		if(tok.subject == null)
		{
			konsole.print("I don't have " + get_article(tt) + " " + get_text(tt) + ".")
			return false
		}
		if (tok.subject.type == object || tok.subject.type == subject) {
		konsole.think("I do not have " + get_article(tok.subject) + get_text(tok.subject) + ".")
		return false
	} else {
		konsole.think("I cannot read that.")
		return false
	}
}
}
actions.move_obj = function (tok) {
	if (tok.subject.type == objj) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.subject && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.subject) + " is not found.")
			return false
		}
		if (tok.subject.is_a == words.movable) {
			konsole.print("You move the " + get_text(tok.subject) + ".")
			if (tok.subject == words.painting) {
				map[here].enter_again = "You enter the room with the painting and the safe.",
				map[here].description = ["The walls of this mostly empty room are painted a light beige. You see a painting standing next to the safe in the far wall.","This room somehow calmes me."]
			}
			return true
		} else {
			konsole.think("I cannot move " + get_article(tok.subject) + get_text(tok.subject) + ".")
			return false
		}
	} else {
		return false
	}
}
actions.enter_obj = function (tok) {
	if (tok.subject.type == objj) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.subject && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.subject) + " is not found.")
			return false
		}
		if (tok.subject.is_a == words.enterable) {
			konsole.print("You enter the " + get_text(tok.subject) + ".")
			konsole.print("You crawl through the air duct and end up in another room.")
			if (here == "room_northeast_13") {
				here = "room_west_13"
			} else {
				here = "room_northeast_13"
			}
			enter(map[here])
			return true
		} else {
			konsole.think("I cannot enter " + get_article(tok.subject) + get_text(tok.subject) + ".")
			return false
		}
	} else {
		return false
	}
}
actions.press = function (tok) {
	if (tok.subject.type == objj) {
		var i = 0 ; 
		var found = false;
		for( i  = 0; i < map[here].objects.length ; i++) {
			if( map[here].objects[i][0] == tok.subject && map[here].objects[i][3] ) {
				found = 1
				break
			}
		}
		if(!found) {
			konsole.print(get_text(tok.subject) + " is not found.")
			return false
		}
		if (tok.subject.is_a == words.pressable) {
			konsole.print("You press the " + get_text(tok.subject) + ".")
			change_map("death_boom")()
			return true
		} else {
			konsole.think("I cannot enter " + get_article(tok.subject) + get_text(tok.subject) + ".")
			return false
		}
	} else {
		return false
	}
}

actions.credits = function(tok)
{
	konsole.print("<hr>")
	konsole.print("<center>Thank you for playing our game</center>")
	konsole.print("")
	konsole.print("<center>Tim Kerkhoven</center>")
	konsole.print("<center>Nander Voortman</center>")
	return true
}

actions.license = function(tok)
{
	konsole.print("<hr>")
	konsole.print('The MIT License (MIT)<br> '+ 
'<br>'+
'Copyright (c) 2015 Nander Voortman, Tim Kerkhoven<br>'+
'<br>'+
'Permission is hereby granted, free of charge, to any person obtaining a copy '+
'of this software and associated documentation files (the "Software"), to deal '+
'in the Software without restriction, including without limitation the rights '+
'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell '+
'copies of the Software, and to permit persons to whom the Software is'+
'furnished to do so, subject to the following conditions:'+
'<br />'+
'The above copyright notice and this permission notice shall be included in all '+
'copies or substantial portions of the Software.<br />'+
'<br />'+
'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR '+
'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, '+
'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE '+
'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER '+
'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, '+
'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE '+
'SOFTWARE.')
}

actions.use = function(tok)
{

	switch(tok.subject)
	{
	case words.panel : case words.button: case words.buttons: if(here == "room_elevator_14" )
												if(has_item_(words["small key"])())  return actions.move({verb: words.go, subject: words.down})
													else {
														konsole.print("You need an elevator key to use the button")
														return false
													}
											if(here == "room_elevator_12")
												if(has_item_(words["small key"])())  return actions.move({verb: words.go, subject: words.up})
													else
													{ 
														konsole.print("You need an elevator key to use the button")
														return false
													}
											konsole.print("You can't use this here.");break;
	case words.toothbrush: return actions.brush({verb:words.brush, subject: words.teeth});break;
	case words["copper key"]: case words["small key"]: konsole.think("I'll use keys automatically when moving in a direction that requires one.");break;
	case words.door: konsole.print("Doors are operated automatically when going in a direction of a door.");break;
	case words.sink: konsole.print("Your hands are now clean");break;
	case words.safe: actions.open({verb: words.open, subject: words.safe});break;
	case words.sedative: konsole.think("I can only use sedative while in combat");break;
	default: konsole.think("I don't know how to use "+get_article(tok.subject) + " "+  get_text(tok.subject)+ ".")
	}

}