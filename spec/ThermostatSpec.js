'use strict;'

describe('Thermostat', function() {
  var thermostat = new Thermostat

  it('has a current temperature of 20 by default', function() {
    expect(thermostat.current_temp).toEqual(20);
  })
});
