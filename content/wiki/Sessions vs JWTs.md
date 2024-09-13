Both Sessions and JWT can be used for user authorization. Instead of the user needing to login and authenticate at every page, we can use Sessions or JWTs to remember that that user is already authenticated.

With Sessions, the session's data is kept in the database, in the server side, and a encrypted session id is sent to the frontend, where it is kept as a cookie and sent in every request.

With JWTs (JSON Web Tokens), all the user information is stored in the token and can be verified without using a database.

[Stop using JWT for sessions](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/)


#web