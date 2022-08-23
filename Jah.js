function bingo() {
	let names = document.getElementsByTagName('textarea')[0]
	let arr = names.split('textarea')
	for (let names of let arr){
		repeat(Math.floor(Math.random * arr))
	}
	}
	let input = document.getElementsByTagName('input')[0]
input.onclick = function() {
	body.input = alert(bingo)
	}
