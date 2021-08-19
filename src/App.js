import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarFriends from './components/SidebarFriends/SidebarFriends';

const App = (props) => {
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <Sidebar />
                <SidebarFriends contactsdata={props.state.SidebarPage.ContactsData}/>
                <Content state={props.state} addpost={props.addpost} changearea={props.changearea} />
            </div>
        </div>
    );
}


export default App;
