const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Three-Tier DevOps Backend!");
});

// Get all employees
app.get("/employees", (req, res) => {
    const sql = "SELECT * FROM employees";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});
// Add a new employee
app.post("/employees", (req, res) => {
    const { name, department } = req.body;

    const sql = "INSERT INTO employees (name, department) VALUES (?, ?)";

    db.query(sql, [name, department], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee added successfully!",
            id: result.insertId
        });
    });
});
// Update an employee
app.put("/employees/:id", (req, res) => {
    const { id } = req.params;
    const { name, department } = req.body;

    const sql = "UPDATE employees SET name = ?, department = ? WHERE id = ?";

    db.query(sql, [name, department, id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Employee updated successfully!"
        });
    });
});
// Delete an employee
app.delete("/employees/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found!"
            });
        }

        res.json({
            message: "Employee deleted successfully!"
        });
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
