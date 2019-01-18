'use strict'

class Plane {
  constructor (flying = true) {
    this.isFlying = flying
  }

  stopFlying () {
    return this.isFlying = false
  }

  startFlying () {
    return this.isFlying = true
  }
}
