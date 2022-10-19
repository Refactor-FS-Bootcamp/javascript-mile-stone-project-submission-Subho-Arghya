/**
 * Importing BaseImplementation to extend to Department
 * 
 */

 import BaseImplementation from "./BaseImplementation.js";

 // exporting DepartmentImplementation So that it can be used Everywhere
 export default class DepartmentImplementation extends BaseImplementation{
     constructor(){
         // setting key for Department inside Local Storage
         super("department");
     } 
 }