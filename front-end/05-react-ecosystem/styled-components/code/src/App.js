import  Header from './components/Header';
import  Layout from './components/Layout';

import { ThemeProvider } from './context/ThemeProvider';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider >
      <GlobalStyle/>
      <Header />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
