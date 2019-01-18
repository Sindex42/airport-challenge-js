'use strict'

class Plane {
  constructor (flying = true) {
    this.isFlying = flying
  }

  stopFlying () {
    this.isFlying = false
  }

  startFlying () {
    this.isFlying = true
  }
}
