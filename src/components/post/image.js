import React from 'react';

function Image({ src, caption }) {

    return (
        <div className="post__img">
            <img src={src} alt={caption}/>
        </div>
    )
}

export default Image;