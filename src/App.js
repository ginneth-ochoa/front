import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/navbar';
import AppRouter from './components/routers/router';


function App() {
    return ( 
        <div className = "App" >
            <Menu/>
            <AppRouter/> 
        </div >
    );
}

export default App;