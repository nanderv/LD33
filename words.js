verb = "verb"
direction = "direction"
inverse_direction = "inv"
item = "item"
nil = "nil"
person = "person"
words = {}
words.walk = {type:verb, eat : "to", method: actions.walk}
words.stumble = {type:verb, synonym: words.walk}
words.run = {type:verb, synonym: words.walk}

words.north = {type:direction}
words.south = {type:direction}
words.east = {type:direction}
words.west = {type:direction}
words.up = {type:direction}
words.down = {type:direction}
words.away = {type: inverse_direction}

words.from = {type: nil}
words.pick = {type: verb, eat: "up"}
words.coin = {type: item}
words.help = {type: verb, action : actions.help}
words.assist = {type:verb, synonym: words.help}
words.john = {type: person}
for (var key in words) {
  	if (words.hasOwnProperty(key)) {
  		words[key].text = key
  	}
}