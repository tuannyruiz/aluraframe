var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');

// Ao clicar no botão de enviar dentro do formulário, disparar a função
document.querySelector('.form').addEventListener('submit', function(event){

	// Previne que a página recarregue (comportamento padrão ao submeter algo)
	event.preventDefault();
	// Cria uma linha na tabela
	var tr = document.createElement('tr');

	// Para cada item da array 'campos', disparar a função
	campos.forEach(function(campo){
		// Cria uma célula na tabela
		var td = document.createElement('td');
		// Atribui o valor do input a célula criada
		td.textContent = campo.value;
		// Coloca o td detro do tr
		tr.appendChild(td);
	});

	// Cria mais uma célula na tabela
	var tdVolume = document.createElement('td');
	// Atribui a multiplicação da quantidade com o valor a célula tdVolume
	tdVolume.textContent = campos[1].value * campos [2].value;
	// Coloca a tdVolume dentro do tr
	tr.appendChild(tdVolume);

	// Coloca a linha inteira dentro do tbody
	tbody.appendChild(tr); 


	// 'Limpa' os campos do formulário
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();
});