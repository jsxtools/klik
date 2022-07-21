export default {
	on(element) {
		element.addEventListener('keydown', this)
		element.addEventListener('keyup', this)
	},
	handleEvent(event) {
		switch (event.key) {
			case event.type === 'keydown' && 'Enter':
				event.target.click()
			case ' ':
				event.preventDefault()
				if (!event.altKey && event.type === 'keyup')
					event.target.click()
		}
	}
}