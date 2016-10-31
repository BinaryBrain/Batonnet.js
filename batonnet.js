Batonnet = function () {
	console.log("Processing Batonnets")
	let c = '|'
	let nBatonnets = 5
	let batonnets = document.querySelectorAll('.batonnet:not(.batonnet-processed)')
	;[].forEach.call(batonnets, function (batonnet) {
		process(batonnet)
	})

	function process(batonnet) {
		let value = parseInt(batonnet.innerText)
		let nbGroup = Math.ceil(value / nBatonnets)

		var groupsResult = []

		if (value === 0) {
			batonnet.innerHTML = '&ndash;'
			batonnet.classList.add('batonnet-processed')
			return
		}

		for (let i = 0; i < nbGroup; i++) {
			if (i < nbGroup - 1 || value % nBatonnets === 0) {
				groupsResult.push('<span class="batonnet-group">' + c + c + c + c + '<span class="batonnet-slash">' + c + '</span></span>')
			} else {
				var lastGroup = '' 

				for (let j = 0; j < value % nBatonnets; j++) {
					lastGroup += c
				}
				
				groupsResult.push('<span class="batonnet-group">' + lastGroup + '</span>')
			}
		}

		batonnet.classList.add('batonnet-processed')
		batonnet.innerHTML = groupsResult.join(' ')
	}
}
