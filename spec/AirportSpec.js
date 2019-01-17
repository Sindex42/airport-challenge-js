'use strict'

describe('Airport', function () {
  let airport
  let plane

  beforeEach(function () {
    airport = new Airport()
    plane = jasmine.createSpy('plane')
  })

  it('should have an empty hangar', function () {
    expect(airport.hangar).toEqual([])
  })

  it('should land a plane', function () {
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  })

  it('should take off a plane', function () {
    airport.land(plane)
    airport.takeOff(plane)

    expect(airport.hangar).toEqual([])
  })

})
