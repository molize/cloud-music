import { Navigate } from 'react-router-dom'
import { routeType } from '../interface/routeType'
import Home from '../view/home'
import VideoMusic from '../view/videoMusic'

const routes:Array<routeType> = [{
    path: '/index',
    element: <Home />
},{
    path: '/videomusic',
    element: <VideoMusic />
},{
    path:'*',
    element:<Navigate to="/index" />
}]
export default routes