function bingo() {
	let names = document.getElementsByTagName('textarea')[0]
	let arr = names.value.split('\n')
	let RandomKey = Math.floor(Math.random()*arr.length)
	return arr[RandomKey]
}
let input = document.getElementsByTagName('input')[0]
input.onclick = function() {
	alert(bingo())
}
