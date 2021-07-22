
module.exports = {
  
    /**Declaration of databases for my development environment**/
      "development": {
          "databases": {
              "Database1": {
                  "database": process.env.DATABASE1, //you should always save these values in environment variables
                  "username": process.env.USERNAME,  //only for testing purposes you can also define the values here
                  "password":  process.env.PASSWORD,
                  "host": process.env.HOSTNAME,
                  "port": process.env.PORT,
                  "dialect": "mysql"  //here you need to define the dialect of your databse, in my case it is Postgres
              },
              "Database2": {
                  "database": process.env.DATABASE2, 
                  "username": process.env.USERNAME,  
                  "password":  process.env.PASSWORD,
                  "host": process.env.HOSTNAME,
                  "port": process.env.PORT,
                  "dialect": "mysql"  //second database can have a different dialect
              },
          },
      }
  }