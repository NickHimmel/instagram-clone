import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function ProtectedRoute({ user, loggedInPath, children, ...rest}) {
    return(
        <Route 
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect 
                            to={{
                                pathname: ROUTES.SIGN_UP,
                                state: { from: location }
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute;