verb = "verb"
direction = "direction"
inverse_direction = "inv"
item = "item"
nil = "nil"
person = "person"
words = {}
words.walk = {type:verb, eat : "to", method: actions.move}
words.stumble = {type:verb, synonym: words.walk}
words.run = {type:verb, synonym: words.walk}
words.stand = {type: verb, method: actions.stand, eat: "up"}
words.lie = {type: verb, method: actions.lie, eat: "down"}
words.jump = {type:verb, method: actions.move}
words.grab = {type:verb, method: actions.pickup}
words.pick = {type: verb, eat: "up", synonym : words.grab}
words.north = {type:direction}
words.south = {type:direction}
words.east = {type:direction}
words.west = {type:direction}
words.up = {type:direction}
words.down = {type:direction}
words.away = {type: inverse_direction}


words.from = {type: nil}

words.coin = {type: item}
words.help = {type: verb, method : actions.help}
words.assist = {type:verb, synonym: words.help, method: actions.assist}
words.john = {type: person}



words.toothbrush = {type: item}
words.towel = {type : item}
for (var key in words) {
  	if (words.hasOwnProperty(key)) {
  		words[key].text = key
  	}
}