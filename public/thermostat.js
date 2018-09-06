function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.currentTemp = this.DEFAULT_TEMP;
  this.powerSaving = true;
  this.MIN_TEMP = 10;
  this.MED_ENERGY_lIMIT = 18;
  this.MAX_TEMP = 25;
}

Thermostat.prototype.up = function() {
  if (this.isMaxTemp() === false) this.currentTemp ++;
}

Thermostat.prototype.down = function() {
  if (this.currentTemp > this.MIN_TEMP) this.currentTemp --;
}

Thermostat.prototype.isMaxTemp = function() {
  return (this.currentTemp === this.MAX_TEMP)
}

Thermostat.prototype.isPowerSaving = function() {
  return this.powerSaving;
}

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.MAX_TEMP = 25;
  if (this.currentTemp > this.MAX_TEMP) this.currentTemp = this.MAX_TEMP;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this.MAX_TEMP = 32;
}

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemp < this.MED_ENERGY_lIMIT)
    return 'low'
  else if (this.currentTemp < this.MAX_TEMP)
    return 'medium'
  else
    return 'high'
}
