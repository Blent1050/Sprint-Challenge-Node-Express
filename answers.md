- [ ] Mention two parts of Express that you learned about this week.
      Express is a node framework that provides a myriad of features. One of the essential parts we used this week is routing. Another is using the express.json({}) middleware.
- [ ] Describe Middleware?
      Middleware allows us to add more functionality our back-end api's. For example, the express.json middleware will return a json response. Middleware will get called in the order it is placed within for example, a route. Middleware can also stop a route from sending which is a good practice for authentication.
- [ ] Describe a Resource?
      A resource is what is returned to the client. So if we returned a user with all their data, that would be the resource.
- [ ] What can the API return to help clients know if a request was successful?
      A response of 200 -> which means the request has succeeded. There are also many other 200 HTTP requests that all mean some action was successful.
- [ ] How can we partition our application into sub-applications?
      We can import a route as essentially middleware. Using the server.use('/users') would return all of the route handling and functionality of /users, but that code would be placed in it's own seperate module. Don't forget to use module.exports() !
