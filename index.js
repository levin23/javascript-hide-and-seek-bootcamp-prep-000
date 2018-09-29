function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var lis=document.querySelectorAll(".ranked-list li")
  for(let i=0; i<lis.length; i++){
<<<<<<< HEAD
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
=======
    lis.innerHTML=parseInt(lis.innerHTML)+n
>>>>>>> 813f6709721166261c6409e326a170b8edc5860d
  }
}

function deepestChild(){
  var lis=document.querySelectorAll("#grand-node div")
  //return lis.length
  for(let i=0; i<lis.length; i++){
    if(lis[i].children.length==0)return lis[i]
  }
}