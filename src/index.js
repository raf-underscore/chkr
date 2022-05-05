import {ChakraProvider, ColorModeScript, extendTheme} from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const theme = extendTheme({
	config,
})

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
