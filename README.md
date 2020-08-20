Todo
===

### A to-do app, optimized for both mobile and desktop web browsers.

## Technologies:
* Node.js
  * express
  * pug
  * mysql
  * node-env-file
 * mySql
 * css

## Features
- [x] Creae task
- [x] Set task as done

## Screenshot

<img src="https://user-images.githubusercontent.com/61896147/90709602-91dfde80-e26a-11ea-944e-28d9d3587d04.png"/>
<img src="https://user-images.githubusercontent.com/61896147/90709547-74127980-e26a-11ea-82f6-05b2621fe05a.png" height='600px'/>

## Setup:

**Install Dependecies:**
```
npm i mysql express pug node-env-file
```

**Create the table**

```sql
CREATE TABLE 'your table name'(
    id INT(11) NOT NULL AUTO_INCREMENT,
    task VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

```

**Environment Variables required in the .env file **

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_DATABASE`


**Start it up the app:**
```
npm run start
```
