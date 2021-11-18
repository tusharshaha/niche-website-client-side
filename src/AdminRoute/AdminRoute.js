import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {

    const { user, isLoading, isAdmin } = useAuth()

    if (isLoading) {
        return <div className="text-center"><Spinner animation="grow" variant="warning" /></div>
    }

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;