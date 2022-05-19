let player1 = true
let player2 = false
let choice1 = null
let choice2 = null
let move = document.querySelector('.info')
let c1 = document.querySelector('.choice-player-1')
let c2 = document.querySelector('.choice-player-2')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
function results(){
	if(choice1 == choice2){
		move.innerHTML = 'Ничья!'
	}
	else if(choice1 == 'Камень' && choice2 == 'Ножницы'){
		move.innerHTML = '1 игрок выйграл!'
	}
	else if(choice1 == 'Ножницы' && choice2 == 'Камень'){
		move.innerHTML = '2 игрок выйграл!'
	}
	else if(choice1 == 'Бумага' && choice2 == 'Камень'){
		move.innerHTML = '1 игрок выйграл!'
	}
	else if(choice1 == 'Камень' && choice2 == 'Бумага'){
		move.innerHTML = '2 игрок выйграл!'
	}
	else if(choice1 == 'Ножницы' && choice2 == 'Бумага'){
		move.innerHTML = '1 игрок выйграл!'
	}
	else if(choice1 == 'Бумага' && choice2 == 'Ножницы'){
		move.innerHTML = '2 игрок выйграл!'
	}
}
function res2(){
	move.innerHTML = 'Игрок 2 выбрал: ' + choice2
}
document.addEventListener('keydown', function(arg){
	if(player1 == true && player2 == false){
		if(arg.code == 'KeyA'){
			player1 = false
			player2 = true
			choice1 = 'Камень'
			c1.style.backgroundImage = 'url(yes.png)'
			p1.style.background = 'gray'
			p2.style.background = 'lime'
			move.innerHTML = 'Игрок 2 ходит!'
		}
		else if(arg.code == 'KeyS'){
			player1 = false
			player2 = true
			choice1 = 'Ножницы'
			c1.style.backgroundImage = 'url(yes.png)'
			p1.style.background = 'gray'
			p2.style.background = 'lime'
			move.innerHTML = 'Игрок 2 ходит!'
		}
		else if(arg.code == 'KeyD'){
			player1 = false
			player2 = true
			choice1 = 'Бумага'
			c1.style.backgroundImage = 'url(yes.png)'
			p1.style.background = 'gray'
			p2.style.background = 'lime'
			move.innerHTML = 'Игрок 2 ходит!'
		}
		else{
			alert('Не та кнопка')
		}
	}
	else if(player1 == false && player2 == true){
		if(arg.code == 'KeyJ'){
			player2 = false
			choice2 = 'Камень'
			c2.style.backgroundImage = 'url(yes.png)'
			p2.style.background = 'gray'
		}
		else if(arg.code == 'KeyK'){
			player2 = false
			choice2 = 'Ножницы'
			c2.style.backgroundImage = 'url(yes.png)'
			p2.style.background = 'gray'
		}
		else if(arg.code == 'KeyL'){
			player2 = false
			choice2 = 'Бумага'
			c2.style.backgroundImage = 'url(yes.png)'
			p2.style.background = 'gray'
		}
		else{
			alert('Не та кнопка')
		}
	}
	if(player1 == false && player2 == false){
		move.innerHTML = 'Игрок 1 выбрал: ' + choice1
		setTimeout(res2, 2000)
		setTimeout(results, 4000)
	}
})