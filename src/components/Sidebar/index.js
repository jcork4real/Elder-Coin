import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRouter 
} 
from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='howToBuy' onClick={toggle}>
                        How To Buy
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Merch
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        The Team
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        🙏 Buy $Prayers
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/signin">Buy $PRAYERS</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
       
    )
}

export default Sidebar
