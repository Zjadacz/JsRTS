$(function() {
  var board = new Board('board', 500, 300);
});

function Board(htmlElementId, pixelWidth, pixelHeight) {
	this.self = this;
  
  this.init = function() {
      self.paper = Raphael(htmlElementId, pixelWidth, pixelHeight);
    	self.paper.canvas.style.backgroundColor = '#ffffff';
  };
  
  this.init();
}
