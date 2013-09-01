(function() {
  'use strict';
  window.TicTacr.Models.GameBoard = Backbone.Model.extend({
    mark: function(index, mark) {
      var newBoard = this.clone();
      newBoard.set(index, mark);
      return newBoard;
    },
  });
}())
