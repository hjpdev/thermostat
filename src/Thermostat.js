function Thermostat(currentTemp = 20, minimumTemp = 10) {
  this.currentTemp = currentTemp;
  this.minimumTemp = minimumTemp;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  this.currentTemp ++;
}

Thermostat.prototype.down = function() {
  this.currentTemp --;
}

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
}
