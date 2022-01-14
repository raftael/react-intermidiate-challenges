import React from 'react';
import './Picture.styles.css'


const Header = (props) => {
    const {image, alt} = props;
    return (
        <div className="picture-container">
            <img src={image} alt={alt}  className="picture" />
        </div>
    )
}


export default Header