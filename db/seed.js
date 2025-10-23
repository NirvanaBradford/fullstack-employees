import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  await createEmployee({
    name: "Alice Johnson",
    birthday: "1990-02-14",
    salary: 72000,
  });
  await createEmployee({
    name: "Brian Lee",
    birthday: "1985-06-22",
    salary: 68000,
  });
  await createEmployee({
    name: "Carmen Rodriguez",
    birthday: "1992-09-10",
    salary: 75000,
  });
  await createEmployee({
    name: "Derek Smith",
    birthday: "1988-01-05",
    salary: 71000,
  });
  await createEmployee({
    name: "Ella Kim",
    birthday: "1995-03-19",
    salary: 69000,
  });
  await createEmployee({
    name: "Felix Turner",
    birthday: "1989-11-25",
    salary: 73000,
  });
  await createEmployee({
    name: "Grace Liu",
    birthday: "1993-08-08",
    salary: 70000,
  });
  await createEmployee({
    name: "Henry Patel",
    birthday: "1987-12-30",
    salary: 76000,
  });
  await createEmployee({
    name: "Isabella White",
    birthday: "1991-05-12",
    salary: 74000,
  });
  await createEmployee({
    name: "James Brown",
    birthday: "1994-10-02",
    salary: 72000,
  });
}
