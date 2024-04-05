const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    Username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      virtuals:true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
