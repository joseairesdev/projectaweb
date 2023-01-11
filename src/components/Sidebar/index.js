import React, { useState } from 'react';
import * as C from './styled';
import { menuItem } from '../../utils';
import { BiMenu, BiX } from "react-icons/bi";
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Sidebar = ({ children }) =>
{

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <C.Container>

            <C.SidebarArea style={{ width: isOpen ? "300px" : "50px" }} >
                <C.SectionArea>
                    <C.Title style={{ display: isOpen ? "block" : "none" }} >
                    </C.Title>
                    <C.Bars style={{ marginLeft: isOpen ? "200px" : "-10px" }} >
                        {!isOpen ? <BiMenu size={35} onClick={toggle} /> : <BiX size={35} onClick={toggle} />}
                    </C.Bars>
                </C.SectionArea>
                {menuItem.map((item, index) => (
                    <C.ContainerLink href={item.path} key={index} activeclassName="active">
                        <C.Icon id="app-title" >{item.icon}</C.Icon> <C.Text style={{ display: isOpen ? "block" : "none" }} > {item.name} </C.Text>
                    </C.ContainerLink>
                ))}
            </C.SidebarArea>
            <main> {children} </main>
            {!isOpen && <ReactTooltip
                anchorId="app-title"
                place="bottom"
                effect="solid"
                content="meu ovo" />}
        </C.Container>
    )
}

export default Sidebar;
