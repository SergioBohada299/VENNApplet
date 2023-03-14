function getLocal(key){

  let local = JSON.parse(localStorage.getItem(key));
  return local;
}

/*Casos
Evento M: Familia que sufrira fallas mecanicas
Evento T: Familia que tendra una infraciión por flata de transito
Evento V: Llegara a un lugar de acampar que este lleno

Evento M I T: Que sufra fallas mecanicas y que tenga una infracción - EventMIT
Evento M I V: Que sufra fallas mecanicas y que tenga una infracción. - EventMIV
Evento T I V: Que tenga una infracción y llegue a un lugar de acampar lleno - EventTIV
Evento T I V I M: Que sufra fallas mecanicas, tenga una infracción y llegué a acampar a un lugar lleno - EventMITIV
*/

anychart.onDocumentReady(function () {

  
  let Mval = parseInt(getLocal('eventM'));
  let Tval = parseInt(getLocal('eventT'));
  let Vval = parseInt(getLocal('eventV'));
  let MITval = parseInt(getLocal('eventMIT'));
  let MIVval = parseInt(getLocal('eventMIV'));
  let TIVval = parseInt(getLocal('eventTIV'));
  let MITIVval = parseInt(getLocal('eventMITIV'));
  console.log(Mval);
  console.log(Tval);
  console.log(Vval);
  console.log(MITval);
  console.log(MIVval);
  console.log(TIVval);
  console.log(MITIVval);

  let divM = document.getElementById('divM');
  let pM = document.createElement('p');
  pM.innerHTML = "&nbsp;"+Mval;
  divM.appendChild(pM);

  let divT = document.getElementById('divT');
  let pT = document.createElement('p');
  pT.innerHTML = "&nbsp;"+Tval;
  divT.appendChild(pT);

  let divV = document.getElementById('divV');
  let pV = document.createElement('p');
  pV.innerHTML = "&nbsp;"+Vval;
  divV.appendChild(pV);

  let divMIT = document.getElementById('divMIT');
  let pMIT = document.createElement('p');
  pMIT.innerHTML = "&nbsp;"+MITval;
  divMIT.appendChild(pMIT);

  let divMIV = document.getElementById('divMIV');
  let pMIV = document.createElement('p');
  pMIV.innerHTML = "&nbsp;"+MIVval;
  divMIV.appendChild(pMIV);

  let divTIV = document.getElementById('divTIV');
  let pTIV = document.createElement('p');
  pTIV.innerHTML = "&nbsp;"+TIVval;
  divTIV.appendChild(pTIV);

  let divMITIV = document.getElementById('divMITIV');
  let pMITIV = document.createElement('p');
  pMITIV.innerHTML = "&nbsp;"+MITIVval;
  divMITIV.appendChild(pMITIV);



  var data = [
    {
      x: "M",
      value: Mval,
      name: "M"
    },
    {
      x: "T",
      value: Tval,
      name: "T"
    },
    {
      x: "V",
      value: Vval,
      name: "V"
    },
    {
      x: ["M", "V"],
      value: MIVval,
      name: "M ∩ V"
    },
    {
      x: ["M", "T"],
      value: MITval,
      name: "M ∩ T"
    },
    {
      x: ["T", "V"],
      value: TIVval,
      name: "T ∩ V"
    },
    {
      x: ["M", "T", "V"],
      value: MITIVval,
      name: "M ∩ T ∩ V"
    }
  ];


  var chart = anychart.venn(data);
  chart.container("container");
  chart.draw();
  chart.title("Diagrama de eventos");
  chart.labels().format("{%Name}");
  chart.background(null);
});
