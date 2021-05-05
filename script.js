const data=document.getElementById('uinput')
const ordered= document.getElementById('ol');

const ad= document.getElementById("add");
const input=document.getElementById("uinput")

ad.addEventListener("click",function(){
if(input.style.visibility=='visible')
{
  input.style.visibility="hidden"
}
else{
  input.style.visibility="visible"
}
}
)
data.addEventListener("keyup",function(e){

  if (e.keyCode === 13) {
        const text = data.value;
        data.value="";

      const ol = document.getElementById("thelist");
      const li = document.createElement("li");
      const txtnode=document.createTextNode(text);
      const span=document.createElement("span")

      const button= document.createElement("button")
      button.classList.add("cross")
      const bnode=document.createTextNode("\u00D7")
      button.appendChild(bnode);
      span.appendChild(button);

      li.appendChild(txtnode);
      li.appendChild(span);

      ol.appendChild(li);

       li.addEventListener("click",function(){

           this.classList.toggle("crossoff");


      })

      button.addEventListener("click",function(){

        ol.removeChild(li);


      })



    }



})
