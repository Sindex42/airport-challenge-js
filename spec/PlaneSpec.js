'use strict'
/* global describe, it, expect, beforeEach, jasmine */

describe('Plane', function () {
  let plane
  let airport

  beforeEach(function () {
    plane = new Plane
    airport = jasmine.createSpy('airport')
  })

  it('is not flying by default', function () {
    expect(plane.isFlying).toEqual(true)
  })

  describe('#stopFlying', function () {
    it('stops flying', function () {
      plane.stopFlying()
      expect(plane.isFlying).toEqual(false)
    })
  })
})
