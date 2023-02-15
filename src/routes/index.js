//import NotFound from "../components/Includes/NotFound";

//Components
// import SignIn from '../components/pages/SignIn'
import SignIn from '../components/pages/login/logingid'

const routes = [
    {
        path: "/",
        component: SignIn,
        protectedRoute: false,
    },
    //{
        //component: NotFound, // This should remain last
    //},
]


export default routes;