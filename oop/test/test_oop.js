var dt = require("../drawtable.js");
var drawIt = dt.drawIt;
var TextCell = require('../textcell.js');
var UnderlinedCell = require('../underlinedcell.js');

//Fichero de pruebas para las clases TextCell, RTextCell, etc.
var text1 = new TextCell("hola");
var prueba1 = text1.minHeight();
describe("TextCell", function(){
  it("La altura mínima de la celda es 1", function(){
    prueba1.should.equal(1);
  })
});

var text2 = new UnderlinedCell(text1);
var prueba2 = text2.minHeight();
describe("UnderlinedCell", function(){
  it("La altura mínima de la celda subrayada es 2", function(){
    prueba2.should.equal(2);
  });
});

var MOUNTAINS = [
  {name: "Kilimanjaro\nMontaña mágica", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal\nPaís lejano"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var expected =
`name           height country
-------------- ------ -------------
Kilimanjaro      5895 Tanzania
Montaña mágica
Everest          8848 Nepal
                      País lejano
Mount Fuji       3776 Japan
Mont Blanc       4808 Italy/France
Vaalserberg       323 Netherlands
Denali           6168 United States
Popocatepetl     5465 Mexico       `;

var col1w = 14, col2w = 6, col3w = 11;
describe("drawIt", function() {
  it("Se dibuja la tabla correctamente", function() {
    var result = drawIt(MOUNTAINS);
    /* There is a white space between consecutive columns */
    result.should.match(/^(.{14}\s.{6}\s.{13}\s*){11}$/);
    result.should.match(/Montaña mágica\s{20}/);
  })
});
