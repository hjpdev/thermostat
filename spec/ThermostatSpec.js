'use strict;'

describe('Thermostat', function() {
  var thermostat = new Thermostat

  it('has a current temperature of 20 by default', function() {
    th = new Thermostat()
    expect(th.currentTemp).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees by default', function() {
    expect(thermostat.MIN_TEMP).toEqual(10);
  });

  describe('up()', function() {
    it('increases the temperature by 1', function() {
      var initialTemp = thermostat.currentTemp;
      thermostat.up();
      var difference = thermostat.currentTemp - initialTemp;
      expect(difference).toEqual(1);
    });
  });

  describe('down()', function() {
    it('decreases the temperature by 1', function() {
      var initialTemp = thermostat.currentTemp
      thermostat.down()
      var difference = initialTemp - thermostat.currentTemp
      expect(difference).toEqual(1);
    });

    it('does not decrease it past the minimum temp', function() {
      newTh = new Thermostat
      for(i=0; i<20; i++) {
        newTh.down()
      };
      expect(newTh.currentTemp).toEqual(newTh.MIN_TEMP)
    });
  });

  describe('power-saving mode', function() {
    testThermo = new Thermostat()
    it('is on by default', function() {
      expect(testThermo.isPowerSaving()).toEqual(true);
    });

    it('can be turned off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.isPowerSaving()).toEqual(false);
    });

    it('can be turned on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.isPowerSaving()).toEqual(true)
    });

    it('sets the max temp to 25 when on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.MAX_TEMP).toEqual(25);
    });

    it('sets the max temp to 32 when off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.MAX_TEMP).toEqual(32);
    });
  });

  describe('reset()', function() {
    it('resets the temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.currentTemp).toEqual(20);
    });
  });

  describe('energyUsage()', function() {
    it('returns low when currentTemp is below 18', function() {
      thermostat.currentTemp = 10;
      expect(thermostat.energyUsage()).toEqual('low');
    });

    it('returns medium when currentTemp is below 25', function() {
      thermostat.currentTemp = 22;
      expect(thermostat.energyUsage()).toEqual('medium');
    });

    it('returns high when currentTemp is 25 & above', function() {
      thermostat.currentTemp = 30;
      expect(thermostat.energyUsage()).toEqual('high');
    })
  });
});
