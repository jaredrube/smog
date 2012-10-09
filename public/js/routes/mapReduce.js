// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "smog/util", "smog/notify", "smog/editor", "templates/edit", "templates/collection"], function(server, util, notify, editor, templ, collection) {
    return function(_arg) {
      var edit, name;
      name = _arg.name;
      $('#content').html(templ({
        title: 'Map Reduce',
        id: name,
        button: 'Execute'
      }));
      edit = editor.create("" + name + "-edit-view", {
        mode: "javascript",
        worker: false,
        wrap: 100,
        value: "//This is a simple map/reduce that counts documents by name\n{\n  map: function () {\n    emit(this.name, {count: 1});\n  },\n  reduce: function (key, values) {\n    var result = 0;\n    values.forEach(function (value) {\n      result += value.count;\n    });\n    return {count: result};\n  }\n}"
      });
      return $('#edit-button').click(function() {
        return server.collection({
          collection: name,
          type: 'mapReduce',
          query: edit.getText()
        }, function(err, docs, stat) {
          if (err != null) {
            return notify.error("Error retrieving documents: " + (err.err || err));
          }
          edit.destroy();
          return $('#content').html(collection({
            name: name,
            documents: util.filterDocuments(docs)
          }));
        });
      });
    };
  });

}).call(this);
