import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarFriendsContainer from './components/SidebarFriends/SidebarFriendsContainer';
import Content from './components/Content/Content';

const App = (props) => {
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <Sidebar />
                <SidebarFriendsContainer />
                <Content />
            </div>
        </div>
    );
}


export default App;
