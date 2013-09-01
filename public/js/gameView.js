(function() {
  'use strict';
  window.TicTacr.Views.GameView = Backbone.View.extend({
    events: {
      'click .cell': 'handleCellClicked'
    },

    initialize: function() {
      _.bindAll(this, 'render');
      this.collection.on('add', this.render);
    },

    render: function() {
      console.log('render');
      this.el.innerHTML = this.renderBoard();
    },

    renderBoard: function() {
      var finalHTML = '';

      for(var i = 0; i < 9; i++) {
        finalHTML += _.template(this.cellTemplate, {
          index: i,
          mark: this.collection.getCurrentMark(i),
        });
      }
      return finalHTML;
    },

    cellTemplate: "<div class='cell' data-index='<%= index %>'><%= mark %></div>",

    handleCellClicked: function(event) {
      var target = event.currentTarget,
      cellIndex = target.dataset.index;

      this.collection.markCell(cellIndex, 'X');
    }
  });
}())
