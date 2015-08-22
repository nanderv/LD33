map = {}
dir = []
immovable = ["lying","sleeping"]
function has_item(item)
{
	return function(){
		for(var i = 0; i < inventory.length; i++)
		{
			if (inventory[i] == item)
				return true
		}
		konsole.print("You don't have a " + item.text + " so you can't do this")
		return false
		}
}
function condition_false(cond)
{
	return function()
	{
		if( map[here].cond[cond] )
			konsole.print("You cannot do that, you're " + cond)
		return !map[here].cond[cond] 
	}
}
function enter(loc)
{
	if(loc.entered)
		konsole.print(loc.enter_again)
	else
		konsole.print(loc.enter)
	loc.entered = true
	if(loc.thoughts)
		konsole.think(loc.thoughts)
	for(var i = 0; i< loc.directions.length ; i++)
	{
		var d = loc.directions[i]
		if(!d.hidden)
			konsole.print(d.methods[0].text +" " + d.direction.text +" to go to " + d.to)
	}
}

 dir[0]      = {to: "hospital_hall", methods  : [words.walk], direction: words.east, cond: [condition_false("lying")]}
 dir[1]      = {to: "window", methods  : [words.jump], direction: words.west, hidden: 1, cond: [condition_false("lying")]}

objects = [words.toothbrush]

map.hospital_room = {enter: "You wake up, alone, ....", thoughts : "Where am I?",
   enter_again:"You are back at the hospital room where you woke up",
   description : "It's a hospital room",
   directions: dir,
   objects: objects, cond : {lying:1}}

dir = []
 dir[0]      = {to: "hospital_room", methods  : [words.walk], direction: words.west, cond: [has_item(words.toothbrush)]}
 objects = [words.towel]
map.hospital_hall = {enter: "You are in a hallway" , enter_again: "Hallway", description : "It's a hallway, nothing special", directions: dir, objects : objects , image: "", cond : {}}


map.window = {enter: "The ground is approaching you in an increasing pace." , enter_again: "This is really strange, why am I here again?", description : "You are dead", directions: [], objects : [] , image: "", cond: {dead: 1}}


here = "hospital_room"

for (var key in map) {
  	if (map.hasOwnProperty(key)) {
  		map[key].text = key
  	}
}
