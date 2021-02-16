'use strict'; //You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function(){
    plane.land(airport)
    plane.takeoff()
    expect(airport.planes()).not.toContain(plane)
  })
});
