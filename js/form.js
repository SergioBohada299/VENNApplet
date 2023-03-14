let btn = document.getElementById("btnNxt");
btn.addEventListener("click", saveInfo);
let guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

/*Casos
Evento M: Familia que sufrira fallas mecanicas
Evento T: Familia que tendra una infraciión por flata de transito
Evento V: Llegara a un lugar de acampar que este lleno

Evento M I T: Que sufra fallas mecanicas y que tenga una infracción - EventMIT
Evento M I V: Que sufra fallas mecanicas y que tenga una infracción. - EventMIV
Evento T I V: Que tenga una infracción y llegue a un lugar de acampar lleno - EventTIV
Evento T I V I M: Que sufra fallas mecanicas, tenga una infracción y llegué a acampar a un lugar lleno - EventMITIV
*/
function between(x, min, max) {
  return x >= min && x <= max;
}
function saveInfo() {
  localStorage.clear();
  let eventMIT = parseInt(document.getElementById("EventMIT").value);
  let eventMIV = parseInt(document.getElementById("EventMIV").value);
  let eventTIV = parseInt(document.getElementById("EventTIV").value);
  let eventMITIV = parseInt(document.getElementById("EventMITIV").value);
  let eventM = parseInt(document.getElementById("EventM").value);
  let eventT = parseInt(document.getElementById("EventT").value);
  let eventV = parseInt(document.getElementById("EventV").value);

  if (
    between(eventM, 8, 12) &&
    between(eventT, 8, 12) &&
    between(eventV, 8, 12) &&
    between(eventMIT, 1, 4) &&
    between(eventMIV, 1, 4) &&
    between(eventTIV, 1, 4) &&
    between(eventMITIV, 1, 4)
  ) {
    guardarLocal("eventM", JSON.stringify(eventM));
    guardarLocal("eventT", JSON.stringify(eventT));
    guardarLocal("eventV", JSON.stringify(eventV));
    guardarLocal("eventMIT", JSON.stringify(eventMIT));
    guardarLocal("eventMIV", JSON.stringify(eventMIV));
    guardarLocal("eventTIV", JSON.stringify(eventTIV));
    guardarLocal("eventMITIV", JSON.stringify(eventMITIV));
    location.replace("./res.html");
  } else {
    alert("Por favor, introducir un rago valido de datos");
  }

  console.log(eventM);
  console.log(eventT);
  console.log(eventV);
  console.log(eventMIT);
  console.log(eventTIV);
  console.log(eventMITIV);
}
