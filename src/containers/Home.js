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
