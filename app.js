let filterInput = document.getElementById("filterInput");
let names = document.getElementById("names");
let li = names.querySelectorAll('li.collection-item');

function filterContacts() {
    let filterValue =  filterInput.value.toUpperCase();
    li.forEach(li => {
        let a = li.getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
}

filterInput.addEventListener("keyup", filterContacts); 