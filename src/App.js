import React, { Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/pages/login/Login'
import useToken from './useToken'
import NewCase from './views/forms/newcase/index'
import Admin from './admin/App'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages

const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
//const SympUpdate = React.lazy(() => import('./views/pages/sympupdate/SympUpdate'))

function App(){
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }
  return(
    
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path = "/forms/newcase">
              <NewCase/>
            </Route>
            <Route path = "/forms/sympupdate">
              <NewCase/>
            </Route>
            <Route path = "/forms/resultupdate">
              <NewCase/>
            </Route>
            <Route path = "/admin">
              <Admin/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }




// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <React.Suspense fallback={loading}>
//           <Switch>
//             <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
//             <Route
//               exact
//               path="/register"
//               name="Register Page"
//               render={(props) => <Register {...props} />}
//             />
//             <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
//             <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
//             <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
//             {/* <Route path="/sympupdate" name="Symptoms" render={(props) => <Page404 {...props} />} /> */}
//           </Switch>
//         </React.Suspense>
//       </HashRouter>
//     )
//   }
// }

 export default App
