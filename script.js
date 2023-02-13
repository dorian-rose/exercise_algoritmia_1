// 1º Solicite al usuario el ingreso por teclado de 3 notas
//         2º Saque la media de las notas
//         3º Muestre por pantalla
//             si la nota es menor que 5 'SUSPENSO'
//             si la nota es mayor o igual 5 y menor que 7 'APROBADO'
//             si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'

// function entraNotas() {
//   let nota1 = parseFloat(prompt("Ingrese la primera nota (/10"));
//   let nota2 = parseFloat(prompt("Ingrese la segunda nota (/10"));
//   let nota3 = parseFloat(prompt("Ingrese la tercera nota (/10"));
//   let notas = [nota1, nota2, nota3];
//   return notas;
// }

// function media(notas) {
//   notasSuma = 0;
//   for (let i = 0; i < notas.length; i++) {
//     notasSuma += notas[i];
//   }

//   notaMedia = notasSuma / 3;
//   return notaMedia;
// }

// function suspenderAprobar(notaMedia) {
//   console.log(notaMedia);
//   {
//     if (notaMedia < 5) {
//       return "SUSPENSO";
//     } else {
//       if (notaMedia > 6) {
//         ("sobresaliente");
//       } else {
//         return "aprobado";
//       }
//     }
//   }
// }
// let result = suspenderAprobar();

// function displayNotas(result) {
//   alert(result);
// }

function suspenderAprobar(notaMedia) {
  {
    if (notaMedia < 5) {
      alert("SUSPENSO");
    } else {
      if (notaMedia > 6) {
        alert("sobresaliente");
      } else {
        alert("aprobado");
      }
    }
  }
}
let result = suspenderAprobar();

function displayNotas(result) {
  alert(result);
}

function media(notas) {
  notasSuma = 0;
  for (let i = 0; i < notas.length; i++) {
    notasSuma += notas[i];
  }

  notaMedia = notasSuma / 3;
  suspenderAprobar(notaMedia);
}

function entraNotas() {
  let nota1 = parseFloat(prompt("Ingrese la primera nota (/10"));
  let nota2 = parseFloat(prompt("Ingrese la segunda nota (/10"));
  let nota3 = parseFloat(prompt("Ingrese la tercera nota (/10"));
  let notas = [nota1, nota2, nota3];
  media(notas);
}
