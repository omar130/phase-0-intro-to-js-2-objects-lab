// Write your solution in this file!
const employee = {

  name: 'Sam',
  streetAddress: '11 Broadway'

}

function updateEmployeeWithKeyAndValue(employee, key, value){
 
 const newObj = { ...employee }
 newObj[key] = value;
 
 return newObj;

}

const newEmployee = updateEmployeeWithKeyAndValue(

employee,"name", "Omar"
);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

employee[key] = value;

return employee

}

function deleteFromEmployeeByKey(employee, key){

 const removeObj = { ...employee }
 delete removeObj[key];
 return removeObj;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

 delete employee[key]
 return employee
}