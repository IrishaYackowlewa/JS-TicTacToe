for (var i = 0; i < 9; i++){
	document.getElementById('game').innerHTML+='<div class="block"></div>';
}

var hod = 0;

document.getElementById('game').onclick = function(event){
	if(event.target.className == 'block'){
		if (hod < 9){
			if (hod%2 == 0){
				if (!(event.target.innerHTML == "X" || event.target.innerHTML == "O")){
					event.target.innerHTML = "X";
					hod++;
				}
			}
			else {
				if (!(event.target.innerHTML == "X" || event.target.innerHTML == "O")){
					event.target.innerHTML = "O";
					hod++;
				}
			}
		checkWinner();
		}			
	}
}

function checkWinner(){
	var allblock = document.getElementsByClassName('block');
	var mas = [
	    [allblock[0],allblock[1],allblock[2]],
	    [allblock[3],allblock[4],allblock[5]],
	    [allblock[6],allblock[7],allblock[8]],
	    [allblock[0],allblock[3],allblock[6]],
	    [allblock[1],allblock[4],allblock[7]],
	    [allblock[2],allblock[5],allblock[8]],
	    [allblock[0],allblock[4],allblock[8]],
	    [allblock[2],allblock[4],allblock[6]],
	];
	for (var i=0; i<mas.length; i++) {
	        if (mas[i][0].innerHTML=='O' && mas[i][1].innerHTML=='O' && mas[i][2].innerHTML=='O'){
	            alert('Выйграли нолики!');
		    location.reload();
		return;
	        }
	        else if (mas[i][0].innerHTML=='X' && mas[i][1].innerHTML=='X' &&mas[i][2].innerHTML=='X'){
	            alert('Выйграли крестики!');
		    location.reload(); return;
	        }
	}
	if (hod == 9){
		alert('Ничья!');
		location.reload();
	}
}