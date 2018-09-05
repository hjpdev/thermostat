function Thermostat(currentTemp = 20) {
  this.currentTemp = currentTemp;
  this.MIN_TEMP = 10;
  this.powerSaving = true;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function() {
  if (this.isMaxTemp() === false) this.currentTemp ++;
}

Thermostat.prototype.down = function() {
  if (this.currentTemp > this.MIN_TEMP) this.currentTemp --;
}

Thermostat.prototype.isMaxTemp = function() {
  return (this.currentTemp === this.maxTemp)
}

Thermostat.prototype.isPowerSaving = function() {
  return this.powerSaving;
}

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.maxTemp = 25;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this.maxTemp = 32;
}

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemp < 18)
    return 'low'
  else if (this.currentTemp < 25)
    return 'medium'
  else
    return 'high'
}

