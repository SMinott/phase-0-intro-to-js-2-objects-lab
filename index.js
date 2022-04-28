// Write your solution in this file!

// 1st Code
const employee = {
    name: 'George',
    streetAddress: '123 Sesame Street'
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
};

// 2nd Code
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
};
// //Another option for 2nd code:
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee.key = value;
//     return employee;
// };

//3rd Code
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
 };

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};