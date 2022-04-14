var number = function(busStops){
    let people = 0;
    for(let i=0; i<busStops.length; i++)  {
      people += (busStops[i][0]-busStops[i][1])
    }
    return people;
  }

  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);