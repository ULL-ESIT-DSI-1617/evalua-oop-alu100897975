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

class TextCell{
  //Constructor de la clase TextCell.
  constructor(text){
    this.text = text.split("\n");
  }

  //Método que devuelve el ancho mínimo de la celda.
  minWidth(){
    //El método reduce aplica una función a un acumulador y a cada uno de los
    //elementos del Array, para reducirlo a un único valor.
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  //Método que devuelve la altura mínima de la celda.
  minHeight(){
    return this.text.length;
  }

  //Método que dibuja las celdas, devolviendo un array de longitud "height", que
  //contiene una serie de strings de las cuales cada una tiene longitud "width".
  //Esto representa el contenido de la celda.
  draw(width, height){
    var result = [0,height].range((i)=>i).map(
      (i) => {
        var line = this.text[i] || "";
        return line + " ".repeat(width - line.length)
      }
    );

    return result;

  }
}
module.exports = TextCell
