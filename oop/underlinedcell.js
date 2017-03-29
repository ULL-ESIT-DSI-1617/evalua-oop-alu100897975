// Utils: Monkey Patching
String.prototype.repeat = function(times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += this;
  return result;
}

Array.prototype.range = function(block) {
  var r = [];
  for(var i = this[0]; i<this[1]; i++) {
    r.push(block(i));
  }
  return r;
}
// End Utils

class UnderlinedCell {
  constructor(inner){
    this.inner = inner;
  }

  minWidth(){
    return this.inner.minWidth();
  }

  minHeight(){
    return this.inner.minHeight() + 1;
  }

  draw(width, height){
    return this.inner.draw(width, height-1)
      .concat(["-".repeat(width)]);
  }
}

module.exports = UnderlinedCell;
