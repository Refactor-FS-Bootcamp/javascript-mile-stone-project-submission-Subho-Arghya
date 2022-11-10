export default class Store {
    key = 'reservations';    

    constructor() {
        this.collection = JSON.parse(localStorage.getItem(this.key)) ?? []
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    Add(model) {
        let newId = this.arrayMax(this.collection) + 1;
        model.id = newId
        this.collection.push(model)
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    arrayMax( arr ) {
        if (arr.length == 0) {
            return 0
        } else {
            let maxid = arr[0].id;
            arr.forEach(element => {
                if (element.id > maxid) {
                    maxid = element.id
                }
            });
            return maxid
        }
    }
}