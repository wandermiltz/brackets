module.exports = function check(str, bracketsConfig) {

	console.log(str)
	console.log(bracketsConfig)

	let OPEN_BRACKETS = []
	let BRACKETS_PAIR = {}
	let stack = []

	bracketsConfig.forEach(innerArr => {
		OPEN_BRACKETS.push(innerArr[0])
		BRACKETS_PAIR[innerArr[1]] = innerArr[0]
	})

	for (let i = 0; i < str.length; i++) {

		let currentSymbol = str[i]

		if (BRACKETS_PAIR[currentSymbol] === currentSymbol) {

			let topElement = stack[stack.length - 1]

			if (currentSymbol === topElement) {
				stack.pop()
			} else {
				stack.push(currentSymbol)
			}
		}

		else if (OPEN_BRACKETS.includes(currentSymbol)) {
			stack.push(currentSymbol)

		} else {

			if (stack.length === 0) {
				return false
			}

			let topElement = stack[stack.length - 1]

			if (BRACKETS_PAIR[currentSymbol] === topElement) {
				stack.pop()
			}
		}
	}
	return stack.length === 0
}
