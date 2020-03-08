import React, { Component } from "react";
import { Modal, Button } from 'react-materialize';

class projectModal extends Component {

    

    render() {
        return (
            <Modal
                actions={[
                    <div>
                        <Button className="modal-close waves-effect waves-purple btn light-blue text-black">Close</Button>
                        <Button className="modal-close waves-effect waves-purple btn light-blue text-black">Close</Button>
                    </div>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="header"
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
                <p>stuff</p>
            </Modal>
        )
    }
}

export default projectModal;