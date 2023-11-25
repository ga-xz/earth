/*$ (function(){
var text = document.getElementById('text');
var confirm = document.querySelector('#confirm');

var times = null;
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
    $('#fulsh').fadeOut(200);
    localStorage.setItem("mydata", times);
    //alert('hbv')
  } else {
     $('#blps').fadeIn(210);
     var outw = new Audio('mp3/ou.mp3');
    outw.play();
     setTimeout(function (){
       $('#blps').fadeOut(210);
     },3000);
  }

  })
  // 清除所有的缓存数据
//localStorage.clear();
});*/
$(function(){
  //弹窗提示
  $('#full-con').click(function(){
    setTimeout(function(){
      $('#full').fadeOut(400);
    },300);
  });
  // 从上往下加载出来
    //$(".hb").slideDown(1200);
    //显示收款码
    $('#sup-ok').click(function(){
      $('.yard').fadeIn(400);
    });
  //关闭收款码
  $('#shut').click(function(){
    $('.yard').fadeOut(400);
  });
  //红包
  $('#set-hb').click(function(){
    $('#hb-bok').slideDown(300);
  });
  $('#hb-hp').click(function(){
    $('#hb-bok').slideUp(300);
  });
  //微信切换
  $('#set-wx').click(function(){
    $('.s-wx').fadeIn(400);
    $('.s-zfb').fadeOut(400);
    $('.s-qqzf').fadeOut(400);
  });
//支付宝切换
 $('#set-zfb').click(function(){
    $('.s-zfb').fadeIn(400);
    $('.s-wx').fadeOut(400);
    $('.s-qqzf').fadeOut(400);
  });
  //QQ切换
  $('#set-qq').click(function(){
    $('.s-qqzf').fadeIn(400);
    $('.s-zfb').fadeOut(400);
    $('.s-wx').fadeOut(400);
  });
  // 从下往上隐藏
  setTimeout(function (){
    //$(".hb").slideUp(1200);
    //$('.hb').fadeOut(300);
  },2000);
  var seq = document.querySelector('.set-q');
  var i = 0;
  $('#set').click(function (){
    i++;
    var int = document.getElementById('set-int');
    if(i % 2 == 1){
    int.style.transform = 'translateX(-240px)';
  setTimeout( function(){
    seq.src = 'img/Rwi.svg';
   },100);
  } else {
    int.style.transform = 'translateX(240px)';
  setTimeout( function(){
    seq.src = 'img/RLe.svg';
    },150);
  }
 });
 $('#sthu').click(function(){
   var int = document.getElementById('set-int');
   int.style.transform = 'translateX(240px)';
   setTimeout( function(){
     seq.src = 'img/RLe.svg';
   },100);
   i--;
 });
 //测绘法
 var mapin = document.querySelector('#maping');
 var main = document.querySelector('#mapin');
 $(mapin).click(function(){
   main.style.right = '0%';
 });
 var mapou = document.getElementById('mapin-ou');
 $(mapou).click(function(){
   main.style.right = '-95%';
 });
 //个人
 $('#human').click(function (){
   setTimeout(function(){
     $('#full').fadeIn(400);
   },300)
 });
 //版本
 var edion = document.getElementById('edion');
 edion.onclick = function(){
   $('#edito').slideDown(600);
 };
 $('#edi-ou').click(function (){
   $('#edito').slideUp(600);
 });
});