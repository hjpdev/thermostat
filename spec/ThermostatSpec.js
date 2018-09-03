'use strict;'

describe('Thermostat', function() {
  var thermostat = new Thermostat

  it('has a current temperature of 20 by default', function() {
    expect(thermostat.current_temp).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees by default', function() {
    expect(thermostat.minimum_temp).toEqual(10);
  });

  describe('up()', function() {
    it('increases the temperature by 1', function() {
      var initialTemp = thermostat.current_temp
      thermostat.up()
      var difference = thermostat.current_temp - initialTemp
      expect(difference).toEqual(1);
    });
  });

  describe('down()', function() {
    it('decreases the temperature by 1', function() {
      var initialTemp = thermostat.current_temp
      thermostat.down()
      var difference = initialTemp - thermostat.current_temp
      expect(difference).toEqual(1);
    })
  })
});
