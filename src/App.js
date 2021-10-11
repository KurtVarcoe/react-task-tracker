import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header text='Add'/>
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
