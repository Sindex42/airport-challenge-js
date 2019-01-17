'use strict'

describe('Airport', function () {
  let airport
  let plane

  beforeEach(function () {
    airport = new Airport()
    plane = jasmine.createSpy('plane')
  })

  describe('#hangar', function () {
    it('should be empty by default', function () {
      expect(airport.hangar).toEqual([])
    })
  })

  describe('#land', function () {
    it('should land a plane', function () {
      airport.land(plane)
      expect(airport.hangar).toContain(plane)
    })
  })

  describe('#take_off', function () {
    it('should take off a plane', function () {
      airport.hangar = [plane]
      airport.takeOff(plane)

      expect(airport.hangar).toEqual([])
    })
  })
})
