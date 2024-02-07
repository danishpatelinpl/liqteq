import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound'
import Home from '../views/Home';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import ForgotPassword from '../views/Auth/ForgotPassword';
import Verification from '../views/Auth/Verification';
import NewPassword from '../views/Auth/NewPassword';
import Vender from '../views/Vender/Vender';
import AddVender from '../views/Vender/AddVender';
import Services from '../views/Service/Services';
import AddServices from '../views/Service/AddServices';
import Employes from '../views/Employess/Employes';
import AddEmployes from '../views/Employess/AddEmployes';
import EmployesDetail from '../views/Employess/EmployesDetail';
import Coupons from '../views/Coupons/Coupons';
import Addcoupons from '../views/Coupons/Addcoupons';
import HomeDashboard from '../views/Dashboard/HomeDashboard.js';

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                {/* <Header /> */}
                <RouteSwitch>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/dashboard" element={<HomeDashboard/>}></Route>
                    <Route exact path="/register" element={<Register />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/forgotpasssword" element={<ForgotPassword />}></Route>
                    <Route exact path="/verification" element={<Verification />}></Route> 
                    <Route exact path="/newpassword" element={<NewPassword />}></Route>
                    <Route exact path="/vender" element={<Vender />}></Route>
                    <Route exact path="/addvender" element={<AddVender />}></Route>
                    <Route exact path="/services" element={<Services />}></Route>
                    <Route exact path="/addservices" element={<AddServices />}></Route>
                    <Route exact path="/employes" element={<Employes />}></Route>
                    <Route exact path="/addemployes" element={<AddEmployes />}></Route>
                    <Route exact path="/employedetail" element={<EmployesDetail />}></Route>
                    <Route exact path="/coupons" element={<Coupons />}></Route>
                    <Route exact path="/addcoupons" element={<Addcoupons />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                {/* <Footer /> */}
            </Router>
        </div>
    )
}