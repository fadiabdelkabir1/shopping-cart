var alldeletebutton = document.querySelectorAll("#btns")
var allsections = document.querySelectorAll(".allsections")
var allplusbutton = document.querySelectorAll(".plus-btn")
var allminusbutton = document.querySelectorAll(".minus-btn")
var allquantitybutton = document.querySelectorAll("#quantity")
var alllikebutton = document.querySelectorAll("#btnh")
var allprices=document.querySelectorAll("#price")
var quantitylist=[0]
var somme=[0]
//quantity function 

for( let i=0; i < allplusbutton.length;i++){
    allminusbutton[i].setAttribute("disabled","disabled");
    
    allplusbutton[i].addEventListener("click",function(){
        valuecount=allquantitybutton[i].value;
        valuecount++;
        allquantitybutton[i].value=valuecount;
        if(valuecount>0){
            allminusbutton[i].removeAttribute("disabled");
            allminusbutton[i].classList.remove("disabled")
        }
        totalprice(i,negativelist)
    })
    allminusbutton[i].addEventListener("click",function(){
        valuecount=allquantitybutton[i].value;
        valuecount--;
        allquantitybutton[i].value=valuecount;
        if(valuecount==0){
            allminusbutton[i].setAttribute("disabled","disabled");
        }
        
        totalprice(i,negativelist)
    });
    
    
}

function totalprice(i,negativelist){
    quantitylist[i]=allquantitybutton[i].value
    if (i in quantitylist){
     somme[i]=quantitylist[i]*allprices[i].innerText
        }
    else{
    somme[i]=0
        }
    const sum = somme.reduce((partial_sum, a) => partial_sum + a, 0);
    const sum2 = negativelist.reduce((partial_sum, a) => partial_sum + a, 0);
    document.getElementById("demo").innerText=(sum+sum2).toFixed(2)
}
//like function 
for( let i=0; i < alllikebutton.length;i++){
    alllikebutton[i].addEventListener("click",function(){
        if (alllikebutton[i].style.color =="hotpink") {
            alllikebutton[i].style.color = "grey"
        }
        else{
            alllikebutton[i].style.color = "hotpink"
        }
    })
    }

//delete function 
var negativelist=[0]
for( let i=0; i < alldeletebutton.length;i++){
    alldeletebutton[i].addEventListener("click",function(){
        allsections[i+1].remove();
        negativelist=makeListNegative(somme);
        totalprice(i,negativelist);

    })


}
function makeListNegative(array) {
    return array.map(v => -v);
}