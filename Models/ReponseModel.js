
import  PageInfo  from "../Models/PageInfo.js";


export default class ResponseModel {

    dataCollection= [];

    pageInfo;

    constructor() {
        this.pageInfo = new PageInfo();
        this.dataCollection = [];
    }
}