//Importamos la clase padre.
var TextCell = require('./textcell.js');

class RTextCell extends TextCell {
  constructor(text){
    super(text);
  }

  draw(width, height){
    var result = [];
    for(let i = 0; i < height; i++){
      var line = this.text[i] || "";
      result.push(" ". repeat(width - line.length) + line);
    }
    return result;
  }
}

module.exports = RTextCell;
