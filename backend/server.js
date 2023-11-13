const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

const { format, parseISO } = require("date-fns");
const moment = require("moment");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
const connection = mysql.createConnection({
  host: "localhost",
  user: "id18768157_sakshi_810",
  password: "Sakshi@123",
  database: "id18768157_fitness",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("https://power-up-fitness.vercel.app/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received username:", username);
  console.log("Received password:", password);

  // Perform a database query to match login details
  const query = "SELECT * FROM fit WHERE email = ? AND password = ?";

  // Using prepared statements to avoid SQL injection
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error executing the query:", error);
      res.status(500).send("Error during login");
      return;
    }

    if (results.length > 0) {
      // Login successful
      res.cookie("username", username, { maxAge: 900000, httpOnly: true });

      res.status(200).send("Login successful");
    } else {
      // Invalid credentials
      res.status(401).send("Invalid username or password");
    }
  });
});

app.post("/addclient", (req, res) => {
  // Initialize an object to store the data from different tables
  const responseData = {};

  // Query to fetch 'email' from the 'fit' table
  connection.query("SELECT email FROM fit", (error, results) => {
    if (error) {
      console.error("Error querying the 'fit' table: " + error);
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      const emails = results.map((result) => result.email);
      // Store the 'email' data in the responseData object
      responseData.emails = emails;

      // Query to fetch data from another table (replace 'your_other_table' with the actual table name)
      connection.query("SELECT * FROM client", (error, otherResults) => {
        if (error) {
          console.error("Error querying the other table: " + error);
          res.status(500).json({ error: "Failed to fetch other data" });
        } else {
          // Store the data from the other table in the responseData object
          responseData.otherData = otherResults;

          // Send the responseData object to the frontend
          res.json(responseData);
        }
      });
    }
  });
});

app.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);
  const formattedTime = format(parseISO(data.time), "HH:mm");
  // Insert data into the database
  const sql =
    "INSERT INTO client (first_name, last_name, Location, Date,time) VALUES (?, ?, ?, ?,?)";
  const values = [
    data.firstName,
    data.lastName,
    data.location,
    data.date,
    formattedTime,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted into the database");
      res.json({ message: "Data received and inserted successfully" });
    }
  });
});
app.delete("/delete/:id", (req, res) => {
  const idToDelete = req.params.id;
  console.log(idToDelete);
  // Delete data from the database based on the ID
  const sql = "DELETE FROM client WHERE id = ?";
  const values = [idToDelete];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error deleting data from the database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Check if any rows were affected
      if (result.affectedRows > 0) {
        console.log("Data deleted from the database");
        res.json({ message: "Data deleted successfully" });
      } else {
        console.log("No data found with the specified ID");
        res.status(404).json({ error: "Data not found" });
      }
    }
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM client WHERE id=?";

  const idToRead = req.params.id;
  console.log(idToRead);

  connection.query(sql, [idToRead], (err, result) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ Message: "Internal Server Error" });
    }

    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { fname, lname, location, date, time1 } = req.body;
  console.log(fname, date, time1);

  const sql =
    "UPDATE client SET first_name=?, last_name=?, Location=?, Date=? ,time=? WHERE id=?";

  connection.query(
    sql,
    [fname, lname, location, date, time1, id],
    (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      return res.json({ message: "Data updated successfully" });
    }
  );
});

app.get("/dates", (req, res) => {
  connection.query(
    "SELECT  first_name, Date ,time FROM client",
    (error, results) => {
      if (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Internal Server Error");
        return;
      }

      const events = results.map((result) => ({
        date: result.Date,
        clientName: result.first_name,
        time: result.time,
      }));
      console.log(events);

      res.json(events);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
