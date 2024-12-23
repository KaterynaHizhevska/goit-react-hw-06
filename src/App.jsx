import AddForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Телефонна книга</h1>
      <AddForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
