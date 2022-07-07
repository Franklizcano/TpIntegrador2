function generateResume(){
  let categoria = document.getElementById("categoriaMenu").value;
  let cantidad = document.getElementById("quantity").value;
  let totalAPagar = document.getElementById("totalAPagar");
  let valorTicket = 200;
  
  if (cantidad > 0) {
    switch (categoria) {
      case "Estudiante":
        let ticketEstudiante = (valorTicket - (valorTicket * 0.20)) * cantidad;
        totalAPagar.innerText = 'Total a pagar: $ ' + ticketEstudiante;
        break;
      case "Trainee":
        let ticketTrainee = (valorTicket * 0.50) * cantidad;
        totalAPagar.innerText = 'Total a pagar: $ ' + ticketTrainee;
        break;
      case "Junior":
        let ticketJunior = (valorTicket - (valorTicket * 0.15)) * cantidad;
        totalAPagar.innerText = 'Total a pagar: $ ' + ticketJunior;
        break;
    }
  } else {
    totalAPagar.innerText = '¡Recuerda ingresar una cantidad válida! (Solo números)';
  }
}

function resetTotalAPagar(){
  document.getElementById("totalAPagar").innerText = "Total a pagar: $ "
}