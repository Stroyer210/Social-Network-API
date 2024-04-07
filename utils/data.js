const usernames = [
    "tiger123",
    "fluffy55",
    "sunny2022",
    "sparkle88",
    "pumpkin42",
    "snowflake7",
    "buttercup99",
    "shadow12",
    "daisygirl",
    "thunderbolt23",
    "rainbow36",
    "whispering99",
    "unicorn77",
    "frosty44",
    "honeybee25",
    "midnight6",
    "luckycharm68",
    "firecracker89",
    "starlight123",
    "bubbles55",
    "mysterycat",
    "sapphire21",
    "peaches789",
    "coolbreeze33",
    "echo11",
    "dreamer456",
    "snugglepup",
    "mysticforest",
    "snickerdoodle",
    "bluemoon2022",
    "stardust99",
    "berryblast7",
    "magicwand",
    "moonlighter",
    "goldenheart",
    "sunshinegirl",
    "wizardry123",
    "sweetdreamer",
    "comet27",
    "jellybean88",
    "enchantedrose",
    "silverstream",
    "cozykitten",
    "emeraldeyes",
    "dreamcatcher",
    "happypaws123",
    "shootingstar",
    "riverdance",
    "tinkerbell567",
    "angelwings"
  ];
  
  const emails = [
    "user123@example.com",
    "john.doe456@gmail.com",
    "testuser789@hotmail.com",
    "jane_smith_99@yahoo.com",
    "randomuser987@aol.com",
    "emailuser123@outlook.com",
    "demo_user456@icloud.com",
    "email_tester789@protonmail.com",
    "example_user@hotmail.com",
    "user1@gmail.com",
    "testuser2@example.com",
    "email123@yahoo.com",
    "user456@aol.com",
    "john.doe789@gmail.com",
    "jane.smith@example.com",
    "randomuser@hotmail.com",
    "test.email@yahoo.com",
    "demo.user@aol.com",
    "example123@gmail.com",
    "user789@example.com",
    "testuser456@gmail.com",
    "email_tester@hotmail.com",
    "example_user@yahoo.com",
    "user456@gmail.com",
    "test.user123@aol.com",
    "email456@example.com",
    "john_doe@gmail.com",
    "jane.smith@yahoo.com",
    "random.user@hotmail.com",
    "test.email@example.com",
    "demo123@aol.com",
    "example_user@gmail.com",
    "user789@yahoo.com",
    "testuser789@hotmail.com",
    "email_tester@example.com",
    "example.user@gmail.com",
    "user789@hotmail.com",
    "test.user456@yahoo.com",
    "email789@example.com",
    "john_doe@yahoo.com",
    "jane_smith@gmail.com",
    "randomuser@hotmail.com",
    "test.email456@yahoo.com",
    "demo.user789@example.com",
    "example123@aol.com",
    "user123@yahoo.com",
    "testuser789@gmail.com",
    "email_tester456@hotmail.com",
    "example.user123@yahoo.com",
    "user456@gmail.com"
  ]

  const thoughts = [
    "Life is a journey, not a destination.",
  "Happiness is found within.",
  "Every moment is a fresh beginning.",
  "Kindness costs nothing.",
  "The only way to do great work is to love what you do.",
  "In the end, we only regret the chances we didn't take.",
  "Believe you can and you're halfway there.",
  "You are capable of more than you know.",
  "Change your thoughts and you change your world.",
  "The best way to predict the future is to create it.",
  "Be the reason someone smiles today.",
  "Embrace the uncertainty.",
  "You are enough.",
  "The journey of a thousand miles begins with one step.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit is your mind.",
  "Challenges are what make life interesting.",
  "The only way to do great work is to love what you do.",
  "Believe in yourself and all that you are.",
  "You never know how strong you are until being strong is your only choice."
  ];
  
  const possibleReactions = [
    "Wow!",
  "That's amazing!",
  "Incredible!",
  "I'm impressed!",
  "Bravo!",
  "Well done!",
  "Fantastic!",
  "Marvelous!",
  "Outstanding!",
  "Superb!",
  "Excellent!",
  "Splendid!",
  "Impressive!",
  "You nailed it!",
  "Great job!"
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;
  
  // Gets a random email
  const getRandomEmail = () =>
    `${getRandomArrItem(emails)}`;

  // Function to generate random thought that we can add to the database. Includes reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomUsername(),
        email: getRandomEmail(),
        reactions: [...getReactions(3)],
      });
    }
    return results;
  };
  
  // Create the reaction that will be added to each thought
  const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomEmail, getRandomUsername, getRandomThoughts, getReactions };
  