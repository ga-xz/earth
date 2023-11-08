$ (function(){
var text = document.getElementById('text');
var confirm = document.querySelector('#confirm');

var times = 3;
var mydata = localStorage.getItem("mydata");
if (mydata == null && $('#fulsh').is(':hidden')) {
  setTimeout(function(){
    $('#fulsh').fadeIn();
  },1000)
} else {
  if (mydata == 0) {
     setTimeout(function(){
       $('#fulsh').fadeIn();
     },1000)
  } else {
    var newtime = mydata * 1 - 1;
    localStorage.setItem('mydata', newtime);
  }
  $('#fulsh').hide();
}
confirm.addEventListener('click', function (){
  //var cu = document.querySelector('.cu');
  var pas = '1128ddf6c185cf47c9fb2126eaf630eb';
  if (text.value == ''){
    $('#blpsa').fadeIn(210);
    var wx = new Audio('mp3/wx.mp3');
     wx.play();
     setTimeout(function (){
       $('#blpsa').fadeOut(210);
     },3000);
        
  } else  if (hex_md5(text.value) == pas){
    setTimeout(function (){
      $('#fulsh').fadeOut(210);
    },500);
    localStorage.setItem("mydata", times);
    var din = new Audio('mp3/dind.mp3');
    din.play();
    //alert('hbv')
  } else {
     $('#blps').fadeIn(210);
     var outw = new Audio('mp3/out.mp3');
    outw.play();
  
     setTimeout(function (){
       $('#blps').fadeOut(210);
     },3000);
   }
  });
  // 清除所有的缓存数据
//localStorage.clear();
})
