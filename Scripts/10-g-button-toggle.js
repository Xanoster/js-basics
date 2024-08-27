function select(selector){
const a=document.querySelector(selector);
if(!a.classList.contains('selected')){
unselector();
a.classList.add('selected');
}else{
    a.classList.remove('selected');
}
}
function unselector(){
   const a=document.querySelector('.selected');
   if(a){
    a.classList.remove('selected');
   }
}