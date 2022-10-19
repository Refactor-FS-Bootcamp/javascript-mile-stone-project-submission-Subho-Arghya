import PageInfo from "../Models/PageInfo.js";
import ResponseModel from "../Models/ReponseModel.js";


export default class BaseImplementation {

    collection = [];
    key_main = '';

    constructor(key) {
        //get it from session
        this.key_main = key;
        let collection_temp = localStorage.getItem(key);
        this.collection = collection_temp != null ? JSON.parse(collection_temp) : [];
        this.collection = this.collection ?? [];
    }

    /**
     * This function will be used to add data to session/local
     * @param {*} model  Model that needs to be added
     */
     Add(model) {
        // finding MaxID From the List
        let maxNum = this.arrayMax(this.collection);
        // setting new Max Id
        let new_id = maxNum + 1;
        model["id"] = new_id;
    
        // using Spread operator to push Data 
        this.collection = [...this.collection, model];
        // there After updating LocalStorage
        this.UpdateStore(this.key_main);
        return true;
      }
      

    Update(id, model) {
    let index;
    // Finding index of data in the collection according to given Id so that we can Update it
    this.collection.forEach((item, ind) => {
      if (item.id == id) {
        index = ind;
        return;
      }
    });
    // Updating Collection 
    this.collection.splice(index, 1, model);
    // after that Updating localStorage 
    this.UpdateStore(this.key_main);
 
    }

    Delete(id) {
    // Deleting Data from the Collection using Filter MEthod
    this.collection = this.collection.filter((item) => item.id != id);
    // Updating LocalStorage
    this.UpdateStore(this.key_main);
    }



    UpdateStore() {
        //let session_storage = 
        localStorage.setItem(this.key_main, JSON.stringify(this.collection) );
    }

    GetPagedRecords(page_size, page_number) {
        //from 'collection' pick only resepctive records as pwe the given page_size and page_number
        let all_records_from_local_storage = localStorage.getItem(this.key_main);

        //deserializing the records 
        let all_records_in_array = (all_records_from_local_storage != null)
            ? JSON.parse(all_records_from_local_storage) :
            [];

        //picking only the pages record as per page 1
        //evaluating first page as per page number
        /*
        records_to_navigate --> 

            case 1: if page size is '2' and page_number is 0 or 1 
                --> It will start from index position '0' till the page Size.
            case 2: if page size is '2' and page_number is 2 
                --> It will start from index position '2' * 2 - 1 = 3 till the page Size.
            casde 3: if page size is '2' and page_number is 3 
                --> It will start from index position '3' * 2  - 1  = 5 till the page Size.
        */
        //validate the page_size and page_number as per the number of records available
        //TODO:

        let records_to_navigate = (page_number > 0 ? 1 : page_number * page_size) - 1;
        let record_to_start = page_number <= 1
            ? 0 :
            (page_number * page_size) - page_size;

        //Validation
        // records_to_navigate = records_to_navigate > all_records_in_array.length ? all_records_in_array.length : records_to_navigate;
        // record_to_start = record_to_start > all_records_in_array.length ? all_records_in_array.length

        let array_to_return = [];

        for (let i = record_to_start; i < records_to_navigate; i++) {
            array_to_return.push(all_records_in_array[i]);
        };

        let responseModel = new ResponseModel();

        responseModel.pageInfo = new PageInfo();
        responseModel.pageInfo.page_number = page_number;
        responseModel.pageInfo.page_size = page_size;
        responseModel.pageInfo.total_records = all_records_in_array.length;
        responseModel.dataCollection = array_to_return;

        return responseModel;


    }


    arrayMax(arr) {
        let max_id = (arr.length === 0) ? 0 : null;

        if (arr.length === 1) {
            max_id = arr[0].id;
        }
        else if (arr.length > 1) {
            let max_id_temp = arr.reduce(function (p, v) {
                return p.id > v.id ? p.id : v.id;
            });

            max_id = max_id_temp;
        }

        return max_id;
    }

    //   arrayMax(arr) {
    //     return arr.reduce((acc, shot) => acc = acc > shot.age ? acc : shot.age, 0);
    //   };
}

