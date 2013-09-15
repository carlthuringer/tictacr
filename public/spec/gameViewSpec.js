(function() {
  'use strict';
  describe('GameView', function() {
    describe('initialization', function() {
      it('binds to the add event on the collection such that an addition to the collection causes a render to happen', function() {
        var collection = new Backbone.Collection,
        view = new window.TicTacr.Views.GameView({collection: collection});

        spyOn(view, 'render');

        collection.trigger('add');

        expect(view.render).toHaveBeenCalled();
      });
    });

    describe('render', function(){
      it('delegates rendering work to a boardRenderer', function(){
        var collection = new Backbone.Collection,
        gameView = $('<div><canvas></div>'),
        canvas = gameView.find('canvas'),
        view = new window.TicTacr.Views.GameView({collection: collection, el: gameView}),
        boardRenderer = jasmine.createSpyObj('boardRenderer', ['render'])

        spyOn(view, 'boardRenderer').andReturn(boardRenderer);

        view.render();
        expect(boardRenderer.render).toHaveBeenCalledWith(collection, canvas);
      })
    });

    describe('handleCanvasClick', function() {
      it('takes an event and returns an object with the index of the board that was clicked', function(){
        var collection = new Backbone.Collection,
        view = new window.TicTacr.Views.GameView({collection: collection, el: gameView}),
        click = {};

      })
    });
  });
}())
