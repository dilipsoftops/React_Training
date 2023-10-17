import React, { Component } from "react";

import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.isOpen && (
        <SidebarContainer onClick={this.props.toggle}>
          <Icon onClick={this.props.toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink>About</SidebarLink>
              <SidebarLink>Discover</SidebarLink>
              <SidebarLink>Services</SidebarLink>
              <SidebarLink>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute>Sign In</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
      )
    );
  }
}
