// Chat helpers available as {{ helpername }} in templates
Template.tasks.helpers({
  task: function() {
    return Tasks.find({ projectId: this._id }, { sort: { time: -1 }, limit: 14});
  }
});

Template.tasks.rendered = function() {
  $(this.find(".ui.checkbox")).checkbox();
};

// Chat browser events
Template.tasks.events = {

  // Controls red X that deletes tasks
  'click i.remove': function(event) {
    event.preventDefault();
    console.log(this._id);
    Tasks.remove(this._id);  // Why does this function context have this._id
                             // reference tasks._id and the functions above
                             // and below it reference project.task_id ?
  },

  // Add new task to database when user presses enter in task box
  'keydown input#task': function (event) {
    console.log(this._id);
    if(event.which == 13) {

      var task = document.getElementById('task');

      if(task.value != '') {
        Tasks.insert({
          description: task.value,
          projectId: this._id,
          time: Date.now(),
          userId: Meteor.userId()
        });

        document.getElementById('task').value = '';
      }
    }
  }
};