const controller = require('../controllers/controller')

// const experiment = require('../controllers/postcon') 
// the line above was from when i made a new model for posts and a new controller for posts, needed that to change routes for posts


module.exports = app => {
    // Create
    // a user to create a new post
    app.post('/api/post/', controller.createPost)
    // creating a new user
    app.post('/api/user', controller.createUser)
    // Retrieve
    // i need to be able to get all users???
    app.get('/api/users', controller.getAllUsers)
    // to get all posts for dashboard
    app.get('/api/post', controller.getAllPosts)
    // if a user wants to see one post (where the random action will take place)
    app.get('/api/post', controller.getOnePost)
    // must be able to get one user for login
    app.get('api/user/:username', controller.getAUser)
    // Update
    // we want all users to be able to change a portion of a post, as if a game
    app.put('/api/post/:postid', controller.updatePost)
    // Delete
    // only the user who created this post may delete it
    app.delete('/api/post/:id', controller.deletePost)
}   
