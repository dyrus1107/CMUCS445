export const getData = (data, database = "sql") => {
  const {
    firstName,
    lastName,
    vacationDays,
    paidToDate,
    paidLastYear,
    payRate,
    payRateId,
    Address1,
    City,
    Zip,
    Email,
    Phone_Number,
    Social_Security_Number,
    Drivers_License,
    Marital_Status,
    Shareholder_Status,
    employeeId,
  } = data;
  switch (database) {
    case "sql":
      return {
        ...data,
        Employee_ID: employeeId,
        First_Name: firstName,
        Last_Name: lastName,
      };
    case "mongo":
      return {
        firstName,
        lastName,
        vacationDays,
        paidToDate,
        paidLastYear,
        payRate,
        payRateId,
        employeeId,
      };
    default:
      break;
  }
};
