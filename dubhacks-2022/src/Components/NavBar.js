import React from 'react';
import 'animate.css';
export function NavBar(props) {

    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    
                </div>
                <div className="links">
                    <ul className='example'>
                        <li>
                            <button className="fs-6 navlink home active hover1 hover1-1"
                                onClick={
                                    () => {
                                        props.handleClickHome()
                                    }
                            }>Home</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink work hover2 hover2-1"
                                onClick={
                                    () => {
                                        props.handleClickWork()
                                    }
                            }>Coupons</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink resume hover3 hover3-1"
                                onClick={
                                    () => {
                                        props.handleClickResume()
                                    }
                            }>Recipes</button>
                        </li>
                        <li>
                            <button className="fs-6 navlink about hover4 hover4-1" d
                                onClick={
                                    () => {
                                        props.handleClickAbout()
                                    }
                            }>Profile</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}