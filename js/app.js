let input=document.getElementById('input');
let btn=document.getElementById('btn');
btn.onclick=function(){
  if (input.value=="") {
    alert("deyer daxil et")
  }
  else{
    let div=document.createElement('div');
    div.className="box";
    let h1=document.createElement('h1');
    let i =document.createElement('i');
    i.className="fa-solid fa-dumpster";
    let value=input.value;
    h1.innerHTML=value;
    document.querySelector('.boxes').appendChild(div);
    div.append(h1,i);
    i.onclick=()=>{
      i.parentElement.remove();
    }
    input.value=""
    }
  }
window.oncontextmenu=function(){
  return false;
}
