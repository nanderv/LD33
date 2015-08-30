word_type = {}
word_type.verb = "verb"
word_type.subject = "subject"
actionz = {}
actionz.use = "use"
np = "npc"
actionz.walkd = "walk_direct"
actionz.walk = "walk"
actionz.examine = "examine"
actionz.examineRoom = "examineRoom"
actionz.eat = "eat"


sentences = []
sentences[0] = [[words.use], [words.the, null],[item, obj] ]
sentences[1] = [[direction]]
sentences[2] = [[words.go, words.jump, words.walk],[words.to, null], [direction]  ]
sentences[3] = [[words.examine, words.look],[words.the, null], [item,obj,]  ]
sentences[4] = [[words.master]]
sentences[5] = [[words.eat],[obj]]
sentences[6] = [[words.attack],[np]]
sentences[7] = [[words.stand, words.get],[words.up]]
sentences[8] = [[words.pick, words.get],[words.up, null],[item, obj]]
sentences[9] = [[words.help]]
sentences[10] = [[words.use], [words.knife], [words.on, null], [np] ]
sentences[11] = [[words.sit], [words.in, words.on, null],[obj] ]
sentences[12] = [[words.lie], [words.down]]
sentences[13] = [[words.open], [words.window, words.airduct, words["air duct"], words["air vent"]]]
sentences[14] = [[words.jump],[words.out,null],[words.of,null], [words.window]]
sentences[15] = [[words.unlock, words.open],[words.door]]
sentences[16] = [[words.stand]]
sentences[17] = [[words.lie]]
sentences[18] = [[words.brush],[words.teeth]]
sentences[19] = [[words.read],[item]]
sentences[20] = [[words.enter],[words.airduct, words["air duct"], words["air vent"]]]
sentences[21] = [[words.move],[words.painting]]
sentences[22] = [[words.open, words.unlock], [obj]]
sentences[23] = [[words.close], [obj]]
sentences[24] = [[words.examine]] 
sentences[25] = [[words.credits]] 
sentences[26] = [[words.license]] 
sentences[27] = [[words.inventory]] 
sentences[28] = [[words.turn, null], [words.on, null], [words.light,words.lights]] 


definitions = []
definitions[0] = {a:0,cmd: actions.use, 0: word_type.verb, 2: word_type.subject}
definitions[1] =  {a:1,cmd: actions.move, 0: word_type.subject, verb: words.walk}
definitions[2] = {a:2,cmd: actions.move, 0: word_type.verb, 2: word_type.subject}
definitions[3] =  {a:3,cmd: actions.examine, 0: word_type.verb, 2: word_type.subject}

definitions[5] =  {a:5,cmd: actions.eat, 0: word_type.verb, 1: word_type.subject}
definitions[6] =  {a:6,cmd: actions.kill, 0: word_type.verb, 1: word_type.subject}
definitions[7] =  {a:7,cmd: actions.stand, 0: word_type.verb}
definitions[8] =  {a:8,cmd: actions.pickup, 0: word_type.verb, 2: word_type.subject}
definitions[9] =  {a:7,cmd: actions.help,verb:words.help}
definitions[10] = {a: 10, cmd: actions.knife	, verb: words.attack, 3:word_type.subject}
definitions[11] =  {a:11,cmd: actions.sit, 0: word_type.verb, 2: word_type.subject}
definitions[12] =  {a:12,cmd: actions.lie, 0: word_type.verb}
definitions[13] =  {a:13,cmd: actions.window_text, 0: word_type.verb}
definitions[14] =  {a:14,cmd: actions.move, verb:words.jump, subject: words.west}
definitions[15] =  {a:15,cmd: actions.open, 0: word_type.verb, 1: word_type.subject}
definitions[16] =  {a:17,cmd: actions.stand, 0: word_type.verb}
definitions[17] =  {a:18,cmd: actions.lie, 0: word_type.verb}
definitions[18] =  {a:18,cmd: actions.brush, 0: word_type.verb, 1: word_type.subject}
definitions[19] =  {a:19,cmd: actions.read, 0: word_type.verb, 1: word_type.subject}
definitions[20] =  {a:20,cmd: actions.enter_obj, 0: word_type.verb, 1: word_type.subject}
definitions[21] =  {a:21,cmd: actions.move_obj, 0: word_type.verb, 1: word_type.subject}
definitions[22] =  {a:22,cmd: actions.open, verb: words.open, 1: word_type.subject}
definitions[23] =  {a:23,cmd: actions.close, 0: word_type.verb, 1: word_type.subject}
definitions[24] =  {a:4,cmd: actions.examine, 0: word_type.verb}
definitions[25] =  {a:7,cmd: actions.credits,verb:words.help}
definitions[26] =  {a:7,cmd: actions.license,verb:words.help}
definitions[27] =  {a:7,cmd: actions.inventory,verb:words.help}
definitions[28] =  {a:7,cmd: actions.turn_lights,verb:words.turn, subject: words.lights}

parse_checks = {}
parse_checks.in_inventory = null
parse_checks.direction_available = null
parse_checks.visible = null
parse_checks.npc_here = null
parse_checks.has_knife = null

selectors = []
selectors [0] = {subject: parse_checks.in_inventory}
selectors [1] = {subject: parse_checks.direction_available}
selectors [2] = {subject: parse_checks.direction_available}
selectors [3] = {subject: parse_checks.visible}
selectors [4] = {}
selectors [5] = {subject: parse_checks.visible}
selectors [6] = {subject: parse_checks.npc_here}
selectors [7] = {subject: parse_checks.npc_here}
selectors [8] = {subject: parse_checks.on_floor}
selectors [9] = {}
selectors [10] = {subject: parse_checks.has_knife}
selectors [11] = {subject: parse_checks.visible}
selectors [12] = {}
selectors [13] = {subject: parse_checks.visible}
selectors [14] = {subject: parse_checks.visible}
selectors [15] = {subject: parse_checks.in_inventory}
selectors [16] = {subject: parse_checks.visible}
selectors [17] = {}
selectors [18] = {}



function spatify(prev, current, index, array){
	if ( index == 0)
		return current
	else
		return prev + " "+ current
}
function complete(sen, orig)
{
	
	var last = sen.pop()
	if(words[last])
		return sen + " "+ last
	var sentence = tokenize(sen.reduce(spatify, ""))
	var result = null
	var j=0
	var i=0
	possibles = []
	for(var i = 0; i < sentences.length; i++)
	{
		result = null

		var hit=true
		// check all words
		var sen_look = 0
		var sent = sentences[i]
		var j=0
		for(j=0;j< sent.length && hit;j++)
		{
			var result = definitions[i]
			//sentence 
			var check_sen = sent[j]
			var found = false
			var has_null = false
			

			for(var k=0;k < check_sen.length;k++)
			{
				if(sen_look >= sentence.length)
				{
					possibles[possibles.length] = [i,j,k]
					hit = false
					break
				}

				if(!check_sen[k])
					has_null = true

				// TODO: synonym check
				var find = sentence[sen_look]
				while (true){
					if(find == check_sen[k] || find.type == check_sen[k] )
					{
						if(result[j])
							result[result[j]] = find
						found = true
					}
					if(find && (find.synonym!= null || find.synonym != undefined) && !found)
						find = find.synonym
					else
						break
				}

			}
			if((! found) && has_null)
				{sen_look --
					found=true
				}

				sen_look ++

				hit = hit && found
			}


		}
		var result = []
		if(  possibles.length > 10)
			return false
		if(possibles.length > 0)
		{
			var wordz =  ac(last)
			for(var i = 0; i< wordz.length; i++)
			{
				var found = false


				var j=0;
				for( j=0;j< possibles.length; j++)
				{
					var find = words[wordz[i]]
					var has_null=true
					while(has_null){
						has_null = false

						for(var k = 0 ; k < sentences[possibles[j][0]][possibles[j][1]].length; k++)
						{
							while (true){
								
								if(!sentences[possibles[j][0]][possibles[j][1]][k])
									has_null = true

								if(find == sentences[possibles[j][0]][possibles[j][1]][k] || find.type == sentences[possibles[j][0]][possibles[j][1]][k] )
								{
									found = true
								}
								if(find && (find.synonym!= null || find.synonym != undefined) && !found)
									find = find.synonym
								else
									break
							}


						}
						if(!found && has_null)
						{
							possibles[j][1] += 1

						}
					}

				}
				if(found)
					result[result.length] = wordz[i]
			}
			if(result.length > 1 && result.length < 10)
			{
				konsole.print("Options: " + result)
				return orig
			}
			if(result.length == 1)
			{
				konsole.print("only one option")
				sen[sen.length] = result[0]
				return sen.reduce(spatify, "")
			}

			}
		else 
		{
			if(parse(sentence) != null) 
				konsole.print("Sentence already complete as it is. Can't be extended.")
			else
				konsole.print("Sentence can't be completed, it's not a valid part of a sentence")
		}

		return orig
	}


	function parse(sentence)
	{
		if (!sentence )
			return false

		for(var i = 0; i < sentences.length; i++)
		{
			result = null

			var hit=true
		// check all words
		var sen_look = 0
		var sent = sentences[i]
		var j=0
		for(j=0;j< sent.length && hit;j++)
		{
			var result = definitions[i]
			//sentence 
			var check_sen = sent[j]
			var found = false
			var has_null = false
			

			for(var k=0;k < check_sen.length;k++)
			{
				if(sen_look >= sentence.length)
				{
					hit = false

					break
				}

				if(!check_sen[k])
					has_null = true

				// TODO: synonym check
				var find = sentence[sen_look]
				while (true){

					if(find == check_sen[k] || find.type == check_sen[k] )
					{
						if(result[j])
							result[result[j]] = find
						found = true
					}
					if(find && (find.synonym!= null || find.synonym != undefined) && !found)
						find = find.synonym
					else
						break
				}

			}
			if((! found) && has_null)
				{sen_look --
					found=true
				}
				if(!found && k + sen_look[j]+1  >= sentences[i].length)
				{
					sen_look ++ 
					hit = true
					break
				}
				sen_look ++

				hit = hit && found
			}
			if(hit)

			if (hit && sen_look == sentence.length)
				return result
		}
		return null

	}
