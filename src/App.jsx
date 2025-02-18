import { ThemeProvider } from 'styled-components';
import { RoutesApp } from './RoutesApp';
import { GlobalStyle } from './globalStyle.styled';
import { useContext } from 'react';
import { GlobalThemeContext } from './context/globalThemeContext';
import { darkTheme, lightTheme } from './themeStyle.styled';

function App() {
	const { globalTheme } = useContext(GlobalThemeContext);
	
	return (
		<ThemeProvider theme={globalTheme === "light" ? lightTheme : darkTheme}>
			<GlobalStyle />
			<RoutesApp />
		</ThemeProvider>
	);
}

export default App