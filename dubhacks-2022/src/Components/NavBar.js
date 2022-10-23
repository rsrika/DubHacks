import React from 'react';
import { useNavigate } from 'react-router';

export function NavBar() {
    let navigate = useNavigate();

    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    <div className="signature">
                        <img src="./img/logotransparent 2.png" alt="logo"></img>
                    </div>
                </div>
                <div className="links">
                    <ul className='example'>
                        <li>
                            <button className="fs-6 navlink home active hover1 hover1-1"
                                onClick={
                                    () => {
                                        navigate("/home")
                                    }
                            }>Home</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink work hover2 hover2-1"
                                onClick={
                                    () => {
                                        navigate("/coupons")
                                    }
                            }>Coupons</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink resume hover3 hover3-1"
                                onClick={
                                    () => {
                                        navigate("/recipes");
                                    }
                            }>Recipes</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink about hover4 hover4-1" d
                                onClick={
                                    () => {
                                        navigate("/profile")
                                    }
                            }>Profile</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}