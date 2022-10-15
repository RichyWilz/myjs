const saveEL = document.querySelector(".save")
const savetabEl = document.querySelector(".savetab")
const deleteEl = document.querySelector(".white")
const listEl = document.querySelector(".list")
let myLeads = []
const inputEl = document.querySelector(".input")

const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))


// if truthy value(localStorageLeads not null),else js will just skip this if
if (localStorageLeads){
    myLeads = localStorageLeads
    render(myLeads)
}

// unshift()-> add something infront of a list, shift()-> remove something infront of a list
saveEL.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)   
})

function render(leads){
    let listItems = ""
    // listItems += "<li>" + inputEl.value + "</li>"
    for (let i=0; i<leads.length; i++){
        listItems += `<li>
                        <a target='_blank' href=' ${leads[i] }'> ${leads[i]}  </a>
                      </li>`


            // instead of a complex statement like this, you can simplify it using the above ``for containing ur string statement
            // and ${}to include javascript you wanna add in your string statement
        
            // listEl += "<li><a href='" + myLeads[i] + " ' target='_blank'> " + myLeads[i] + "</a></li> "

        //      or you can do this:: for the looping thing
        //     let u = document.createElement("li")
        //     u.textContent = myLeads[i]
        //     listEl.append(u)
    }
    listEl.innerHTML = listItems  
}


// innerHtml,value,addEventListener

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})




savetabEl.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})