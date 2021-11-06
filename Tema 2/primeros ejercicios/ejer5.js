var salario,años,salario2;
salario = prompt("¿Cuánto cobras?");
salario2=salario;
años = prompt("¿Cuánto tiempo llevas trabajando aquí?");

salario = parseInt(salario);
años = parseInt(años);

if(salario<500 && años>= 10){salario2=salario*3;}

if(salario<500 && años< 10){salario2=salario*2;}


document.write(`<table border="1">
                    <tr>
                        <th>Entrada</th>
                        <th>Salida</th>
                    </tr>
                    <<tr>
                        <td>${salario} <br> ${años}</td>
                        <td>${salario2}</td>
                    </tr>
                </table>
                `);