import React, { useEffect } from 'react';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

function NotFound() {
    useEffect(() => {
        document.title = "404 - Not Found"
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-screen-lg text-center">
                <h1 className="mb-6 font-bold text-xl">Sorry, this page isn't available.</h1>
                <p>The link you followed may be broken, or the page may have been removed.{` `}
                    <Link to={ROUTES.DASHBOARD} className="text-blue-800">
                        Go back to Instagram.
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default NotFound;