'users strict'
let  string="";
let buttons=document.querySelectorAll(".button");

if(string=='')
{
    document.querySelector("#inp").value="0";
}
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>
    {

        if(e.target.innerHTML=='=')
        {
            document.querySelector("#inp").value=eval(string); //eval is an inbuilt function.
            string=document.querySelector("#inp").value;
        }

        else if(e.target.innerHTML=='Del')
        {
        
            document.querySelector("#inp").value=string.slice(0,-1);
            string=string.slice(0,-1);
        }
        else if(e.target.innerHTML=='AC')
        {
            document.querySelector("#inp").value="0";
            string="";
        }
        else if(string==undefined)
        {
            string="This is undefined";
        }
        else{
            if(e.target.innerHTML=='%'){
                document.querySelector('#inp').value=(string/100);
                string=document.querySelector('#inp').value;
                }
                else{
        console.log(e.target);
        string=string + e.target.innerHTML;
       document.querySelector("#inp").value=string;
        }
    }
    })
})
