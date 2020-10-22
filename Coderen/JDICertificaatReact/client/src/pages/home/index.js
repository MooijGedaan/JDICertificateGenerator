import React, { Component} from "react";
import { Link } from "react-router-dom";

import './home.css'

class Index extends Component {

    render() {
        return (
            <>
                <div className="bg-orange-100">
                    <div id="header" className="bg-white relative z-10 wrapper bg-opacity-50">
                        <div className="px-8 py-12 max-w-4xl mx-auto md:py-32">
                            <h1 className="font-jdiCondens font-bold md:text-5xl uppercase text-4xl text-blue-900 leading-9 mb-2 md:mb-5 tracking-wide">Give the justdiggit certificate!</h1>
                            <p className="font-jdi sm:text-xl leading-tight text-blue-900 md:w-2/3">Make the world a greener place, give a certificate. By donating an amount, you will recieve a <span className="font-custom text-orange-500">personalised</span> certificate which proves your part in bringing back nature!</p>
                            <button className="font-jdi bg-orange-500 px-4 py-1 rounded text-white mt-10 md:px-6 md:py-2 md:text-md md:mx-auto"><Link to="/generator">Let's start</Link></button>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-8 max-w-4xl mx-auto md:my-12">
                    <div className="lg:w-1/2 mr-2">
                        <p className="font-jdiCondens uppercase font-bold text-2xl text-blue-900">More information</p>
                    </div>
                    <div className="lg:flex mt-4">
                        <p className="font-jdi text-blue-900 lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra tortor rhoncus sem viverra, id feugiat nisi vestibulum. Suspendisse tempus scelerisque dignissim. Curabitur turpis ipsum, imperdiet vel auctor quis, cursus ac sem. Nam a dolor vestibulum, scelerisque lectus ut, convallis arcu. In non dapibus sapien. Sed a leo luctus dolor interdum eleifend vestibulum a mauris. Sed at ex eros.</p>
                        <div className="w-full border-2 h-48 rounded-xl lg:w-1/2 mt-8 lg:mt-0 ml-0 lg:ml-10">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Index;