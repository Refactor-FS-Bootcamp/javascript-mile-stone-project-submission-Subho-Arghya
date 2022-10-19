import DepartmentImplementation from "../Implementations/DepartmentImplementation.js"
import DepartmentModel from "../Models/DepartmentModel.js"

import { getQueryParams } from "./utility.js"

let depImplement = new DepartmentImplementation();

let submitControl = document.getElementById("depsubmit")

let params = getQueryParams(window.location.href);
let id_value = params['_id'] != "null" ? parseInt(params['_id']) : 0;

submitControl.addEventListener("click", (e) => {
    e.preventDefault();

    let namefield = document.getElementById("depnamefield");
    let name = namefield.value;

    /**
 * For Edit Case
 */
     if (id_value > 0) {
        if (name) {
            let model = {
                id: id_value,
                name: name                
            }
            depImplement.Update(id_value, model);
            alert("Updated !!");
            window.location.replace("../Pages/department.html");
            namefield.value ="";          

        } else {
            alert("Please fill empty fields")
        }

    } else if (id_value == 0) {
        /** For Add Case */
        if (name) {
            let department = new DepartmentModel(name)
            let result = depImplement.Add(department);
            alert("Employee added");
            namefield.value ="";            
        } else {
            alert("Please fill empty fields")
        }
        
    }
})
