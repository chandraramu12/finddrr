var change=document.getElementsByTagName("li")[2];
function random(){
  var n=Math.random();
  num=n*2;
  result=Math.floor(num);
  return result;
}
function changeingStatus1(change){
  b=random();
  if(b==0){
    change.innerHTML='chandra';
  }
  else{
    change.innerHTML='Ravi';
  }
}
changeingStatus1(change);
