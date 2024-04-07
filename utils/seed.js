const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomEmail, getRandomUsername, getRandomThoughts, getReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let reactionCheck = await connection.db.listCollections({ name: 'reactions' }).toArray();
  if (reactionCheck.length) {
    await connection.dropCollection('reactions');
  }

  const users = [];
  const thoughts = getRandomThoughts(10);
  const reactions = getReactions(15);
  

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  await Reaction.collection.insertMany(reactions);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
