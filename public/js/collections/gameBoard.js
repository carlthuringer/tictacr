(function(){
  'use strict';
  window.TicTacr.Collections.GameBoard = Backbone.Collection.extend({
    initialize: function() {
      this.currentBoard = this.newBoard();
      this.add(this.currentBoard);
    },

    markCell: function(index, mark) {
      this.currentBoard = this.currentBoard.mark(index, mark);
      this.add(this.currentBoard);
    },

    getCurrentMark: function(index) {
      return this.currentBoard.get(index);
    },

    newBoard: function() {
      var newBoard = new window.TicTacr.Models.GameBoard;
      for(var i = 0; i < 9; i++) {
        newBoard.set(i, '');
      }
      return newBoard;
    },
  });
}())
