const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
//mein const User ka matlab collection banana nahi hai. Ye bas banay huay Model ko JavaScript variable mein rakh raha hai, taake baad mein hum aise use kar saken
//Yahan:

// "User" → Model name
// userSchema → us model ka structure/rules
// User → JavaScript variable jisme returned model store hua

// Phir Mongoose model name "User" ko automatically:

// lowercase karta hai
// plural banata hai

// To:

// Model name: User
// Collection name: users

// Is liye collection ka naam humne directly nahi diya, Mongoose ne khud infer kar liya.

// Agar tum collection ka naam khud specify karna chaho to mongoose.model() mein third argument de sakti ho:

// const User = mongoose.model("User", userSchema, "myUsers");

// Ab:

// Model name: User
// Collection name: myUsers
