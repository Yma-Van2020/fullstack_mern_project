const moodController = require("../controllers/mood.controller")
const User = require("../controllers/user.controller")
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    //user routes
    app.get("/api/user", authenticate, User.oneUser)
    app.post("/api/user/register", User.register)
    app.post("/api/user/login",User.login)
    app.get("/api/users", authenticate ,User.allUsers)
    app.get("/api/user/logout", User.logout)
    app.put("/api/user/:id", authenticate, User.updateUser)

    //mood routes
    app.post("/api/moods", authenticate,moodController.createMood)
    app.get("/api/moods", moodController.getAll)
    app.get("/api/moods/:mood_id",authenticate, moodController.getOne)
    app.delete("/api/moods/:mood_id",authenticate, moodController.deleteMood)
    app.put("/api/moods/:mood_id", authenticate, moodController.updateMood)
}   