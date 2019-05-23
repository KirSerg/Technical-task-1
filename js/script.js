var firstValue = document.querySelector('#first');
var secondValue = document.querySelector('#second');
/*Функция обработки события клик мыши*/
button.onclick = function() {
  if ((isNaN(parseFloat(firstValue.value)) 
       || !isFinite(firstValue.value)) 
	   || (isNaN(parseFloat(secondValue.value)) 
	   || !isFinite(secondValue.value))) {
    alert("Введите корректные данные");
  } else {
	  if ((+firstValue.value === Math.floor(+firstValue.value)) 
	       && (+secondValue.value === Math.floor(+secondValue.value))) {
        document.querySelector("#result").innerHTML = +firstValue.value + +secondValue.value;
	  }	else {
	  	  document.querySelector("#result").innerHTML = (+firstValue.value + +secondValue.value).toFixed(1);
	    }
	}
		
  document.querySelector("#result-form").style.display = 'block';
}

buttonOK.onclick = function() {
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result-form').style.display = 'none';
}