let suma = 0;
      const labelSuma = document.getElementById("sumaTotal");

      function manejarClick(idBoton) {
        const boton = document.getElementById(idBoton);

        // Solo si el botón está vacío
        if (boton.textContent === "") {
          const numero = Math.floor(Math.random() * 100) + 1;
          boton.textContent = numero;
          suma += numero;
          labelSuma.textContent = "Suma total: " + suma;
        }
      }

      // Asignación de eventos (simple y clara)
      document.getElementById("btn1").onclick = () => manejarClick("btn1");
      document.getElementById("btn2").onclick = () => manejarClick("btn2");
      document.getElementById("btn3").onclick = () => manejarClick("btn3");
      document.getElementById("btn4").onclick = () => manejarClick("btn4");
      document.getElementById("btn5").onclick = () => manejarClick("btn5");
      document.getElementById("btn6").onclick = () => manejarClick("btn6");
      document.getElementById("btn7").onclick = () => manejarClick("btn7");
      document.getElementById("btn8").onclick = () => manejarClick("btn8");
      document.getElementById("btn9").onclick = () => manejarClick("btn9");