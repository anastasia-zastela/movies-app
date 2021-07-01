import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import MoviesScreen from './screens/MoviesScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <MoviesScreen />
        </Container>
      </main>
    </Router>

  );
}

export default App;
