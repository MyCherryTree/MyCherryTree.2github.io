var PARAMS = {
    load_file : () => { document.getElementById('xodr_file_input').click(); },
    resolution : 0.3,
    ref_line : true,
    roadmarks : true,
    wireframe : false,
    spotlight : true,
    fitView : () => { fitViewToObj(refline_lines); },
    lateralProfile : true,
    laneHeight : true,
    reload_map : () => { reloadOdrMap(); },
    view_mode : 'Default',
};

const gui = new dat.GUI();
gui.add(PARAMS, 'load_file').name('📁 打开.xodr');
gui.add(PARAMS, 'resolution', { 低 : 1.0, 中等 : 0.3, 高 : 0.02 }).name('📏  细节级别').onChange((val) => {
    loadOdrMap(true, false);
});
gui.add(PARAMS, 'spotlight').name("🔦 开启聚光灯");
gui.add(PARAMS, 'fitView').name("⟲ 复位摄像机");

var gui_view_folder = gui.addFolder('查看');
gui_view_folder.add(PARAMS, 'view_mode', { '默认' : 'Default', '轮廓' : 'Outlines' }).name("查看模式").onChange((val) => {
    if (val == 'Default') {
        road_network_mesh.visible = true;
        roadmarks_mesh.visible = PARAMS.roadmarks;
    } else if (val == 'Outlines') {
        road_network_mesh.visible = false;
        roadmarks_mesh.visible = false;
    }
});
gui_view_folder.add(PARAMS, 'ref_line').name("参考线").onChange((val) => {
    refline_lines.visible = val;
});
gui_view_folder.add(PARAMS, 'roadmarks').name("路面标线").onChange((val) => {
    roadmarks_mesh.visible = val;
    roadmark_outline_lines.visible = val;
});
gui_view_folder.add(PARAMS, 'wireframe').name("显示线框").onChange((val) => {
    road_network_material.wireframe = val;
});

var gui_attributes_folder = gui.addFolder('加载属性');
gui_attributes_folder.add(PARAMS, 'lateralProfile').name("横向分布");
gui_attributes_folder.add(PARAMS, 'laneHeight').name("车道高度");
gui_attributes_folder.add(PARAMS, 'reload_map').name("重新加载地图");