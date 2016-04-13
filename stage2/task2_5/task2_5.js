/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityInput = document.getElementById('aqi-city-input');
    var valueInput = document.getElementById('aqi-value-input');
    var cityName = cityInput.value.trim();
    var airValue = valueInput.value.trim();//去前后空格

    var notTrueChar = /.*[^a-z A-Z \u4e00-\u9fa5]+.*$/; //出现中英文字符以外的字符
    var isInteger = /^[-]?[0-9]+$/; //为整数
    if(notTrueChar.test(cityName)){
        alert('请输入为中英文字符的城市名');
    }else if(!isInteger.test(airValue)){
        alert('请输入为整数的空气质量指数');
    }else{
      aqiData[cityName] = airValue;
    }       
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {   
  var tableNode = document.getElementById('aqi-table');
  if(Object.getOwnPropertyNames(aqiData).length){ 
    //当aqiData中有数据时执行以下语句
    
    var html = '<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>';//添加表头
    for(cityName in aqiData){       
      html += '<tr><td>' + cityName;
      html += '</td><td>' + aqiData[cityName];
      html += '</td><td><button>删除</button>';
      html += '</td></tr>';
    } 
    tableNode.innerHTML = html;         
  }else{
    tableNode.innerHTML = ''; //当aqiData是空对象时，初始化表格
  }   
  
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
  // do sth.
  var tr = event.target.parentElement.parentElement; //获取单击按钮对应的行
  var cityName = tr.firstElementChild.innerHTML;
  delete aqiData[cityName];
  renderAqiList();
  
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click',addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var tableNode = document.getElementById('aqi-table');
  tableNode.addEventListener('click',delBtnHandle);
}

init();
