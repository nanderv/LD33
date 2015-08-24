verb = "verb"
direction = "direction"
inverse_direction = "inv"
item = "item"
nil = "nil"
person = "person"
obj = "object"
abstract = "abstract"
here = "here"
words = {}

words.food = {type: abstract}
words.container = {type: abstract}
words.sittable = {type: abstract}
words.readable = {type: abstract}
words.movable = {type: abstract}

words.walk = {type:verb, eat : "to", method: "move"}
words.move = {type: verb, method: "move_obj", synonym: words.walk}
words.stumble = {type:verb, synonym: words.walk}
words.run = {type:verb, synonym: words.walk}
words.head = {type:verb, synonym: words.walk}
words.go = {type:verb, synonym: words.walk, method: "move"}
words.jump = {type:verb, method: "move"}

words.kill = {type:verb, method: "kill"}
words.hit = {type: verb, synonym: words.kill}
words.stab = {type: verb, synonym: words.kill}
words.slash = {type: verb, synonym: words.kill}
words.provoke = {type: verb, synonym: words.kill}
words.push = {type: verb, synonym: words.kill}
words.shove = {type: verb, synonym: words.kill}
words.punch = {type: verb, synonym: words.kill}
words.kick = {type: verb, synonym: words.kill}
words.headbutt = {type: verb, synonym: words.kill}
words.slap = {type: verb, synonym: words.kill}
words.bite = {type: verb, synonym: words.kill}
words.strangle = {type: verb, synonym: words.kill}
words.murder = {type: verb, synonym: words.kill}
words.assassinate = {type: verb, synonym: words.kill}

words.examine = {type:verb, method : "examine"}
words.look = {type: verb, eat: "around", synonym: words.examine}
words.read = {type:verb, method: "read"}

words.help = {type: verb, method : "help"}
words.assist = {type:verb, synonym: words.help, method: "assist"}

words.stand = {type: verb, method: "stand", eat: "up"}
words.lie = {type: verb, method: "lie", eat: "down"}
words.sit = {type: verb, eat: "down", method: "sit"}

words.grab = {type: verb, method: "pickup"}
words.pick = {type: verb, eat: "up", synonym : words.grab}
words.take = {type: verb, synonym: words.grab}

words.open = {type: verb, method: "open"}
words.close = {type: verb, method: "close"}

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

words.here = {type: here}
words.hall = {type: here}
words.room = {type: here}

words.from = {type: nil}
words.in = {type: nil}
words.on = {type: nil}
words.at = {type: nil}

words.bed = {type: obj, is_a: words.sittable}
words.blackboard = {type: obj}
words.buttons = {type:obj, synonym: words.panel}
words.cabinet = {type: obj}
words.chair = {type: obj, is_a: words.sittable}
words.clock = {type: obj}
words.countertop = {type: obj}
words.dial = {type: obj}
words.desk = {type:obj}
words.drawer = {type:obj, is_a: words.container}
words.lights = {type: obj}
words.light = {type: obj, synonym: words.lights}
words.painting = {type: obj, is_a: words.movable}
words.panel = {type:obj}
words.porkchops = {type: obj, is_a: words.food}
words.rubbish = {type: obj}
words.safe = {type: obj, is_a: words.container}
words.sink = {type: obj}
words.stove = {type: obj}
words.table = {type: obj}
words.teeth = {type: obj}
words.telephone = {type:obj }
words.window = {type: obj}

words.medical = {type: obj, eat: "equipment"}
words.equipment = {type: obj, synonym: words.medical}

words.coin = {type: item}
words.documents = {type: item}
words.file = {type: item, is_a: words.readable}
words.knife = {type:item}
words.newspaper = {type:item, is_a: words.readable}
words.parachute = {type: item, is_a: words.container}
words.pen = {type:item}

words.toothbrush = {type: item, long_name : "dirty toothbrush"}
words.towel = {type : item}

words.key = {type: abstract}
words.copper = {type : item, eat: "key", long_name : "copper key", is_a : words.key}
words.small = {type: item, eat: "key", long_name: "small key", is_a: words.key}
words.master = {type: item, eat: "key", long_name: "master key", is_a: words.key} // no description, used for specific condition failed message
words.empty = {type: item} // no description, used for specific condition failed message
words.badge = {type: item, long_name : "Employee badge"}
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
// @requires: w is of type words.(...)
function get_article(w) {
	var item = get_text(w)
	var article = "a "
	if ("aeiou".indexOf(item[0]) >= 0) {
		article = "an "
	}
	return article
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
	 	 "Am I a hacker??"]}
object_reaction.newspaper = {examine: ["It's a newspaper dated Friday the 27th of June 1969.", 
		"At least I know the date now."],
	 pickup: ["You pick up the newspaper.",
	 	 ""],
	 read: ["Violent Serial Killer Miraculously Cured",
	 	 "At the Mercy Mental Hospital the notorious serial killer nicknamed 'The Arbitrator', is reported to have been cured after receiving extensive shock therapy. Currently still residing there, The Arbitrator is showing no signs of murderous intent according to Wolfram Switzer, head of Mercy Mental Hospital..."]}
object_reaction.chair = {examine: ["It's a chair. You can sit on it.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.table = {examine: ["It's a wooden table.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.rubbish = {examine: ["Useless pieces of paper and other trash.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.painting = {examine: ["It's a beautiful painting, realistically depicting lilacs in a vase. It is quite bleak however.", 
		""],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.safe = {examine: ["It's a locked safe.", 
		"Unfortunately, nobody put the code on a post-it note."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.parachute = {examine: ["Used to safely descend from a high altitude.", 
		""],
	 pickup: ["You picked up the parachute.",
	 	 ""]}
object_reaction.medical = {examine: ["Strange machine with two electrodes attached to it. It does not appear to be working right now.", 
		"My head feels like it is about to burst."],
	 pickup: ["",
	 	 "Am I a hacker??"]}
object_reaction.file = {examine: ["This appears to be part of a patient file.", 
		"Is this about me?"],
	 pickup: ["You picked up a file.",
	 	 ""],
	 read: ["Patient Name: The Arbitrator",
	 "Treatment consists of electro shock therapy. <br />Expected desired results after several 6 hour sessions. <br />Session 1: Subject showed no noticable improvements, lenghtening sessions to 8 hours. <br />Session 2: Subject showed minor improvements, continue sessions. <br />Session 3: Subject still showed only minor improvements, increasing session lenght to 10 hours. <br /> Session 4: Subject showing major improvements, recommended to continue sessions for another week. <br />Session 5: Subject ..."]}







