import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/itemActions'

class DeleteModal extends Component {
    state = {
        modal : false,
        name : ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.deleteItem(id)
        this.toggle()
    }

    render(){
        return(
            <div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                <ModalHeader toggle={this.toggle}>Delete Confirmation</ModalHeader>
                <ModalBody>
                </ModalBody>
                <FormGroup>
                    <Button
                    color="warning"
                    style={{marginTop: '2rem'}}
                    inline
                    >Delete
                    </Button>
                </FormGroup>
                    <Button
                    color="dark"
                    style={{marginTop:'2rem'}}
                    inline
                    onClick = {this.toggle}
                    >Cancel
                    </Button>
                <FormGroup>
                </FormGroup>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item : state.item
})

export default connect(mapStateToProps, {deleteItem})(DeleteModal)