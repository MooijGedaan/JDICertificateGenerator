import React, { Component } from "react";
import MetaTags from 'react-meta-tags';

class Head extends React.Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>Justdiggit certificate generator</title>
                    <link rel="stylesheet" href="https://use.typekit.net/mfi8byl.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
                </MetaTags>
            </div>
        );
    }
}

export default Head;