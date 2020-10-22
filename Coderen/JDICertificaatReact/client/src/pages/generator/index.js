import React, {Component} from "react";
import { Link } from "react-router-dom";
import './generator.css';

import Name from "../../components/name";
import Design from "../../components/design";
import Amount from "../../components/amount";
import Download from "../../components/download";

import bgOne from '../../assets/DynamicGround/G1.svg';
import bgTwo from '../../assets/DynamicGround/G2.svg';
import bgThree from '../../assets/DynamicGround/G3.svg';
import bgFour from '../../assets/DynamicGround/G4.svg';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [
                'Enter a name',
                'Choose a design',
                'Choose an amount',
                'Submit and download'
            ],
            selectedOption: 0,
            name: "",
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleMenuIncrement = this.handleMenuIncrement.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleOptionChange(index) {
        this.setState({
            selectedOption: index,
        });
    }

    handleMenuIncrement() {
        this.setState({
            selectedOption: this.state.selectedOption + 1,
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let content;
        let dynamicGround;

        switch(this.state.selectedOption) {
            case 0:
                content = <Name currentName={this.state.name} nameChange={this.handleNameChange} selectedOption={this.handleMenuIncrement} />;
                dynamicGround = <div className="groundBG w-full h-full absolute right-0 bottom-0" style={{backgroundImage: `url(${bgOne})`}}/>;
                break;
            case 1:
                content = <Design selectedOption={this.handleMenuIncrement} />;
                dynamicGround = <div className="groundBG w-full h-full absolute right-0 bottom-0" style={{backgroundImage: `url(${bgTwo})`}}/>;
                break;
            case 2:
                content = <Amount selectedOption={this.handleMenuIncrement} />;
                dynamicGround = <div className="groundBG w-full h-full absolute right-0 bottom-0" style={{backgroundImage: `url(${bgThree})`}}/>;
                break;
            case 3:
                content = <Download selectedOption={this.handleMenuIncrement} />;
                dynamicGround = <div className="groundBG w-full h-full absolute right-0 bottom-0" style={{backgroundImage: `url(${bgFour})`}}/>;
                break;
            default:
                content = <h1>Something went wrong!</h1>;
        }

        const menu = this.state.menu.map((item, index) => {
            const startingNumber = this.state.selectedOption;
            return(
                index < (startingNumber + 1) ?
                    <div key={index} className={`flex items-center ${index === startingNumber ? 'w-full' : ''} cursor-pointer`} onClick={e => this.handleOptionChange(index)}>
                        <span className={`bg-blue-900 text-white rounded-full w-5 h-5 text-center leading-snug mr-2`}>{index + 1}</span>
                        <p className={`${this.state.selectedOption === index ? '' : 'hidden'}`}>{item}</p>
                    </div>
                    :
                    <div key={index} className={`flex items-center ${index === startingNumber ? 'ml-auto' : ''} cursor-pointer`} onClick={e => this.handleOptionChange(index)}>
                        <span className="bg-blue-900 text-white rounded-full w-5 h-5 text-center leading-snug mr-2">{index + 1}</span>
                        <p className={`${this.state.selectedOption === index ? '' : 'hidden'} mr-2`}>{item}</p>
                    </div>
            )
        });

        const menuEnContent = this.state.menu.map((item, index) => {
            const startingNumber = this.state.selectedOption;
            return(
                index < (startingNumber + 1) ?
                    <div className="flex">
                        <span onClick={e => this.handleOptionChange(index)} className={`my-2 text-white rounded-full w-5 h-5 text-center leading-4 mr-2 cursor-pointer leading-snug ${this.state.selectedOption === index ? 'bg-blue-900' : 'bg-gray-400'}`}>{index + 1}</span>
                        <div className={`w-3/5 mt-2 ${this.state.selectedOption > index ? '' : 'mb-10'}`}>
                            <p className={`${this.state.selectedOption === index ? 'font-bold' : 'font-medium'} text-blue-900 inline text-lg cursor-pointer`} onClick={e => this.handleOptionChange(index)}>{item}</p>
                            <div className={`${index === startingNumber ? 'block' : 'hidden'}`}>
                                {content}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center" onClick={e => this.handleOptionChange(index)}>
                        <span className={`my-2 bg-gray-400 text-white rounded-full w-5 h-5 text-center leading-4 mr-2 cursor-pointer leading-snug`}>{index + 1}</span>
                        <p className={`font-medium text-blue-900 text-lg cursor-pointer inline`}>{item}</p>
                    </div>
            );
        });

        return(
            <div className="h-full max-w-4xl mx-auto">
                <div className="px-5 pt-8 pb-2 sm:pt-16">
                    <Link to="/"><p className="font-jdi bg-gray-300 inline px-3 py-1 rounded text-gray-600">Go back</p></Link>
                    <h1 className="uppercase mt-3 sm:mt-6 font-jdiCondens font-bold leading-9 tracking-wide text-3xl sm:text-5xl text-blue-900">Generate certificate</h1>
                </div>

                <div className="block sm:hidden">
                    <div id="menu" className="font-jdi flex px-5 items-center">
                        {menu}
                    </div>

                    <div id="content" className="">
                        {content}
                    </div>

                    <div id="mobile" className="background absolute w-full bottom-0 overflow-hidden h-full">
                        <div className="human h-64 w-40 mr-6 absolute right-0"/>
                        <div className="certificate rounded-sm absolute w-16 h-24 bg-gray-200">
                            <p className="superTinyText break-words text-blue-900 px-2 py-2 font-custom text-center leading-tight">{this.state.name}</p>
                        </div>
                        {/*<div className="groundBG w-full h-40 absolute bottom-0"/>*/}
                        {dynamicGround}
                    </div>
                </div>

                <div className="hidden sm:block font-jdi flex px-5 mt-8">
                    {menuEnContent}
                    <div id="desktop" className="background absolute w-full right-0 bottom-0 overflow-hidden h-full">
                        <div className="human h-64 w-40 mr-6 absolute right-0"/>
                        <div className="certificate rounded-sm absolute w-16 h-24 bg-gray-200">
                            <p className="superTinyText break-words text-blue-900 px-2 py-2 font-custom text-center leading-3">{this.state.name}</p>
                        </div>
                        {dynamicGround}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;