import React, { useState } from 'react';
import { Spinner,Button } from 'react-bootstrap';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import AdminRoute from '../../../AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/useAuth';
import { FiMenu } from 'react-icons/fi'
import { MdMapsHomeWork,MdOutlinePayment,MdRateReview,MdLibraryAdd,MdAdminPanelSettings } from 'react-icons/md'
import {RiListUnordered } from 'react-icons/ri'
import {AiFillSetting } from 'react-icons/ai'
import {FcHome } from 'react-icons/fc'
import {FaTasks } from 'react-icons/fa'

import './Dashboard.css'
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import SendReview from '../SendReview/SendReview';
import MyOrder from '../MyOrder/MyOrder';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, isAdmin, isLoading } = useAuth();
    const [toggle, setToggle] = useState(false);
    return (
        <>
            {
                isLoading && <div className="text-center">
                    <Spinner className="text-center" animation="border" />
                </div>
            }
            <div className="d-flex">
                <div onClick={() => setToggle(!toggle)} className="menubar"> <FiMenu className='toogle-icon'/> </div>
                <div className={toggle ? "showSidebar" : "sidebar_left_side"}>
                    <div className="top-icon">
                         <p>KidsToy</p>
                    </div>

                    {!isAdmin && <ul className="dash-menu">
                        <li>
                            <NavLink to={`${url}`}> <MdMapsHomeWork className='dash-icon'/> Dashboard Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/myOrders`} activeClassName="selected-menu">
                                <RiListUnordered className='dash-icon'/>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/payment`} activeClassName="selected-menu">
                                <MdOutlinePayment className='dash-icon'/> Payment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/review`} activeClassName="selected-menu">
                                <MdRateReview className='dash-icon'/> Review
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home" activeClassName="selected-menu">
                                <FcHome className='dash-icon'/> Back to Home
                            </NavLink>
                        </li>
                        <li className=" mt-3">
                            <Button onClick={logOut} variant='outline-dark'>LogOut</Button>
                        </li>
                    </ul>}
                    {isAdmin && <ul className="dash-menu">
                        <li>
                            <NavLink to={`${url}`} ><MdMapsHomeWork className='dash-icon'/>  Dashboard Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/manageAllOrders`} activeClassName="selected-menu">
                                <FaTasks className='dash-icon'/> Manage All Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/addProducts`} activeClassName="selected-menu">
                                <MdLibraryAdd className='dash-icon'/> Add a Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/manageProducts`} activeClassName="selected-menu">
                                <AiFillSetting className='dash-icon'/> Manage Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/makeAdmin`} activeClassName="selected-menu">
                                <MdAdminPanelSettings className='dash-icon'/> Make an admin
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home" activeClassName="selected-menu">
                            <FcHome className='dash-icon'/> Back to Home
                            </NavLink>
                        </li>
                        <li className="mt-3">
                            <Button onClick={logOut} variant='outline-dark'>LogOut</Button>
                        </li>
                    </ul>
                    }
                </div>
                <div className="dash_right_side">

                    <Switch>
                        <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                        </Route>
                        <Route exact path={`${path}/myOrders`}>
                        <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/review`}>
                        <SendReview></SendReview>
                        </Route>
                        <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                        </Route>
                        <AdminRoute exact path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addProducts`}>
                        <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </>

    );
};

export default Dashboard;