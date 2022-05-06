import '../style/tabBar.scss'
import { tabItem } from '../interface/homeType'
import { NavLink } from 'react-router-dom'


function TabBar(props:{ tabList:Array<tabItem>}) {
    return (
        <div className='tab-bar'>
            {props.tabList.map((item:tabItem)=><NavLink 
                to={item.id} 
                key={item.id}
                className={({ isActive }) =>
                isActive ? 'active tab-bar-item ' : 'tab-bar-item '
              }
                >
                {item.title}
            </NavLink>)}
        </div>
    )
}

export default TabBar;