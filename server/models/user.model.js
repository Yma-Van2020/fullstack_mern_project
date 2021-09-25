const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const{ MoodSchema} = require("./mood.model")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, "First Name is required"],
        minlength:[3, "First Name should be at least three characters long"]
    },
    lastName: {
        type: String,
        required:[true, "Last Name is required"],
        minlength:[2, "Last Name should be at least two characters long"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        validate: {
            validator : val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message : "Email must be a valid pattern"
        }
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    },
    moodScore:[MoodSchema]
}, {timestamps: true})

// CREATE A TEMPORARY FILED IN OUR SCHEMA CALLED repeatPassword
UserSchema.virtual('repeatPassword')
  .get( () => this._repeatPassword )
  .set( value => this._repeatPassword = value );
// WRITE OUT OUR OWN LOGIC FOR TESTING PASSOWRD AGAINST repeatPASSWORD
UserSchema.pre('validate', function(next) {
    if (this.password !== this.repeatPassword) {
        this.invalidate('repeatPassword', 'Password must match repeat password');
    }
   
    next();
});

// USE BCRYPT TO HASH PASSWORD
UserSchema.pre('save', function(next) {
    var user = this;
     // only hash the password if it has been modified 
    if (!user.isModified('password')) return next();
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
  });


const User = mongoose.model("User", UserSchema)
module.exports.User = User
