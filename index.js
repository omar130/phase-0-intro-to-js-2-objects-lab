// Write your solution in this file!
const employee = {name: "Omar", address:"123 Appleseed lane"};

function updateEmployeeWithKeyAndValue(employees,key,value){

  const newEmployee = { ...employees,key,value}
  newEmployee[key] = value;
  return newEmployee
  
 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employees,key,value) {
  
  employees.push[key] = value

  return employee
}


function deleteFromEmployeeByKey(employee, key) {
  
  delete employee[key]
  return employee
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
  
  delete employee[key]
  return employee
}