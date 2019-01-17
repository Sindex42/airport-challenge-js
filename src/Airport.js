'use strict'

class Airport {
  constructor(hangar) {
    this.hangar = []
  }

  land (plane) {
    this.hangar.push(plane)
  }

  takeOff (plane) {
    this.hangar.pop(plane)
  }
}
