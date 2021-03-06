import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id='logo' to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/work">Our work</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

        </StyledNav>
    )
}


const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
    background: #282828;

a{
    color: white;
    text-decoration:none;
}

ul{
    display: flex;
    list-style: none;
}

li{
    padding-left:10rem;
    position: relative;
}

#logo{
    font-size:2rem;
    font-family:'Lobster';
    font-weight: lighter;
}
`;

export default Nav
