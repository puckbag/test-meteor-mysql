Test Meteor MySQL Integration
=============================

For testing Numtel's meteor:mysql package.

[https://github.com/numtel/meteor-mysql](https://github.com/numtel/meteor-mysql)


Database Setup
--------------

### Seed a database…

```
$ mysql -u"$USERNAME" -p "$DATABASE" < seed.sql
```

### Configure MySQL for binlog…

From [https://github.com/numtel/mysql-live-select](https://github.com/numtel/mysql-live-select)

Enable MySQL binlog in my.cnf, restart MySQL server after making the changes.

```
# binlog config
server-id        = 1
binlog_format    = row
log_bin          = /var/log/mysql/mysql-bin.log
binlog_do_db     = employees   # optional
expire_logs_days = 10          # optional
max_binlog_size  = 100M        # optional
```

Create an account with replication privileges:

```sql
GRANT REPLICATION SLAVE, REPLICATION CLIENT, SELECT ON *.* TO 'user'@'localhost'
```


Used to create this setup
-------------------------

```
$ meteor add numtel:mysql
$ meteor remove autopublish
```
