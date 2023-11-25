var viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain({
         //AbortControllerrequestWaterMask: true,
         //requestVertexNormals: true
    }),
   
    navigationHelpButton: false, // 隐藏帮助按钮
    fullscreenButton: false, // 隐藏全屏按钮
    homeButton: false, // 隐藏主页按钮
    geocoder: false, // 隐藏地理编码器
    sceneModePicker: false, // 隐藏场景模式选择器
    baseLayerPicker: false, // 隐藏底图选择器
    timeline: false, // 隐藏时间轴
    animation: false, // 隐藏动画控件
    skyAtmosphere: false, //隐藏大气层
    shouldAnimate: true, // 允许动画播放
    infoBox:false, // 禁用信息框
    //useDefaultRenderLoop: false, // 关闭默认渲染循环，以便手动控制加载
    //shouldBatchLoad: true, // 开启批量加载
 });
// 抗锯齿
viewer.scene.postProcessStages.fxaa.enabled = true;
// 优化性能
viewer.resolutionScale = window.devicePixelRatio;
// 水雾特效
viewer.scene.globe.showGroundAtmosphere = false;
// 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
viewer.scene.screenSpaceCameraController.constrainedPitch = Cesium.Math.toRadians(-10);
// 隐藏底部文字和logo
viewer.cesiumWidget.creditContainer.style.display = "none";
// 限制地球放大范围
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100;
// 限制地球缩小范围
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 23500000;
// 移除当前图层
viewer.imageryLayers.removeAll();
// 隐藏默认的太阳渲染
viewer.scene.sun.show = false;
// 隐藏默认的月球渲染
viewer.scene.moon.show = false;
// 隐藏默认的星空渲染
viewer.scene.skyBox.show = false;

// 自定义一个图层
var gog = new Cesium.UrlTemplateImageryProvider({
    //url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,%40781=&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
    url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,m&hl=&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
  });
  //var terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
    //url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
//});
    //viewer.scene.terrainProvider = terrainProvider;


/*var title = new Cesium.UrlTemplateImageryProvider({
    //url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f',
     url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h,m&gl=&x={x}&y={y}&z={z}&src=app&scale=2&from=app',
   
   });
   
   // const title2 = new Cesium.UrlTemplateImageryProvider({
   //   url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f',
   // });*/
   
   
   viewer.camera.flyTo({
     destination: Cesium.Cartesian3.fromDegrees(106.85332775, 25.65553097,18000000)
   });
   //自定义函数名
   viewer.imageryLayers.addImageryProvider(gog);
   //var title = viewer.imageryLayers.addImageryProvider(title);
     
//经纬度
var jing = document.querySelector('.jing');
var wei = document.querySelector('.wei');
viewer.scene.postRender.addEventListener(function() {
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartesian = viewer.camera.positionWC;
    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
    var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(8);
    var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(8);
    jing.innerHTML = '经度: ' + longitudeString;
    wei.innerHTML = '纬度: ' + latitudeString;
});  

//指南针
var compassContainer = document.getElementById('compass');
// 设置初始指南针样式和事件监听器
updateCompass();
compassContainer.addEventListener('click', resetCameraPosition);

viewer.scene.postRender.addEventListener(updateCompass);

function updateCompass() {
    var cameraHeading = viewer.camera.heading;
    compassContainer.style.transform = 'rotate(' + (-cameraHeading) + 'rad)';
}

function resetCameraPosition() {
    var currentHeading = viewer.camera.heading;
      // 添加延时动画效果
  setTimeout(function () {
    viewer.camera.flyTo({
      destination: viewer.camera.position,
    
        orientation: {
            heading: Cesium.Math.toRadians(0), // 旋转回北方
            pitch: viewer.camera.pitch,
            roll: viewer.camera.roll
          },
        duration: 1.5
      });
    }, 200);
}
//定位

navigator.geolocation.getCurrentPosition(
  function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 创建用户位置的实体
    var entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
      billboard: {
        image: 'img/gaxz.jpg', // 添加图片
        scale: 0.02, // 图片大小

      },
      label : {
        showBackground : true,
        font : '14px sans-serif',
        horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(0, -50)  // 文字偏移量
      }
    });

    // 添加动画显示到当前位置
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1000), // 设置飞行的高度
      orientation: {
        heading : Cesium.Math.toRadians(0.0), // 方向
        pitch : Cesium.Math.toRadians(-90.0),   // 俯仰角
        roll : 0.0                             // 翻滚角
      },
      duration: 3 // 飞行持续时间
    });
  },
  function(error) {
    //console.error("Error getting the user's location", error);
  },
  { enableHighAccuracy: true } // 提高精确度
);