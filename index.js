function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var lis=document.querySelectorAll(".ranked-list li")
  for(let i=0; i<lis.length; i++){
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
  }
}

function deepestChild(){
  var lis=document.querySelectorAll("#grand-node div")
  //return lis.length
  for(let i=0; i<lis.length; i++){
    if(lis[i].children.length==0)return lis[i]
  }
}