import Reservation from "./reservation.js";
import Store from "/store.js"

let bookbtn = document.getElementById("Book");

let date = document.getElementById("date")
date.min = new Date().toISOString().split("T")[0]

if (bookbtn) {
    bookbtn.addEventListener("click", (e) => {
        e.preventDefault()
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        let date = document.getElementById("date")
        let time = document.getElementById("time")
        let people = document.getElementById("people")
        
        if (name.value == "" || email.value == "" || date.value == "" || time.value == "" || people.value == "") {
            alert("Please fill all the fields")
        }

        let reservation = new Reservation(name.value, email.value, date.value, time.value, people.value);
        let store = new Store()

        //console.log(reservation)
        store.Add(reservation)
        
        name.value = ""
        email.value = ""
        date.value = ""
        time.value = ""
        people.value = ""

    })
}