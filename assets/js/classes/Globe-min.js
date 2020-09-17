class Globe{constructor(e){var t=new Sidebar,i=this.initViewer();i.scene.screenSpaceCameraController.minimumZoomDistance=2e6,i.scene.screenSpaceCameraController.maximumZoomDistance=2e7,i.scene.screenSpaceCameraController._minimumZoomRate=300;this.initControls();this.addPoints(i,e),this.clickAction(i,t)}initViewer(){return new Cesium.Viewer("cesiumContainer",{animation:!0,timeline:!1,selectionIndicator:!0})}initControls(){return new Cesium.CesiumWidget("toolbar",{scene3DOnly:!0,requestRenderMode:!0})}addPoints(e,t){var i=document.querySelector(".device-list");if(t.length>1)for(let n=0;n<t.length;n++)this.addPoint(e,t[n],i)}addPoint(e,t,i){var n=this.createListEntry(e,t,i),o=e.entities.add({position:t.position,properties:{name:t.properties.name,coords:t.properties.coords,list_entry:n,data:t.properties.data},billboard:{image:"assets/img/nordic-icon-b.svg"}});n.addEventListener("click",(function(){e.selectedEntity=o}))}createListEntry(e,t,i){let n=document.createElement("li");return n.innerHTML='<a href="#">'+t.properties.name+"</a>",n.addEventListener("click",(function(){})),i.appendChild(n),n}clickAction(e,t){e.selectedEntityChanged.addEventListener((function(){if(console.log(e.entities),Globe.resetIcons(e),void 0!==e.selectedEntity){console.log(e.selectedEntity),Globe.populateSidebar(e.selectedEntity),e.selectedEntity.billboard.image="assets/img/nordic-icon-y.svg";var i=e.selectedEntity._properties._list_entry._value;void 0!==i&&(null!==document.querySelector(".device-list li.active")&&document.querySelector(".device-list li.active").classList.remove("active"),i.classList.add("active")),e.flyTo(e.selectedEntity),t.openSidebar()}else t.closeSidebar()}))}static populateSidebar(e){var t=e._properties,i=document.querySelector(".data-display"),n=i.querySelector(".device-location-name-label"),o=i.querySelector(".coordinates"),r=i.querySelector(".device-data");if(n.innerHTML=t._name,o.innerHTML=t._coords,void 0!==t._data._value){for(;document.querySelector(".device-data").firstChild;)r.removeChild(document.querySelector(".device-data").firstChild);console.log(t._data._value);for(const e in t._data._value){var a=new DeviceDatum(e,t._data._value[e]).returnNode();r.appendChild(a)}}}static resetIcons(e){console.log("resetIcons running");var t=e.entities._entities._array;if(console.log(t),void 0!==e.selectedEntity)for(let e=0;e<t.length;e++)void 0!==t[e]._billboard._image&&(t[e].billboard.image="assets/img/nordic-icon-b.svg")}}