;(function(){
  var w = 'hello world'
  var w1 = w.split('').reverse()
  console.log(w1)
})()

class Manager {
  constructor() {
    this.json = {}
  }
  commit(key, value) {
    this.json[key] = value
  }
}

let manager = new Manager()
