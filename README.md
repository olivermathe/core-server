# core-server

This is a basic nodejs server with jwt authentication.

## Dependencies

- [Hapi](https://hapijs.com/)
- [Mongoose](http://mongoosejs.com/).
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [boom](https://github.com/hapijs/boom)
- [glob](https://github.com/isaacs/node-glob)
- [hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2)
- [joi](https://www.npmjs.com/package/joi)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Database

This project use [MongoDb](https://www.mongodb.com/mongodb-3.6) as database, it's necessary to install a localhost mongodb or use a clound mongo database as [mlab](https://mlab.com/). 

## Config File

Change the file [./config/enverioment.config.js](https://github.com/olivermathe/core-server/blob/master/config/enverioment.config.js) with the preferencies of yours project enverioments.

- db.host -> The host of your mongo database.
- db.port -> The port where is runing your database.
- db.user -> The user of your database (can be empty).
- db.pwd -> The password of your user database (can be empty).
- app.port -> The port where your server will start.
- app.pvtKey -> The dir of private JWT RS256 key !!make a new key!!
- app.pubKey -> The dir of public JWT RS256 key !!make a new key!!

[Generate a private and public JWT RS256 key for your project!](https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9)

## Start

- git clone https://github.com/olivermathe/core-server.git
- npm install
- npm start <dev|hml|prd>
