function Thermostat(current_temp = 20, minimum_temp = 10) {
  this.current_temp = current_temp;
  this.minimum_temp = minimum_temp;
}

Thermostat.prototype.up = function() {
  this.current_temp ++;
}

Thermostat.prototype.down = function() {
  this.current_temp --;
}
