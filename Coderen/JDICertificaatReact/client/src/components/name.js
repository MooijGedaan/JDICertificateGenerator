import React, {Component} from "react";

class Name extends Component {
    render() {
        return(
            <div className="px-5 py-5 sm:px-0 sm:py-2">
                <h2 className="font-jdi text-blue-900">Who will recieve this certificate?</h2>
                <input value={this.props.currentName} onChange={this.props.nameChange} className="bg-gray-200 w-full rounded h-8 font-jdi px-2 mt-2" />
                <button onClick={this.props.currentName ? this.props.selectedOption : null} className={`font-jdi ${this.props.currentName ? 'bg-blue-900' : 'bg-gray-200'} text-white rounded px-3 py-1 mt-3`}>Next step</button>
            </div>
        );
    };
}

export default Name;