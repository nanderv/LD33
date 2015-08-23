 central_time = 360
 dt = 1
 function get_time(str)
 {
 	var days  =  Math.floor (central_time / 1440)
 	var min_on_day =  Math.floor ( central_time - (days*1440))
 	var hours =  Math.floor( min_on_day / 60)
 	var ampm = "AM"
 	if ( hours > 12)
 	{
 		ampm = "PM"
 		hours = hours - 12
 	}
 	var min = min_on_day - hours*60
 	if (str)
 		if( min > 9)
 			return hours + ":"+ min + " " + ampm
 		else
 			return hours + ":0"+ min + " " + ampm
	else
 		return [days, hours, min, ampm]
 }
 function handle_map_events()
 {
 	if(map[here].time_reaction)
 	{
 		for (var i = 0; i < map[here].time_reaction.length ; i++)
 		{
 			var re = map[here].time_reaction[i]
 			if( re[0] < map[here].time && !re[4])
 			{
 				if(re[1] != "")
 					konsole.print(re[1])
 				if(re[2] != "")
 					konsole.think(re[2])
 				re[3]()
 				re[4] = true
 			}
 		}	
 	}
 }
 function handle_world_events()
 {

 }
 function update_time()
 {
 	central_time += dt
 	if(! map[here].time )
 		map[here].time = 0
 	map[here].time += dt
 	handle_map_events()
 	handle_world_events()
 }
  setInterval( update_time, dt*1000 );
