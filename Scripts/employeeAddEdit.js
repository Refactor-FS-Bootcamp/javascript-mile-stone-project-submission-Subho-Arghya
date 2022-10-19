import EmployeeImplementation from "../Implementations/EmployeeImplementation.js";
import EmployeeModel from "../Models/EmployeeModel.js";
import RequestModel from "../Models/RequestModel.js";
import { getQueryParams } from "./utility.js"

let empImplement = new EmployeeImplementation();
let submitControl = document.getElementById("empsubmit")

let params = getQueryParams(window.location.href);
let id_value = params['_id'] != "null" ? parseInt(params['_id']) : 0;


submitControl.addEventListener("click" , ((e) => {
    /**
     * following the event listener on the submit form and 
     */
    e.preventDefault()

    /**
     * getting the data from the form
     */
    let namefield = document.getElementById("empnamefield");
    let agefield = document.getElementById("empagefield");
    let name = namefield.value;
    let age = agefield.value;

    
/**
 * For Edit Case
 */
    if (id_value > 0) {
        if (name && age) {
            let model = {
                id: id_value,
                name: name,
                age: age
            }
            empImplement.Update(id_value, model);
            alert("Updated !!");
            window.location.replace("../Pages/employees.html")
            namefield.value ="";
            agefield.value ="";

        }else {
            alert("Please fill empty fields")
        }

    } else if (id_value == 0) {
        /** For Add Case */
        if (name && age) {
            let employee = new EmployeeModel(name, age)
            let result = empImplement.Add(employee);
            alert("Employee added");
            namefield.value ="";
            agefield.value ="";
        } else {
            alert("Please fill empty fields")
        }
        
    }
}))



  


