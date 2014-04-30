// Project templates

// Chat helpers available as {{ helpername }} in templates
Template.project.helpers({

  listings: function() {
    var project = Project.find({}, { sort: { time: -1 }});

//    console.log(typeof(project));
//    console.log(project.count());
//    console.log(Object.keys(project));

//    var length = project.count();

//    $.each(project, function(index, project){
//      project.x_row = (index % 3) + 1;
//      project.y_col = length / 3;
//      console.log(project === undefined);
//      console.log(length);
//      length--;
//    });
    return project;
  }

});

Template.project.rendered = function(){

  gridster = $(".gridster div").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [140, 140],
    resize: {
      enabled: true
    }
  }).data('gridster');

//    gridster.add_widget('<div style="background-color: red;">');

  var projectz = Project.find({}, {sort: { time: -1}});
  $.each(projectz, function(index, widget){
    if (widget != undefined) {
      console.log(widget);
      gridster.add_widget('<div style="background-color: red;"></div>');
//            console.log((UI.insert(UI.renderWithData(Template.project, widget))));
//        gridster.add_widget(UI.insert(UI.renderWithData(Template.project, widget)), 1, 1);
    }
  });

};

Template.project.events = {
//  ''
  'click .remove': function() {
    Project.remove(this._id);
  },

  'submit #project-form': function (event, template) {
    event.preventDefault();
    var name  = document.getElementById('project-name');

    if (name != '') {
      Project.insert({
        name: name.value,
        owner: Meteor.userId(),
        time: Date.now(),
      });

      name.value = '';
      task.value = '';
    }
  }

};
