import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

mongoose.connect("mongodb://127.0.0.1:27017/apicompany", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    vacationDays: {
      type: Number,
      required: true,
    },
    paidToDate: {
      type: Number,
      required: true,
    },
    paidLastYear: {
      type: Number,
      required: true,
    },
    payRate: {
      type: Number,
      required: true,
    },
    payRateId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Employee = mongoose.model("employee", EmployeeSchema);

async function createEmployees(numEmployees) {
  try {
    const employees = [];
    for (let i = 0; i < numEmployees; i++) {
      employees.push({
        employeeId: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        vacationDays: faker.number.int(20), // Vacation days between 0 and 20
        paidToDate: faker.number.int(10000), // Paid to date between 0 and 10000
        paidLastYear: faker.number.int(5000), // Paid last year between 0 and 5000
        payRate: faker.number.int(100), // Pay rate between 0 and 100
        payRateId: faker.number.int(10), // Pay rate ID between 0 and 10
      });
    }

    await Employee.insertMany(employees);
    console.log(`${numEmployees} employee records created successfully!`);
  } catch (error) {
    console.error("Error creating employees:", error);
  } finally {
    await mongoose.disconnect(); // Close the connection after creating data
  }
}

// Create 500 employee records
createEmployees(20);