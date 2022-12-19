let button=document.getElementById("click")
let userdata=[]
let input=document.getElementById("input")
let number=document.getElementById("number")
let email=document.getElementById("email")
let pass=document.getElementById("password")

button.addEventListener("click",()=>{
   let obj={
      Name:input.value,
      Number:number.value,
      Email:email.value,
      Password:pass.value
   }
   userdata.push(obj)
   
   localStorage.setItem("data",JSON.stringify(userdata))
   alert("data has been stored")
   
   window.location.assign("./signin.html")

})