var text = document.getElementById("TextNmaae")
var NUM = document.getElementById("num")
var Sumbiit  = document.getElementById("btn")

var parrntELDiv= document.getElementById("total")

var DeleteToal = document.createElement("span")
var dangerli = document.createElement("li")
dangerli.setAttribute("class","fa-solid fa-trash")

DeleteToal.append(dangerli)

 var totalAmount = document.createElement("div")
var TotalDivText = document.createElement("div")


var validProduct = document.getElementById("productvalid")
var validAmount = document.getElementById("AmounError")
var ul = document.getElementById("ul")

var sorBtn = document.getElementById("sort")
var AoMuNt = 0
// totalAmounText = document.createElement("div").append
// totalAmount = document.createElement("div")
// var TotalDiv = document.createElement("div")


Sumbiit.addEventListener("click",()=>{
    if(text.value.trim()=="" && NUM.value.trim()==""){
        validProduct.classList.add("visibleAll")
        validAmount.classList.add("visibleAll")  
    }
    
    else{

        InputAmount =Number (NUM.value)
      var parentLI = document.createElement("li")
      parentLI.setAttribute("class","Chil")
      var pRoductdiv = document.createElement("div")
      var AmounTDive = document.createElement("div")
       pRoductdiv.innerHTML = text.value
        AmounTDive.innerHTML = InputAmount
        var sapan = document.createElement("p")
        sapan.setAttribute("onclick","RemoveEl(this)")
        sapan.setAttribute("class","para")
        delIocon = document.createElement("li")
        delIocon.setAttribute("class","fa-solid fa-trash")
        sapan.append(delIocon)
        parentLI.append(pRoductdiv,AmounTDive,sapan)
        ul.append(parentLI)
        parrntELDiv.append(TotalDivText,totalAmount,DeleteToal)
        calculatION(InputAmount)
        ul.classList.add("liset")
        NUM.value=""
        text.value =""
        }
  
})
sorBtn.addEventListener("click",()=>{

})
function calculatION(ToalAoUnT)
{
    var c = AoMuNt+= ToalAoUnT
    totalAmount.innerHTML = c
    TotalDivText.innerHTML = "Total Amount"
}

function RemoveEl(t)
{
    if(confirm(`Do you want delte product    ${t.previousElementSibling.previousElementSibling.innerHTML}`))
    {
        var d = Number( t.previousElementSibling.innerHTML)
        var f = Number (totalAmount.innerHTML)
        var l = f-d
        totalAmount.innerHTML = l
         t.parentElement.remove()
    }
    else{

        return;
    }
  
}

text.addEventListener("keyup",()=>{

    if(text !==""){
        validProduct.classList.remove("visibleAll")
    }
})
    

NUM.addEventListener("keyup",()=>{

    if(NUM !==""){
        validAmount.classList.remove("visibleAll")  
    }
})
    


