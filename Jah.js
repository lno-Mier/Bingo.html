function bingo() {
	let names = document.getElementsByTagName('textarea')[0]
	repeat(Math.floor(Math.random * names))
	}
input.onclick = function() {
	body.input = alert(bingo)
	}
