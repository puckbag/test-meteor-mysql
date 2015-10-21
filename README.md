Test Meteor MySQL Integration
=============================

https://github.com/numtel/meteor-mysql

For MySQL Server configuration: https://github.com/numtel/mysql-live-select


Database Setup
--------------

```
$ mysql -u"$USERNAME" -p "$DATABASE" < seed.sql
```

Used to create this setup
-------------------------

```
$ meteor add numtel:mysql
$ meteor remove autopublish
```
