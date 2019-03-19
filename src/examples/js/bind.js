var meow = function () {
  console.log(this.name + ' says: Meooow')
}

var Garfield = {name: 'Garfield'}
var Puszek = {name: 'Puszek'}

// meow() // <- throws TypeError
meow.bind(Garfield)()

/* Already bound function cannot be bound again*/
meow.bind(Garfield).bind(Puszek)()
