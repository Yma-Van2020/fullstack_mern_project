const {Mood} = require("../models/mood.model")
const {User} = require("../models/user.model")
const jwt = require("jsonwebtoken");

module.exports.createMood = async (req, res) => {
    const {_id} = jwt.decode(req.cookies.usertoken)
    const user = await User.findOne({_id: _id})
    if(!user){
        return res.status(400).json(`user with ID ${_id} does not exist`)
    }
    const newMood = new Mood(req.body)
    user.moodScore.push(newMood)
    user.markModified("moods")
  
    newMood.validate(function(err){
        if(err){
            res.status(400).json(err)
        } else {
            user.save({validateBeforeSave:false}, function(err, saveResults){
                if(!err){
                    res.status(200).json(saveResults)
                } else {
                    res.status(400).json(err)
                }
            })
        }
    })
}


module.exports.deleteMood = async (req, res) => {
    const {_id} = jwt.decode(req.cookies.usertoken)
    const {mood_id} = req.params
   const user = await User.findOne({"_id": _id})
   if(!user){
    return res.status(400).json(`user with ID ${_id} does not exist`)
    }
    console.log(user)
    // delete
    user.moodScore.id(mood_id).remove(function(err){
        if(err){
            return res.status(400).json(err.message)
        }
    })
  
    user.save({validateBeforeSave:false}, function(err, saveResults){
        if(!err){
            res.status(200).json(saveResults)
        } else {
            res.status(400).json(err)
        }
    })
}

module.exports.updateMood = async (req, res) =>{
    const {_id} = jwt.decode(req.cookies.usertoken)
   const{mood_id} = req.params
   const user = await User.findOne({"_id": _id})
   if(!user){
    return res.status(400).json(`user with ID ${_id} does not exist`)
    } 
    console.log(user)
    user.moodScore.id(mood_id).ans1 = req.body.ans1
    user.moodScore.id(mood_id).ans2 = req.body.ans2
    user.moodScore.id(mood_id).ans3 = req.body.ans3
    user.moodScore.id(mood_id).ans4 = req.body.ans4

    const newMood = new Mood(req.body)
    user.markModified("moods")
  
    newMood.validate(function(err){
        if(err){
            res.status(400).json(err)
        } else {
            user.save({validateBeforeSave:false}, function(err, saveResults){
                if(!err){
                    res.status(200).json(saveResults)
                } else {
                    res.status(400).json(err)
                }
            })
        }
    })
}


module.exports.getOne = (req, res) => {
    const {_id} = jwt.decode(req.cookies.usertoken)
    const {mood_id} = req.params
    User.findOne({"_id": _id})
    .then( user => {
        res.json(user.moodScore.id(mood_id))
    })
    .catch(err => 
            res.status(400).json(err))
}

module.exports.getAll = (req, res) => {
    Mood.find()
    .then(mood => {
        // console.log(mood)
        res.json(mood)})
    .catch(err => {
        res.status(400).json(err)})
}

