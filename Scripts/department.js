
import DepartmentImplementation from "../Implementations/DepartmentImplementation.js";

let first = document.getElementById('input_first');
let prev = document.getElementById('input_prev');
let next = document.getElementById('input_next');
let last = document.getElementById('input_last');

let save = document.getElementById('depsubmit');
document.getElementById("addNewDep").addEventListener("click", AddPage)

let department_implementation = new DepartmentImplementation();



// function moveFirst(){
    
// }

// /**
//  * Creating event listener to take user from listing to add/edit page
//  * Sending the id as null to the url
//  */
//  document.getElementById("addNewDep").addEventListener("click", AddPage)

//  function AddPage() {
//      window.location.replace("department_add_edit.html" + `?_id=null`);
//    }


function AddPage() {
  window.location.replace("department_add_edit.html" + `?_id=null`);
}