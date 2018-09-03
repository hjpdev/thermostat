function Thermostat(current_temp = 20) {
  this.current_temp = current_temp;
}

Thermostat.prototype.up = function() {
  this.current_temp ++;
}

Thermostat.prototype.down = function() {
  this.current_temp --;
}
