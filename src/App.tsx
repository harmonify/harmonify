import { ReactElement } from 'react';
import { Home } from './pages/Home/Home';
import { ThemeProvider } from './providers/ThemeProvider';

function App() : ReactElement {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
