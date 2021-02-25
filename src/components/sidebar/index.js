import React from 'react';
import useUser from '../../hooks/use-user'

function Sidebar() {
    const { user: { docId, userId, following, username, fullName } = {} } = useUser();
    
    console.log(docId)
    return (
        <div className="col-span-1">
            <p>I am the sidebar</p>
        </div>
    )
}

export default Sidebar;