let data=JSON.parse( localStorage.getItem("data"))

let submit=document.getElementById("submit")
let name= document.getElementById("1st")
let email=document.getElementById("2nd")
submit.addEventListener("click",()=>{
    data.forEach((el)=>{
        if(name.value===el.Name&&email.value===el.Email){
            alert("Welcome User")
            window.location.assign("./index.html")
        }
        else{
            alert("Wrong name or email Id")
        }
    })
})
