;(function(){
  var w = 'hello world'
  var w1 = w.split('').reverse()
  console.log(w1)
})()

class Manager {
  constructor() {

  }

  run() {
    // TODO:
    var local
    local = new Date()
    console.log(local.getTime())
  }
}

let manager = new Manager()
manager.run()
