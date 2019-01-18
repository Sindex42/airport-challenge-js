'use strict'

describe('Plane', function () {
  let plane

  beforeEach(function () {
    plane = new Plane
  })

  it('is not flying by default', function () {
    expect(plane.isFlying).toEqual(true)
  })
})
