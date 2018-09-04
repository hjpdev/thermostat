function Thermostat(currentTemp = 20, minimumTemp = 10) {
  this.currentTemp = currentTemp;
  this.minimumTemp = minimumTemp;
  this.powerSaving = true;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function() {
  this.currentTemp ++;
}

Thermostat.prototype.down = function() {
  this.currentTemp --;
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
