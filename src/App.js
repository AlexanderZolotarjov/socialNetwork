import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
