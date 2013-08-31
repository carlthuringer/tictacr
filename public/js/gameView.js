(function() {
  'use strict';
  window.TicTacr.Views.GameView = Backbone.View.extend({
    events: {
      'click .cell': 'handleCellClicked'
    },

    render: function() {
      this.el.innerHTML = this.renderBoard();
    },

    renderBoard: function() {
      var finalHTML = '';

      for(var i = 0; i < 9; i++) {
        finalHTML += _.template(this.cellTemplate, {index: i});
      }
      return finalHTML;
    },

    cellTemplate: "<div class='cell' data-index='<%= index %>'></div>",

    handleCellClicked: function(event) {

      var target = event.currentTarget,
      cellIndex = target.dataset.index;

      this.model.markCell(cellIndex, 'X');
    }
  });
}())
