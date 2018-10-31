import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
       <Modal 
       ariaHideApp = {false}
       isOpen={!!props.selectedOption}
       onRequestClose={props.handleClearselectedOptionState}
       contentLabel="Selected Option"
       >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearselectedOptionState}>Okay</button>
       </Modal>
    
);


export default OptionModal;