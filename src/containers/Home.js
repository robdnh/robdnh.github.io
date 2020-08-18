import React from "react";
import "./Home.css";
import { Auth } from 'aws-amplify';
import NavBar from '../components/NavBar';
import { Text } from '@fluentui/react';
import { Separator } from 'office-ui-fabric-react/lib/Separator';

export default function HomePage(props) {

    const handleLogout = async event => {
      await Auth.signOut();
    };

    const RenderWidgets = () => {
        return (
          <div>
            <NavBar/>
            <div className="header">
              <Text variant="mega" style={{color: "darkGray"}}>Hi, my name is <Text variant="mega">Rob</Text></Text>
            </div>
            <Separator>About</Separator>
            <div className="about">
              <Text block>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
            <Separator>Projects</Separator>
            <div className="Projects">
              <Text block>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
            <Separator>Contact</Separator>
            <div className="Projects">
              <Text block>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
          </div>
        );
    }

    return (
        <div class="Home">
            <RenderWidgets />
        </div>
    );
}
