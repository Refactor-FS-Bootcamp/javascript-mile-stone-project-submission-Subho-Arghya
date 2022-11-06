//  let date1 = new Date()

//  console.log(date1)

class Note {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.date = this.getCreateDate()
    }
    
    getCreateDate() {
        let date1 = new Date();
        return Number(date1.getDate()) + "/" + Number(date1.getMonth() + 1) + "/" + Number(date1.getFullYear())
    }
}

class Implementation {

    key = "noteslist"

    constructor() {
        this.collection = JSON.parse(localStorage.getItem(this.key)) ?? [];
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    Add(note) {
        let newid = this.maxid(this.collection) + 1
        note.id = newid
        this.collection.push(note)
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    Update(id, model) {
        let index = this.collection.findIndex((ele) => ele.id == id);        
        this.collection[index] = { ...this.collection[index] , ...model};
        //console.log(this.collection[index])
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    Delete(id) {
        let index = this.collection.findIndex((ele) => ele.id == id);
        this.collection.splice(index, 1);
        localStorage.setItem(this.key, JSON.stringify(this.collection))
    }

    maxid(arr) {
        if (arr.length == 0) {
            return 0
        } else {
            let maxid = arr[0].id;
            arr.forEach(element => {
               if(element.id > maxid)  {
                    maxid = element.id 
                }                 
            });
            return maxid
        }
    }    

}

let addbtn = document.getElementById("add_note")
let editbtn = document.getElementById("edit_note")
let title = document.getElementById("title1");
let description = document.getElementById("describe");


    

if (addbtn) {
    addbtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        if ((title.value == "")|| (description.value == "")) {
            alert("Enter the details properly")
        } else {
            let note_imp = new Implementation();
            let new_note = new Note( title.value, description.value)

            note_imp.Add(new_note)

            title.value = ""
            description.value = ""
        }
        
        Display()
    })
}

function Display() {
    let htmlelem = "";
    let notearea = document.querySelector(".noteslist")
    let notes = JSON.parse(localStorage.getItem("noteslist")) ?? [];
    
    

    if (notes.length > 0) {
        notes.forEach(element => {
            htmlelem += `
             <div class="col-md-6 col-sm-12 mb-3">
              <div class="card">
                <div class="card-header">
                  <h3>${element.title}</h3>
                </div>
                <div class="card-body">
                  <p>${element.description}</p>
                  <button onclick="EditNote(${element.id})" class="btn btn-success btn-sm">Edit</button>
                  <button onclick="DeleteNote(${element.id})" class="btn btn-danger btn-sm">Delete</button>
                </div>
                <div class="card-footer">
                  Created On: ${element.date}
                </div>              
              </div>   
             </div>
        `
        })
        notearea.innerHTML = htmlelem
    } else {
        notearea.innerHTML = `<h4 style="text-align: center"> No notes to display yet</h4>`
    }

} 

function DeleteNote(id) {
    let newImp = new Implementation()
    let confirmation = confirm("Are you sure to delete this note?")
    if (confirmation) {
        newImp.Delete(id)
    }
    Display()
}

function EditNote(id) {
    let newImp = new Implementation()
    let [ note_to_edit ] = newImp.collection.filter(x => x.id == id)
    if (title.value != "" || description.value != "") {
        alert("Clear the input fields first")
    } else {
        title.value = note_to_edit.title;
        description.value = note_to_edit.description
        addbtn.style.display = "none"
        editbtn.style.display = "block"
        
        editbtn.addEventListener("click" , e => {
            e.preventDefault()
            const model = { title: title.value, description: description.value }
            newImp.Update(id, model);

            title.value = ""
            description.value = ""
            addbtn.style.display = "block"
            editbtn.style.display = "none"

            Display()
        })
    }
}

Display()