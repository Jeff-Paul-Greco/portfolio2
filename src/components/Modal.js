import React, { Component } from "react";
import { Modal } from 'react-materialize';

class projectModal extends Component {

    render() {
        return (
            <Modal
                actions={[
                    <div>
                        <a className="modal-close waves-effect waves-purple btn light-blue text-black" href={this.props.button1[0]} target="blank">{this.props.button1[1]}</a>
                        <a className="modal-close waves-effect waves-purple btn light-blue text-black" href={this.props.button2[0]} target="blank">{this.props.button2[1]}</a>
                    </div>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header={this.props.name}
                id="modal-0"
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
            >
                <p>{this.props.description}</p>
            </Modal>
        )
    }
}

export default projectModal;