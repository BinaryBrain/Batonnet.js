Batonnet = function () {
	console.log("Processing Batonnets")
	let c = '|'
	let batonnets = document.querySelectorAll('.batonnet')
	;[].forEach.call(batonnets, function (batonnet) {
		process(batonnet)
	})

	function process(batonnet) {
		console.log(batonnet)

		let value = parseInt(batonnet.innerText)
		let nbGroup = Math.ceil(value / 5)

		var groupsResult = []

		if (value === 0) {
			batonnet.innerHTML = '&ndash;'
			return
		}

		for (let i = 0; i < nbGroup; i++) {
			// full group
			if (i < nbGroup - 1 || value % 5 === 0) {
				groupsResult.push('<span class="batonnet-group">' + c + c + c + c + '<span class="batonnet-slash">' + c + '</span></span>')
			} else {
				var lastGroup = '' 

				for (let j = 0; j < value % 5; j++) {
					lastGroup += c
				}
				
				groupsResult.push('<span class="batonnet-group">' + lastGroup + '</span>')
			}
		}

		batonnet.innerHTML = groupsResult.join(' ')
	}
}
