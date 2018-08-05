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
    Col,
    FormText
} from 'reactstrap'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'

class ItemModal extends Component {
    state = {
        modal : false,
        name : ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            name:this.state.name,
            charclass:this.state.charclass,
            level:this.state.level,
            race:this.state.race
        }

        // Add item via addItem action
        this.props.addItem(newItem)

        // Close the modal
        this.toggle()
    }

    render(){
        return(
            <div>
                <Button
                    color = "dark"
                    style = {{marginBottom: '2rem'}}
                    onClick = {this.toggle}
                >New Character</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Add a New Character</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <Label for="characterName" sm={2}>Character</Label>
                            <Col sm={10}>
                            <Input 
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Character Name"
                                onChange={this.onChange}
                            /></Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="characterClass" sm={2}>Class</Label>
                            <Col sm={10}>
                            <Input 
                                type="select"
                                name="charclass"
                                onChange={this.onChange}>
                                <option>Barbarian</option>
                                <option>Bard</option>
                                <option>Cleric</option>
                                <option>Druid</option>
                                <option>Fighter</option>
                                <option>Monk</option>
                                <option>Paladin</option>
                                <option>Ranger</option>
                                <option>Rogue</option>
                                <option>Sorcerer</option>
                                <option>Warlock</option>
                                <option>Wizard</option></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="characterLevel" sm={2}>Level</Label>
                            <Col sm={10}>
                            <Input
                                type="number"
                                name="level"
                                placeholder="Enter Character Level"
                                onChange={this.onChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="characterRace" sm={2}>Race</Label>
                            <Col sm={10}>
                            <Input
                                type="text"
                                name="race"
                                placeholder="Enter Character Race"
                                onChange={this.onChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Button
                            color="dark"
                            style={{marginTop:'2rem'}}
                            block
                            >Add Character</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item:state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal)