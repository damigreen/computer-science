const EventEmiter = require('events')

class EventEmiter {
  constructor() {
    this.events = {}
  }

  on(type, fn) { 
    if (!this.events[type]) {
      this.events[type] = []
      this.events[type].push(fn)
    }
  }

  emit(type, data) {
    if (!this.events[type]) return;
    this.events[type].forEach(fn => fn(data))
  }

  remove(type, fn) {
    var eventFn = this.events[type]
    if(!eventFn) return;
    var i = eventFn.indexOf(fn)
    if (i === -1) return
    eventFns.splice(i, 1);
  }
}

const emt = new EventEmiter

emt.on('greet', () => console.log('yeah=================='))
const reply = () => 'Ok buddy'
emt.on('greet', reply)
console.log('Hello')
emt.emit('greet');
