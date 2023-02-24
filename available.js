var array=document.getElementsByTagName("li");
function random(){
  var n=Math.random();
  num=n*2;
  result=Math.floor(num);
  return result;
}
function changeingStatus1(change){
  for(i=0;i<array.length;i++){
  b=random();
  if(b==0){
    array[i].innerHTML='chandra';
    array[i].style.color='green';
  }
  else{
    array[i].innerHTML='Ravi';
    array[i].style.color='red';
  }
}
}
changeingStatus1(array);
