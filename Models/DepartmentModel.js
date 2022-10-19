import BaseModel from "../Models/BaseModel.js";

/**
 * 'DepartmentModel' is used to create instance for Department save/update and then save them to the 'localStorage'
 */
export default class DepartmentModel extends BaseModel{
    constructor(depname){
        super();
        this.dep_name  = depname;
    }
}