import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SchoolGovernance from './pages/SchoolGovernance';
import Enrollment from './pages/Enrollment';
import StudentsLeadership from './pages/StudentsLeadership';
import SatffDirectory from './pages/StaffDirectory';
import Alumni from './pages/Alumni';
import ContactUs from './pages/ContactUs';

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    } from 'react-router-dom';
  

    const App = () => {
        return (
          <Router>
            <Layout>
           <Switch>
            <div className="mainbody">
            <Route path="/home" exact render={(props)=><Home {...props}/>}/>
            <Route path="/about us" exact render={(props)=><AboutUs {...props}/>}/>       
            <Route path="/school governance" exact render={(props)=><SchoolGovernance {...props}/>}/>  
            <Route path="/enrollment" exact render={(props)=><Enrollment {...props}/>}/>  
            <Route path="/students leadership" exact render={(props)=><StudentsLeadership {...props}/>}/>  
            <Route path="/staff directory" exact render={(props)=><SatffDirectory {...props}/>}/>  
            <Route path="/alumni" exact render={(props)=><Alumni {...props}/>}/> 
            <Route path="/contact us" exact render={(props)=><ContactUs {...props}/>}/>  
            </div>
            </Switch>
            </Layout>
          </Router>
        )
      }
      
      export default App
      