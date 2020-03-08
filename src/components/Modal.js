import React, { Component } from "react";
import { Modal, Button } from 'react-materialize';

const projects = {
    customCorner: {
        title: "Custom Corner Demo",
        description: "Custom Corner is a Full MERN Stack site developed for an interior design client. The app aggregates furniture from various vendors and allows the user to save and stage furniture for various seperate clients as well as pin saved furniture from a client's tackboard to Pinterest.com. The code is proprietary and user accounts are closed to the public, so a demo site has been linked below which displays the app's functionality.",
        firstChoice: ["https://jeff-paul-greco.github.io/Custom-Corner-Demo/", "Demo Site"],
        secondChoice: ["https://custom-corner.com/", "Site"]
    },
    googleBooks: {
        title: "React Book Search",
        description: "Full MERN Stack app that searches Google Books' API and saves searched books to a favorites list!",
        firstChoice: ["https://cryptic-dawn-75768.herokuapp.com/", "Site"],
        secondChoice: ["https://github.com/Jeff-Paul-Greco/google-books-search", "Code"]
    }
};

class projectModal extends Component {


    render() {
        return (
            <Modal
                actions={[
                    <div>
                        <Button className="modal-close waves-effect waves-purple btn light-blue text-black" onClick={console.log(this.props)}>Close</Button>
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