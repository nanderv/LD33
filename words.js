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
words.container = {type: abstract}

words.walk = {type:verb, eat : "to", method: "move"}
words.stumble = {type:verb, synonym: words.walk}
words.run = {type:verb, synonym: words.walk}
words.head = {type:verb, synonym: words.walk}
words.go = {type:verb, synonym: words.walk, method: "move"}
words.jump = {type:verb, method: "move"}

words.examine = {type:verb, method : "examine"}

words.help = {type: verb, method : "help"}
words.assist = {type:verb, synonym: words.help, method: "assist"}

words.stand = {type: verb, method: "stand", eat: "up"}
words.lie = {type: verb, method: "lie", eat: "down"}

words.grab = {type:verb, method: "pickup"}
words.pick = {type: verb, eat: "up", synonym : words.grab}
words.take = {type: verb, synonym: words.grab}

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
words.buttons = {type:obj, synonym: words.panel}
words.cabinet = {type: obj}
words.chair = {type: obj}
words.clock = {type: obj}
words.countertop = {type: obj}
words.dial = {type: obj}
words.desk = {type:obj}
words.drawer = {type:obj, is_a: words.container}
words.panel = {type:obj}
words.porkchops = {type: obj, is_a: words.food}
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
words.small = {type: item, eat: "key", long_name: "small key", is_a: words.key}
words.master = {type: item, eat: "key", long_name: "master key", is_a: words.key} // no description

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
		"Did I... cook this? <br />It looks tasty."],
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
object_reaction.countertop = {examine: ["It is a countertop used for cooking.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.panel = {examine: ["A panel with numbered buttons used to operate the elevator. Every button has a small keyhole next to it.", 
		"Strange, the number 13 is missing..."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.dial = {examine: ["A dial with the numbers 1 to 14. It has a pointer that indicates which floor you are currently on.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.small = {examine: ["A small key with a label that reads: floors 12 - 14", 
		""],
	 pickup: ["You obtained a small key",
	 	 ""]}
object_reaction.desk = {examine: ["It is a handcarved oaken desk that looks slightly worn. There is one unlocked drawer.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.drawer = {examine: ["A closed drawer.", 
		"I can't see into a closed drawer."],
	 pickup: ["",
	 	 ""]}
object_reaction.newspaper = {examine: ["It's a newspaper dated Friday the 27th of June 1969.", 
		"At least I know the date now."],
	 pickup: ["You pick up the newspaper.",
	 	 ""]}
