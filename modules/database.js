'use strict';
const mysql = require('mysql2');

const connect = () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  });
  return connection;
};

const checkUsername = () => {
  connection.query(
      'SELECT * FROM users WHERE uUSERNAME = ?', data
  )
};

const checkPassword = () => {
  connection.query(
      'SELECT * FROM users WHERE uPASSWORD = ?', data
  )
};

const select = (connection, callback, res) => {
  // simple query
  connection.query(
      'SELECT * FROM users;',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        console.log(results);
        callback(results, res);
      },
  );
};

const selectAllRecipes = (connection, callback, res) => {
  connection.query(
      'SELECT * FROM recipe;',
      (err, results, fields) => {
        console.log(err);
        console.log(results);
        callback(results, res);
      },
  );
};

const selectRecipe = (connection, data, callback) => {
  connection.execute(
      'SELECT * FROM recipe WHERE rID = ?;',
      data,
      (err, results, fields) => {
        console.log(err);
        console.log(results);
        callback(results);
      },
  );
};

const selectUser = (connection, data, callback) => {
  connection.execute(
      'SELECT * FROM users WHERE uID = ?;',
      data,
      (err, results, fields) => {
        console.log(err);
        console.log(results);
        callback(results);
      },
  );
};

const insert = (data, connection, callback) => {
  // simple query
  connection.execute(
      'INSERT INTO recipe (rUSERID, rNAME, rINGREDIENTS, rPICTURE, rTHUMBNAIL, rMEDIUM , rPREPTIME, rDESCRIPTION, rINSTRUCTIONS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};

const register = (data, connection, callback) => { 
  connection.execute(
    'INSERT INTO users (uUSERNAME, uFNAME, uLNAME, uAVATAR, uDATEJOIINED, uPASSWORD) VALUES (?, ?, ?, ?, ?, ?);',
    data,
    (err, results, fields) => {
      console.log(results);
      callback(results);
    },
  );
};
/*
const update = (data, connection) => {
  return new Promise((resolve, reject) => {
    connection.execute(
        'UPDATE kokit SET category = ?, title = ?, details = ? WHERE mID = ?;', data, (err, results, fields) => {
          if (err) reject(err);
          if (results) resolve(results);
        }
    )
  });
};

const deleteImage = (item, connection) => {
  return new Promise((resolve, reject) => {
    connection.execute(
        'DELETE FROM kokit WHERE mID = ?;' , item, (err, results, fields) => {
          resolve(results);
        }
    )
  })
};

const searchTitle = (title, connection) => {
  return new Promise((resolve, reject) => {
    connection.execute(
        'SELECT * FROM kokit WHERE title = ?;', title, (err, results, fields) => {
          resolve(results);
        },
    )
  })
};
*/

module.exports = {
  connect: connect,
  select: select,
  selectAllRecipes: selectAllRecipes,
  selectRecipe: selectRecipe,
  selectUser: selectUser,
  insert: insert,
  register:register,
  checkUsername: checkUsername,
  checkPassword: checkPassword,
  //update: update,
  //deleteImage: deleteImage,
  //searchTitle: searchTitle,
};
