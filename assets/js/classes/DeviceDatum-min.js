class DeviceDatum{constructor(e,t,i){this.deviceDatum=document.createElement("div"),this.deviceDatum.classList.add("device-data__datum"),this.deviceDatumName=document.createElement("h3"),this.deviceDatumName.classList.add("datum-name"),this.deviceDatumName.innerHTML=e,this.deviceDatumInfo=document.createElement("p"),this.deviceDatumInfo.classList.add("datum-info"),this.deviceDatumInfo.innerHTML=t,this.deviceDatumTimestamp=document.createElement("p"),this.deviceDatumTimestamp.classList.add("datum-timestamp"),this.deviceDatumTimestamp.innerHTML="updated "+i,this.deviceDatum.appendChild(this.deviceDatumName),this.deviceDatum.appendChild(this.deviceDatumInfo),this.deviceDatum.appendChild(this.deviceDatumTimestamp)}returnNode(){return this.deviceDatum}}