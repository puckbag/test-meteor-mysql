!function (Meteor, process) {

	// Live MySQL Connection
	var mysql = new LiveMysql(Meteor.settings.mysql);

	// Gracefully end MySQL on quit
	var closeAndExit = function() {
		mysql.end();
		process.exit();
	};

	// Close connections on hot code push
	process.on('SIGTERM', closeAndExit);

	// Close connections on exit (ctrl + c)
	process.on('SIGINT', closeAndExit);

	// Publications

	// live mysql publication
	Meteor.publish('users', function () {
		var sql = "SELECT users.* FROM users ORDER BY users.id";
		return mysql.select(sql, [
			{table:'users'}
			]);
	});

	// live mysql publication with argument
	Meteor.publish('my_notes', function (user_id) {
		user_id = parseInt(user_id) || 0;
		var sql = "SELECT notes.* FROM notes"
				+ " WHERE notes.user_id=" + user_id
				+ " ORDER BY notes.id";
		return mysql.select(sql, [
			{table:'notes'}
			]);
	});

}(Meteor, process);
