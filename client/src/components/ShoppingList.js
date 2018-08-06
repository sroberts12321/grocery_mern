import React, {Component} from 'react'
import {Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Col} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {getItems, deleteItem, showCharacter} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    constructor(props){
        super(props)
        this.state = {heroModalOpen: false}
        //this.props.getItems()
    }

    componentDidMount(){
       
    }

    onEditClick(id){

    }

    onDeleteClick=(id)=>{
        this.props.deleteItem(id)
    }
    
    onShowChaClick = (id) => {
        this.setState({heroModalOpen: true})
        this.props.showCharacter(id)
        // const {item} = this.props
        // if(item){
        // console.log(item.items)}
        // let display = document.getElementById('display')
        
        
        
    }

    render(){
        const {items} = this.props.item
        var hero = items[0]
        const { heroModalOpen } = this.state
        return(
            <div>

            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items.map(({_id, name, charclass})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button 
                                className="remove-btn" 
                                color="danger" 
                                size="sm" 
                                onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                {name} 
                                <Button
                                className="view-btn"
                                color="success"
                                size="md"
                                onClick={this.onShowChaClick.bind(this, _id)}
                                >&#9737;</Button>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
            {heroModalOpen && items.length > 0 && items.length < 2? 
            <div>
                {hero && hero.name? 
                <div>
                <Form>
                    <FormGroup row>
                        <Label sm={4}>Character name</Label>
                        <Col sm={4}>
                        {hero.name}</Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>Character Class</Label>
                        <Col sm={4}><Label>
                        {hero.charclass}</Label></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>Character Level</Label>
                        <Col sm={4}><Label>
                        {hero.level}</Label></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>Character Race</Label>
                        <Col sm={4}><Label>
                        {hero.race}</Label></Col>
                    </FormGroup>
                <Button color="success">Edit</Button>
                </Form>
                </div>
                :
                null}   
            </div> : null }
        </div>
        )
    }
}

ShoppingList.propTypes = {
    getItems : PropTypes.func.isRequired, 
    item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(
    mapStateToProps, 
    {getItems, deleteItem, showCharacter}
)(ShoppingList)