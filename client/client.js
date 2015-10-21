!function (Session, Template) {

	// 0 is an invalid user id and will force empty results
	var default_user_id = 0;

	// so we can update our subscription
	var userDep = new Tracker.Dependency;

	// setup a dummy subscription
	var MyNotes = new MysqlSubscription('my_notes', default_user_id);

	// current user id state
	Session.setDefault('user_id', default_user_id);

	// template helpers
	Template.hello.helpers({
		users: function () {
			// reactive users subscription
			return Users.reactive();
		},
		my_notes: function () {
			// depend on user dependency
			userDep.depend();

			// reactive my_notes subscription
			return MyNotes.reactive();
		}
	});

	// template events
	Template.hello.events({
		'change select': function (event) {
			// capture select element
			var $select = $(event.currentTarget);

			// establish select value
			var user_id = parseInt($select.val()) || default_user_id;

			// store user id state
			Session.set('user_id', user_id);

			// Update the subscription
			MyNotes = new MysqlSubscription('my_notes', user_id);

			// notify a user dependency change
			userDep.changed();
		}
	});

}(Session, Template);