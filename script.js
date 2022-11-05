document.getElementById("result").style.display="none";

document.getElementById("compute").onclick = function(){
    
    function calculateSalary(){
        
        var Name = document.getElementById("fullname").value;
        var Income = document.getElementById("daily").value;
        var Daysofwork = document.getElementById("days").value;
        var Totalgroceries = document.getElementById("groceries").value;
        var ExtraExpenses = document.getElementById("extraexpenses").value;
        
        if(Name === ""){
      alert("Error Please input your full name!");
        return;
       }
        
    var totalresult = (Income * Daysofwork);
        totalresult = (totalresult - Totalgroceries - ExtraExpenses);
        totalresult = totalresult.toFixed(2);
        
       document.getElementById("result").style.display="block"
        document.getElementById("total").innerHTML=totalresult;
        
        document.getElementById("user").innerHTML=Name;
        

        
    }
    
    calculateSalary();
};

    
   function fun(){
   document.getElementById("Myform").reset();
 } 

     
     

