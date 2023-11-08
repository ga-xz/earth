var viewer = new Cesium.Viewer('cesiumContainer', {
    //添加地形
    terrain: Cesium.Terrain.fromWorldTerrain({
        // requestWaterMask: true,
        // requestVertexNormals: true
    }),
    navigationHelpButton: false, // 隐藏帮助按钮
    fullscreenButton: false, // 隐藏全屏按钮
    homeButton: false, // 隐藏主页按钮
    geocoder: false, // 隐藏地理编码器
    sceneModePicker: false, // 隐藏场景模式选择器
    baseLayerPicker: false, // 隐藏底图选择器
    timeline: false, // 隐藏时间轴
    animation: false, // 隐藏动画控件
    //skyAtmosphere: false, //隐藏大气层
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
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 25;
// 限制地球缩小范围
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000;
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
    url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,m&gl=&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
  
  });''
  
/*var title = new Cesium.UrlTemplateImageryProvider({
    //url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f',
     url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h,m&gl=&x={x}&y={y}&z={z}&src=app&scale=2&from=app',
   
   });
   
   // const title2 = new Cesium.UrlTemplateImageryProvider({
   //   url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f',
   // });*/
   
   
   viewer.camera.flyTo({
     destination: Cesium.Cartesian3.fromDegrees(106.8599, 25.6488, 16000000)
   });
   // //自定义函数名
   var gog = viewer.imageryLayers.addImageryProvider(gog);
   //var title = viewer.imageryLayers.addImageryProvider(title);