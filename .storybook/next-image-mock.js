import React from 'react'

const Image = React.forwardRef(function Image({ src, alt, width, height, className }, ref) {
	return React.createElement('img', { src, alt, width, height, className, ref })
})

export default Image
