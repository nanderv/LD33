

function pickup (obj, dc)
{
	if (here.state.obj == 1)
	{
		alert("object picked up")
		inventory[inventory.length] = obj
		here.state.obj = 0

	} else {
		alert("Object already picked up")
	}
}
methods = [words.walk]


functionList = [pickup]

home  = {name: "Home", state: {}, functionList}



events = []
inventory = []

here = home