'use strict'

class Airport {
  constructor(hangar) {
    this.hangar = []
  }

  land (plane) {
    this.hangar.push(plane)
    return this.hangar
  }

  takeOff (plane) {
    this.hangar.pop(plane)
    return this.hangar
  }
}
