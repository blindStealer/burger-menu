import React from 'react';
import './Menu.css'
const Menu = ({header, items,menuActive,clickHandler,preventDefHandler}) => {

    return (
        <div onClick={clickHandler} className={menuActive ? 'menu active' : 'menu'}>
            <div className="blur"></div>
            <div onClick={(e) => e.stopPropagation() } className="menu__content">
                <div className="menu__header">
                    <div>
                        {header}
                    </div>
                </div>
                <div >
                    {items.map(item => {
                        return (
                            <div>
                                <div className={'nav-content'}>
                                    <a  onClick={preventDefHandler} href={item.href}>{item.value}</a>
                                    <div className={'icon-react'}>{item.icon}</div>
                                </div>
                            </div>
                        )

                    })}
                </div>

            </div>
            
        </div>
    );
};



export default Menu;