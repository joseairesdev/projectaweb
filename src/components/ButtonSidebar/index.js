import React from 'react'

const ButtonSidebar = ({ onClick }) =>
{
    return (
        <>
            <label for="burger" className="burger">
                <input id="burger" type="checkbox" onClick={onClick} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}

export default ButtonSidebar;
