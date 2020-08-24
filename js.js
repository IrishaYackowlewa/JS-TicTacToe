for (let i = 0; i < 9; i++){
	document.getElementById('game').innerHTML+='<div class="block"></div>';
}

let move = 0;

document.getElementById('game').onclick = function(event){
	if(event.target.className == 'block'){
		if (move < 9){
			if (move%2 == 0){
				if (!(event.target.innerHTML == "X" || event.target.innerHTML == "O")){
					event.target.innerHTML = "X";
					move++;
				}
			}
			else {
				if (!(event.target.innerHTML == "X" || event.target.innerHTML == "O")){
					event.target.innerHTML = "O";
					move++;
				}
			}
		checkWinner();
		}			
	}
}

function checkWinner(){
	let allblock = document.getElementsByClassName('block');
	let array = [
	    [allblock[0],allblock[1],allblock[2]],
	    [allblock[3],allblock[4],allblock[5]],
	    [allblock[6],allblock[7],allblock[8]],
	    [allblock[0],allblock[3],allblock[6]],
	    [allblock[1],allblock[4],allblock[7]],
	    [allblock[2],allblock[5],allblock[8]],
	    [allblock[0],allblock[4],allblock[8]],
	    [allblock[2],allblock[4],allblock[6]],
	];
	for (let i=0; i<array.length; i++) {
	        if (array[i][0].innerHTML=='O' && array[i][1].innerHTML=='O' && array[i][2].innerHTML=='O'){
	            alert('Выйграли нолики!');
		    location.reload();
		return;
	        }
	        else if (array[i][0].innerHTML=='X' && array[i][1].innerHTML=='X' && array[i][2].innerHTML=='X'){
	            alert('Выйграли крестики!');
		    location.reload(); return;
	        }
	}
	if (move == 9){
		alert('Ничья!');
		location.reload();
	}
}