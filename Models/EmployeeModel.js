/**
 * 'EmployeeModel' is used to create instance for Employee save/update and then save them to the 'localStorage'
 */
import BaseModel from "../Models/BaseModel.js";

export default class EmployeeModel extends BaseModel{
    constructor(empname, empage){
        super();
        this.name  = empname;
        this.age = empage;
    }
}


// export class TestModel {
//     constructor(){
//         this.name  = '';
//         this.age = 0;
//     }
// }
