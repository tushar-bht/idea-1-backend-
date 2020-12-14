const db = require("../firebase/firebase-db");
const admin = require("firebase-admin");
//...................................................
const getAllUsers = async (req, res, next) => {
  const allUsers = [];
  try {
    const response = await db.collection("users").get();

    if (!response) throw new Error("something went wrong");
    response.forEach((doc) => {
      allUsers.push(doc.data());
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
//...................................................
const createUser = async (req, res, next) => {};

//...................................................

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
