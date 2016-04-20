/*
 *处理输入，判断输入是否是数字，
 *如果是则将其变成一个<li>节点
 */
function dealInput(){
  var input = document.querySelector("input").value;
  if(input!=null&&input!=""&&!isNaN(input)){
    var li = document.createElement("li");
    li.innerHTML = input;
    return li;
  }else{
    alert("请输入一个数字");
  }
}
/* 按钮单击处理函数 */
function clickBnt(){
  var ul = document.querySelector("ul");
  var leftIn = document.querySelector(".leftIn");
  var rightIn = document.querySelector(".rightIn");
  var leftOut = document.querySelector(".leftOut");
  var rightOut = document.querySelector(".rightOut");
  //单击左侧入按钮事件
  leftIn.addEventListener("click",function(event){
    if(dealInput())
      ul.insertBefore(dealInput(),ul.firstElementChild);           
  });
  //单击右侧入按钮事件
  rightIn.addEventListener("click",function(event){
    if(dealInput())
      ul.appendChild(dealInput());           
  });
  //单击左侧出按钮事件
  leftOut.addEventListener("click",function(event){
    if(ul.firstElementChild){
      ul.removeChild(ul.firstElementChild); 
    }else{
      alert("已经没有数字啦~")
    }               
  })
  //单击右侧出按钮事件
  rightOut.addEventListener("click",function(event){
    if(ul.lastElementChild){
      ul.removeChild(ul.lastElementChild); 
    }else{
      alert("已经没有数字啦~")
    }               
  })
}
/* 数字列表单击处理函数 */
function clickNum(){
  var ul = document.querySelector("ul");
  ul.addEventListener("click",function(event){
     var event = event || window.event;
     var li = event.target; //使用事件代理获取单击的节点
     ul.removeChild(li);
  })
}
window.onload = function(){
  clickBnt();
  clickNum();
}
