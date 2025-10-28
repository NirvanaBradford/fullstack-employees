import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

const router = express.Router();
export default router;

// TODO: this file!

// === GET / ===
router.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

// === GET /employees ===
router.get("/employees", async (req, res) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// === POST /employees ===
router.post("/employees", async (req, res) => {
  try {
    const { name, birthday, salary } = req.body;

    if (!req.body) {
      return res.status(400).json({ error: "Request body is reqired" });
    }

    if (!name || !birthday || !salary) {
      return res.status(400).json({
        error:
          "Missing required fields: name, birthday, and salary are required",
      });
    }

    const newEmployee = await createEmployee({ name, birthday, salary });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(400).json({ error: "Internal server error" });
  }
});

// === GET /employees/:id ===
router.get("/employees/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id >= 0) {
      return res
        .status(400)
        .json({ error: "Employee ID must be a positive interger" });
    }

    const employee = await getEmployee(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// === DELETE /employees/:id ===
router.delete("/employees/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res
        .status(400)
        .json({ error: "Employee ID must be a positive interger" });
    }

    const deleted = await deleteEmployee(id);
    if (!deleted) {
      return res.status(404).json({ error: "Employee not found" });
    }

    // 204 = No Content
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Interal server error" });
  }
});

// === PUT /employees/:id ===
router.put("/employees/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, birthday, salary } = req.body;

    if (!req.body) {
      return res.status(400).json({ error: "Request body is reqired" });
    }

    if (!name || !birthday || !salary) {
      return res.status(400).json({
        error:
          "Missing required fields: name, birthday, and salary are required",
      });
    }

    if (!Number.isInteger(id) || id <= 0) {
      return res
        .status(400)
        .json({ error: "Employee ID must be a positive interger" });
    }

    const updated = await updateEmployee({ id, name, birthday, salary });
    if (!updated) {
      return res.status(404).json({ error: "Employee not fouund" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal error" });
  }
});
