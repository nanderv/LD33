verb = "verb"
direction = "direction"
inverse_direction = "inv"
item = "item"
nil = "nil"
person = "person"
obj = "object"
abstract = "abstract"

words = {}

words.food = {type: abstract}

words.walk = {type:verb, eat : "to", method: "move"}
words.stumble = {type:verb, synonym: words.walk}
words.run = {type:verb, synonym: words.walk}
words.head = {type:verb, synonym: words.walk}
words.go = {type:verb, synonym: words.walk}
words.jump = {type:verb, method: "move"}

words.examine = {type:verb, method : "examine"}

words.help = {type: verb, method : "help"}
words.assist = {type:verb, synonym: words.help, method: "assist"}

words.stand = {type: verb, method: "stand", eat: "up"}
words.lie = {type: verb, method: "lie", eat: "down"}

words.grab = {type:verb, method: "pickup"}
words.pick = {type: verb, eat: "up", synonym : words.grab}

words.brush = {type: verb, method : "brush"}

words.turn = {type: verb, eat: "on", method: "turn_lights"}

words.eat = {type: verb, method: "eat"}

words.east = {type:direction}
words.north = {type:direction}
words.south = {type:direction}
words.west = {type:direction}
words.up = {type:direction}
words.down = {type:direction}
words.away = {type: inverse_direction}

words.from = {type: nil}

words.bed = {type: obj}
words.blackboard = {type: obj}
words.cabinet = {type: obj}
words.chair = {type: obj}
words.clock = {type: obj}
words.countertop = {type: obj}
words.desk = {type:obj}
words.porkchops = {type:obj, is_a: words.food}
words.sink = {type: obj}
words.stove = {type: obj}
words.teeth = {type: obj}
words.telephone = {type:obj }
words.window = {type: obj}

words.coin = {type: item}
words.documents = {type: item}
words.knife = {type:item}
words.newspaper = {type:item}
words.pen = {type:item}

words.toothbrush = {type: item, long_name : "dirty toothbrush"}
words.towel = {type : item}
words.key = {type: abstract}
words.copper = {type : item, eat: "key", long_name : "copper key", is_a : words.key}



// Secretary
words.secretary = {type: person}

for (var key in words) {
  	if (words.hasOwnProperty(key)) {
  		words[key].text = key
  	}
}

function get_text (w)
{
	if(w.long_name)
		return w.long_name
	return w.text
}
object_reaction = {}
object_reaction.toothbrush = {examine: ["", 
		"It is probably mine."],
	 pickup: ["",
	 	 "Did I brush my teeth yesterday?<br / > Come to think of it, what day is it?"]}
object_reaction.teeth = {examine: ["", 
		"I should clean them more often."],
	 pickup: ["",
	 	 "Am I a hacker??"]}	 	 
object_reaction.clock = {examine: ["", 
		"It tells  the time."],
	 pickup: ["",
	 	 "Am I a hacker??"]}	 
object_reaction.towel = {examine: ["", 
		"It's a towel."],
	 pickup: ["",
	 	 "I now have a towel"]}	 
object_reaction.copper = {examine: ["The label states it can be used to open the staff area on floor 14.", 
		""],
	 pickup: ["",
	 	 "I found a copper key."]}	 
object_reaction.bed = {examine: ["", 
		"It is a bed. <br /> It doesn't look very comfortable."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.window = {examine: ["You look out the window and see a city you don't recognize.", 
		"The people look like ants from up here."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.porkchops = {examine: ["These are cooked porkchops.", 
		"It looks tasty."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.knife = {examine: ["It is a fairly large kitchen knife.", 
		""],
	 pickup: ["You picked up a knife.",
	 	 "This knife feels familiar."]}
object_reaction.stove = {examine: ["It is a gas stove used for cooking.", 
		"It is still warm..."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.countertop = {examine: ["There is a plate of porkchops lying on the countertop.", 
		"Did I... cook this?"],
	 pickup: ["",
	 	 "Am I a hacker??"]}
