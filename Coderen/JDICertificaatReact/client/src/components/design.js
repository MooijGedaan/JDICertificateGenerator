import React, {Component} from "react";

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designs: [
                "Birthday party", "Baby shower", "Christmas"
            ],
            active: null,
        }

        this.handleActiveDesign = this.handleActiveDesign.bind(this);
    }

    handleActiveDesign(e) {
        const list = document.querySelector('#list');
        this.setState({
            active: e
        })
    }

    render() {
        const designOptions = this.state.designs.map((item, index) => {
            return (
                <li className="border-gray-200 border-2 rounded pl-2 pr-1 py-2 flex items-center cursor-pointer" onClick={() => this.handleActiveDesign(index)}>
                    <div className={`border-gray-400 border-2 rounded-full w-3 h-3 mr-2 ${this.state.active === index ? 'bg-gray-600' : ''}`} />
                    <p className="text-blue-900 text-sm sm:text-base font-jdi">{item}</p>
                </li>
            );
        });

        return(
            <div className="px-5 py-5 mt-2 sm:px-0 sm:py-2 ">
                <h2 className="font-jdi text-blue-900">Which design fits the occasion best?</h2>
                <ul id="list" className="grid gap-4 grid-cols-2 my-4">
                    {designOptions}
                </ul>
                <button onClick={this.state.active ? this.props.selectedOption : null} className={`font-jdi ${this.state.active !== null ? 'bg-blue-900' : 'bg-gray-200'} text-white rounded px-3 py-1 mt-3`}>Next step</button>
            </div>
        );
    };
}

export default Design;