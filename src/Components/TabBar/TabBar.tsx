import { NavLink } from 'react-router-dom'
import './TabBar.scss'
import { tabItem } from '../../interface/interfaceHome'



function TabBar(props:{ tabList:Array<tabItem>,activedPath:string}) {
    return (
        <div className='tab-bar'>
            {props.tabList.map((item:tabItem)=><NavLink 
                key={item.id} 
                to={`/${item.id}`}
                className={`tab-bar-item ${props.activedPath===item.id ? 'active' : undefined}`}
                >
                {item.title}
            </NavLink>)}
        </div>
    )
}

export default TabBar;
