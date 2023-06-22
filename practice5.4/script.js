function calculate() {
  // Отримання значень меж зміни значень аргументу x та кроку зміни значень аргументу
  var start_x = parseFloat(document.getElementById("start_x").value);
  var end_x = parseFloat(document.getElementById("end_x").value);
  var step = parseFloat(document.getElementById("step").value);

  var resultContainer = document.getElementById("result");

  // Очищення контейнера результату
  resultContainer.innerHTML = "";

  // Обчислення та виведення результатів для кожного значення x
  for (var x = start_x; x <= end_x; x += step) {
    var result = 0;

    // Виконання розгалуженого обчислювального процесу згідно з наведеними формулами
    if (x < 4) {
      result = Math.abs(Math.sin(x));
    } else if (x === 4) {
      result = Math.sqrt(x) - 1;
    } else {
      result = 1 / Math.log10(x) + 1;
    }

    // Додавання результату до контейнера
    var resultElement = document.createElement("p");
    resultElement.textContent = "h(" + x + ") = " + result.toFixed(2);
    resultContainer.appendChild(resultElement);
  }
}
