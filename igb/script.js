let inp_1 = document.getElementById('inp_1');
let inp_2 = document.getElementById('inp_2');
const e = document.getElementById('cssGen');
const color = document.getElementById('textStyle');

inp_1.addEventListener('input',function(){
   console.log(inp_1.value);
   e.style.background = "linear-gradient(to right, " 
   + inp_1.value 
   + ", " 
   + inp_2.value 
   + ")";

  
   color.innerText = "linear-gradient(to right, " 
   + inp_1.value 
   + ", " 
   + inp_2.value 
   + ")"; 

   
})

inp_2.addEventListener('input',function(){
   console.log(inp_2.value);
   e.style.background = "linear-gradient(to right, " 
   + inp_1.value 
   + ", " 
   + inp_2.value 
   + ")";

   color.innerText = "linear-gradient(to right, " 
   + inp_1.value 
   + ", " 
   + inp_2.value 
   + ")"; 

})