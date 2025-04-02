const button=document.getElementById("bt");
const fat=document.getElementById("fat");
const thin=document.getElementById("thin");
const normal=document.getElementById("normal");

button.addEventListener("click" ,()=>{
    const name1=document.getElementById("name").value.toUpperCase();
    let height=Number(document.getElementById("ht").value);
    let weight=Number(document.getElementById("wt").value);
    height=height/100;
    let bmi=weight/(height**2);
    if(bmi<18.5){
        document.getElementById("result").innerText=`hey ${name1} , you are underweight`;
        thin.style.visibility="visible";
        thin.style.right="200px";
        normal.style.visibility="hidden";
        fat.style.visibility="hidden";
    }
    else if(bmi>=18.5&&bmi<24.9){
        document.getElementById("result").innerText=`hey ${name1} , you are in normal weight`;
        normal.style.visibility="visible";
        fat.style.visibility="hidden";
        normal.style.right="200px";
        thin.style.visibility="hidden";
    }
    else if(bmi>25){
        document.getElementById("result").innerText=`hey ${name1} , you are overweight`;
        fat.style.visibility="visible";
        thin.style.visibility="hidden";
        fat.style.right="200px";
        normal.style.visibility="hidden";
    }
    

})