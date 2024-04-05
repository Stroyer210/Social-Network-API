const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        require: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => timeSince(date),
      }
    },
    {
      timestamps: true,
      toJSON: {
        getters: true,
      },
    }
  );
  
  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;
  