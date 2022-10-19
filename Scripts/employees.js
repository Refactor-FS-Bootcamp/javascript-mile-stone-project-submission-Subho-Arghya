
// This page will use the Employee Implemetation 'EmployeeImplementation'
// import {BaseModel} from "../Models/BaseModel";

//we are importing with .js coz we need direct reference to the respective clases inside
import EmployeeImplementation from "../Implementations/EmployeeImplementation.js";
import EmployeeModel from "../Models/EmployeeModel.js";
import RequestModel from "../Models/RequestModel.js";
import RequestModelQuery from "../Models/RequestModel.js";


let first = document.getElementById('input_first');
let prev = document.getElementById('input_prev');
let next = document.getElementById('input_next');
let last = document.getElementById('input_last');

let save = document.getElementById('empsubmit');
document.getElementById("addNewEmp").addEventListener("click", AddPage)

let employee_implementation = new EmployeeImplementation();

// //associating the event with the function


// //window.addEventListener('mousemove',test);

// //this will add event to only the 'navigation' div control 
// //document.getElementsByClassName('navigation')[0].addEventListener('mousemove',test);

// /* function test() {
//     console.log('moving the mouse');
// } */


// if (window.location.href.toString().includes('employees_add_edit')) {
//     //TODO: evaluate the query params for edit record

//     save.addEventListener("click", saveRecord);

//     window.onload = onEmployeeAddEditPage;
// }
// else if(window.location.href.toString().includes('employees')) {
//     first.addEventListener("click", moveFirst);
//     prev.addEventListener("click", movePrev);
//     next.addEventListener("click", moveNext);
//     last.addEventListener("click", moveLast);
//     document.getElementById("addNewEmp").addEventListener("click", AddPage)
//     window.onload = onEmployeeListingPage;
// }


// function onEmployeeListingPage() {
//     let table_ref = document.getElementById('tbl_employees');

//     if (table_ref == null) {
//         console.log(' table exists by id --> tbl_employees');
//         return;
//     }

//     //Do load the data from session
//     let employee_implementation = new EmployeeImplementation();
//     let all_data_employees_response_model = employee_implementation.GetPagedRecords(2, 1);

//     //     let table_ref = document.getElementById('tbl_employees');
//     populateTableEmployees(table_ref, all_data_employees_response_model);

//     //TODO: to populate the records inside the Table in TR's also mention 'setAttribute' for the TR for id_value.
//     console.log(all_data_employees_response_model);

// }

// function onEmployeeAddEditPage() {
//     //read from query string and if 'id' is greater than 0 then get the id's record from collection else prepare the page for 
//     //fresh add edit, in either of the case you need to get the collection from the localstorage inorder to find the
//     //max id

//     let array_of_employees = localStorage.getItem('employees') == null ? [] :
//         JSON.parse(localStorage.getItem('employees'));

//     let max_id = employee_implementation.arrayMax(array_of_employees);

//     //getting the query string from the URL
//     let params = getQueryParams(window.location.href);
//     let id_value = params['id'] != null ? parseInt(params['id']) : 0;

//     let employee = new EmployeeModel();
//     employee.id = id_value == 0 ? max_id + 1 : id_value;

//     //populate the 'employee' model using controls

//     //ls if its edit case, else clear the control and make it ready for user to add entries
//     // let divMainControl = document.getElementById('divMainControl');

//     if (id_value > 0) {
//         onEmployeeUpdate(id_value, array_of_employees);
//     }
//     else {
//         onEmployeeAdd();
//     }
//     return null;
// }


// /**
//  * 
//  */


// //for people who do not know 'addEventListener'
// //click on button event and keyup on textbox , do a console log //

// /*
// ()=>{
//     console.log('moves to the first set of records');
// }
// */
// /**
//  * Moves to the first set of records as per the collection
//  */
// function moveFirst() {
//     console.log('moves to the first set of records');

//     let employee = new EmployeeModel();
//     console.log(employee);
// };

// /**
//  * Moves to the first set of records as per the collection
//  */
// function movePrev() {

// };

// /**
//  * Moves to the first set of records as per the collection
//  */
// function moveNext() {

// };

// /**
//  * Moves to the first set of records as per the collection
//  */
// function moveLast() {

// };

// /**
//  * Save the record to the collection and push it back to the localstorage
//  */
// function saveRecord() {
//    // let employee_implementation = new EmployeeImplementation();

//     //check if id is '0' then call 'add' else 'update'
//     let requestModel = new RequestModel();

//     let employee_model = new EmployeeModel();
//     //Read the data from the control and populate the properties of 'EmployeeModel'
//     employee_model.id = document.getElementById('hiddenId') != null ?
//         parseInt(document.getElementById('hiddenId').value) : 0;

//     employee_model.name = document.getElementById('txtName') != null ?
//         document.getElementById('txtName').value : 0;

//     employee_model.Age = document.getElementById('txtAge') != null ?
//         parseInt(document.getElementById('txtAge').value) : 0;

//     requestModel.dataCollection.push(employee_model);

//     if (employee_model.id === 0) {
//     employee_implementation.Add(requestModel);
//     }else {
//         employee_implementation.Update(requestModel)
//     }


//     /**
//      * This will come into effect when the Employee Page is loaded
//      * we need to restore the state it was as before navigation including the page info
//      * this will load the data from local storage
//        and populate inside 'tbl_employees' through multiple methods
//      */
//     // function onEmployeeListingPage() {
//     //     //read from session
//     //     let table_ref = document.getElementById('tbl_employees');
//     //     let array_of_employees = localStorage.getItem('employees') == null ? [] :
//     //         JSON.parse(localStorage.getItem('employees'));

//     //     //This will populate the table
//     //     populateTableEmployees(table_ref, array_of_employees);
//     // }

//     /**
//      * this will load on start of Employee_Add_Edit Page
//      */

// }



// function getQueryParams(url) {
//     const paramArr = url.slice(url.indexOf('?') + 1).split('&');
//     const params = {};
//     paramArr.map(param => {
//         const [key, val] = param.split('=');
//         params[key] = decodeURIComponent(val);
//     })
//     return params;
// }

// //Will find the max value from the id in the objects


// /**
//  * This page will store the current state in session and then navigate to the add_edit page
//  * this page is called on edit & add button click
//  * if id is passed then its edit else add 
//  * example : /employee_add_edit/<id passed> 
//  * window.redirect : <window.host>://employee_add_edit/<id passed>
//  */
// function onNavigateToAdd_Edit(id) {
//     //this will nagivate to [page 'employee_add_edit.html with with wuery string']
// }

// function populateTableEmployees(tableReference, array_of_employees) {

//     //using JS clear the table content
//     //using JS build the tr tags and in loop keep appending the table 

//     //clear the table rows
//     let iCountRow = 0;

//     for (let i = 0; i < array_of_employees.length; i++) {
//         let row = tableReference.insertRow(iCountRow);
//         var cell_name = row.insertCell(0);
//         var cell_age = row.insertCell(1);

//         var cell_id_hidden = row.insertCell(2);

//         cell_name.innerHTML = array_of_employees[i]['name'];
//         cell_age.innerHTML = array_of_employees[i]['age'];

//         cell_id_hidden.innerHTML = array_of_employees[i]['id'];
//         cell_id_hidden.style.display = "none";

//         //add Id in hiddent td

//         //other way is you create a string of '<tr> .....  </tr>' then append this to the table.rows


//         iCountRow++;
//     }

// }

// function onEmployeeAdd() {
//     //read the values from the control 'divControlReference' is the div containing all the 
//     //basic text box/radio/list control that holds the value
//     // we need to read the values from the 'controls' build a new employee object and then call the respective 
//     //method of 'EmployeeImplementation' class instance

//     let employeeImplementation = new EmployeeImplementation();

//     let employee = new EmployeeModel();
//     /*
//     HERE YOU WILL READ FROM CONTROL AND FILL THE VALUES INSIDE Employee Model
//     */
//     let name = document.getElementById("empnamefield").value;
//     let age = document.getElementById("empagefield").value;

    


//     let result = employeeImplementation.Add(employee);


// }


// function onEmployeeUpdate(divControlReference, id, collection) {
//     //read the values from the control 'divControlReference' is the div containing all the 
//     //basic text box/radio/list control that holds the value
//     // we need to read the values from the 'controls' build a new employee object and then call the respective 
//     //method of 'EmployeeImplementation' class instance

//     let employeeImplementation = new EmployeeImplementation();

//     let employee_to_be_updated = new EmployeeModel();
//     /*
//     HERE YOU WILL READ FROM CONTROL AND FILL THE VALUES INSIDE Employee Model
//     */

//     let result = employeeImplementation.Update(id, employee_to_be_updated);


// }


// function onEmployeeDelete(id) {
//     //read the values from the control 'divControlReference' is the div containing all the 
//     //basic text box/radio/list control that holds the value
//     // we need to read the values from the 'controls' build a new employee object and then call the respective 
//     //method of 'EmployeeImplementation' class instance

//     let employeeImplementation = new EmployeeImplementation();


//     /*
//     HERE YOU WILL READ FROM CONTROL AND FILL THE VALUES INSIDE Employee Model
//     */

//     let result = employeeImplementation.Delete(id);


// }


/**
 * Creating event listener to take user from listing to add/edit page
 * Sending the id as null to the url
 */


function AddPage() {
    window.location.replace("employees_add_edit.html" + `?_id=null`);
  }