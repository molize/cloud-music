import Routers from './router'
import TabBar from './components/tabBar';
import { tabItem } from './interface/homeType'

function App(props:any) { 
    const tabList: Array<tabItem> = [{
        title: '个性推荐',
        id: 'index',
    }, {
        title: '视频音乐',
        id: 'videomusic',
    }];
   
    return (
        <div className="app">
            <TabBar tabList={tabList} ></TabBar>
            <Routers/>
        </div>
    );
}

export default App;