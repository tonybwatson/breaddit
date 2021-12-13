import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'

export default function ShareButton() {
const [buttonText, setButtonText] = useState('Share Post')
const changeText = (text) => {
	setButtonText(text)
}
	
	return (
		<Card>
			<Button variant="dark" onClick={() => {
				navigator.clipboard.writeText(window.location.href); 
				changeText('Link Copied!')
				}}
>
				{buttonText}
    		</Button>
		</Card>
	)
}
