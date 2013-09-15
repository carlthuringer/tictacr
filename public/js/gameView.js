(function() {
  'use strict';
  window.TicTacr.Views.GameView = Backbone.View.extend({
    events: {
      'click canvas': 'handleCellClicked'
    },

    boardRenderer: function() {
      return window.TicTacr.Lib.BoardRenderer;
    },

    canvas: function() {
      return this.$('canvas');
    },

    initialize: function() {
      var _this = this;
      _.bindAll(this, 'render');
      this.collection.on('add', function() { _this.render(); });
    },

    render: function() {
      this.boardRenderer().render(this.collection, this.canvas());
    },

    handleCellClicked: function(event) {
      var target = event.currentTarget,
      cellIndex = target.dataset.index;

      console.log(event.clientX, event.clientY);
      //this.collection.markCell(cellIndex, 'X');
    }
  });
}())
