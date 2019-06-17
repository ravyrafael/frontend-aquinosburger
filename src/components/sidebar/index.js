import React, { Component } from 'react';
import SidebarCategory from '../sidebarCategory';
import './sideBar.css';
class SideBar extends Component {

    render() {
        return (
            <>
                <div>
                    <div className='sidebar fixed sn-bg-1'>
                        <ul>
                            <SidebarCategory></SidebarCategory>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
export default SideBar;