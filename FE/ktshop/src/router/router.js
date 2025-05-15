import HomePage from '../pages/user/HomePage';
import ProFilePage from '../pages/user/Profile';
import {Route,Routes} from 'react-router-dom';
import {ROUTERS} from '../utils/router'
import MasterLayout from '../pages/user/theme/masterLayout';


const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.HOME,
            component : HomePage,
        },
        {
            path: ROUTERS.PROFILE,
            component : ProFilePage,
        }
    ]
    return (
       <MasterLayout>
         <Routes>
            {
                userRouter.map((route , index) => (
                    <Route key={index} path={route.path} Component={route.component}/>
                ))
            }
        </Routes>
       </MasterLayout>
    );
}

const RouterCustome = () => {
    return renderUserRouter() ;
}

export default RouterCustome;