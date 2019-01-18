'use strict'

class Airport {
  constructor (hangar) {
    this.hangar = []
  }

  land (plane) {
    this.hangar.push(plane)
    plane.stopFlying()
    return this.hangar
  }

  takeOff (plane) {
    this.hangar.pop(plane)
    plane.startFlying()
    return this.hangar
  }
}
