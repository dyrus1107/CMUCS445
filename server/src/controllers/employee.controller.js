import Employee from "../models/Employee.js";
import { producer } from "../kafka/producer.js";

export const createEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      firstName,
      lastName,
      vacationDays,
      paidToDate,
      paidLastYear,
      payRate,
      payRateId,
    } = req.body;

    // creating a new Employee object
    const employee = new Employee({
      employeeId,
      firstName,
      lastName,
      vacationDays,
      paidToDate,
      paidLastYear,
      payRate,
      payRateId,
    });

    // saving the new employee
    const savedUser = await employee.save();

    return res.status(200).json({
      success: true,
      data: {
        _id: savedUser._id,
        employeeId: savedUser.employeeId,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        vacationDays: savedUser.vacationDays,
        paidToDate: savedUser.paidToDate,
        paidLastYear: savedUser.paidLastYear,
        payRate: savedUser.payRate,
        payRateId: savedUser.payRateId,
      },
    });
  } catch (error) {
    console.error({ success: true, data: error });
  }
};

export const getEmployee = async (req, res, next) => {
  const employee = await Employee.findById(req.params.employeeId);
  return res.json({ success: true, data: employee });
};

export const getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  return res.json({ success: true, data: employees });
};

export const createEmployee1 = async data => {
  const {
    employeeId,
    firstName,
    lastName,
    vacationDays,
    paidToDate,
    paidLastYear,
    payRate,
    payRateId,
  } = data;
  const newEm = new Employee({
    employeeId,
    firstName,
    lastName,
    vacationDays,
    paidToDate,
    paidLastYear,
    payRate,
    payRateId,
  });
  const savedUser = await newEm.save();
};

export const deleteEmployeeById = async _id => {
  const deletdEmployee = await Employee.findOneAndDelete({ _id });
};

export const deleteEmployee = async (req, res) => {
  try {
    await producer.send({
      topic: "test",
      messages: [{ value: "delete a user" }],
    });
    const { employeeId } = req.params;
    const deletedEmployee = await Employee.find({ _id: employeeId });

    if (!deletedEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found." });
    }

    return res.status(200).json({
      success: true,
      data: { deletedEmployee },
    });
  } catch (error) {
    console.error({ success: true, data: error });
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the employee.",
    });
  }
};
