// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "templates/input", "smog/notify"], function(server, templ, notify) {
    return function(_arg) {
      var name;
      name = _arg.name;
      $('#content').append(templ({
        title: 'Rename',
        button: 'Rename',
        placeholder: 'New name'
      }));
      $('#input-modal').modal();
      $('#input-modal').on('hidden', function() {
        return $('#input-modal').remove();
      });
      return $('#input-button').click(function() {
        return server.collection({
          collection: name,
          type: 'rename',
          query: {
            name: $('#input-text').val()
          }
        }, function(err) {
          if (err != null) {
            return notify.error("Error renaming collection: " + (err.err || err));
          }
          $('#input-modal').modal('hide');
          notify.success("Collection renamed");
          return window.location.hash = '#/home';
        });
      });
    };
  });

}).call(this);
