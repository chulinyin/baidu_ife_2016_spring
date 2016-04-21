/*
 *处理输入，判断输入是否是数字，
 *如果是则将其变成一个<li>节点
 */
function dealInput(){
  var input = document.querySelector("input").value;
  if(input!=null&&input!=""&&!isNaN(input)){
    var num = parseFloat(input);
    if(num>=10&&num<=100){
      var li = document.createElement("li");
      li.title = input;
      li.style.height = num + 'px';
      return li; 
    }else{
      alert("请输入一个10-100的数字");
    }   
  }
}
/* 随机产生 */
function randomNum(){
  var ul = document.querySelector("ul");
  ul.innerHTML = '';
  for(var i=0;i<60;i++){
    var value = Math.floor(Math.random()*91+10);
    var child = document.createElement("li");
    child.style.height = value + 'px';
    child.title = value;
    ul.appendChild(child);
  }
}

/* 按钮单击处理函数 */
function clickBtn(){
  var ul = document.querySelector("ul");
  var random = document.querySelector(".random");
  var leftIn = document.querySelector(".leftIn");
  var rightIn = document.querySelector(".rightIn");
  var leftOut = document.querySelector(".leftOut");
  var rightOut = document.querySelector(".rightOut");
  //单击随机产生按钮
  random.addEventListener("click",randomNum); 
  //单击左侧入按钮
  leftIn.addEventListener("click",function(event){
    if(dealInput()){
      if(ul.getElementsByTagName("li").length<=60){
        ul.insertBefore(dealInput(),ul.firstElementChild);     
      }else{
        alert("数量不能超过60个");
      } 
    }                
  });
  //单击右侧入按钮
  rightIn.addEventListener("click",function(event){
    if(dealInput()){
      if(ul.getElementsByTagName("li").length<=60){
        ul.appendChild(dealInput());      
      }else{
        alert("数量不能超过60个");
      } 
    }                 
  });
  //单击左侧出按钮
  leftOut.addEventListener("click",function(event){
    if(ul.firstElementChild){
      ul.removeChild(ul.firstElementChild); 
    }else{
      alert("已经没有数字啦~");
    }               
  })
  //单击右侧出按钮
  rightOut.addEventListener("click",function(event){
    if(ul.lastElementChild){
      ul.removeChild(ul.lastElementChild); 
    }else{
      alert("已经没有数字啦~");
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

/* 可视化选择排序函数 */
function sort(event){
  var items = document.querySelectorAll('li'),
      len = items.length,
      i=0;
  //颜色初始化
  for(var j=0;j<len;j++){
    items[j].style.backgroundColor = "black";
  }

  //用于将两个节点彻底互换
  function change(ele1,ele2){
    var newHeight = ele1.style.height,
        newTitle = ele1.title;
    ele2.style.backgroundColor ="black";  
    ele1.style.height = ele2.style.height;
    ele1.title = ele2.title;
    ele1.style.backgroundColor = "gray";
    ele2.style.height = newHeight;
    ele2.title = newTitle;
  }  
  //为了实现可视化，将选择排序的外部循环改造成了一个函数
  function delaySort(){
    if(i>=len){
      clearInterval(id);
    }
    var min = i;   
    for(var j=i+1;j<len;j++){
      if(parseFloat(items[j].title)<parseFloat(items[min].title)){
        min=j;
      }        
    }
    // items[min].style.backgroundColor = "#FF412E";
    change(items[i],items[min]);
    i++;
  }

  var  id = setInterval(delaySort,50);
}
/* 单击排序按钮 */
function clickSort(){
  var sortBtn = document.querySelector(".sort");
  sortBtn.addEventListener("click",sort);
}
window.onload = function(){
  clickBtn();
  clickNum();
  clickSort();
}
