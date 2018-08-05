import React, {Component} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {getItems, deleteItem, showCharacter} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    onDeleteClick=(id)=>{
        this.props.deleteItem(id)
    }
    
    onShowChaClick = (id) => {
        this.props.showCharacter(id)
    }

    render(){
        const {items} = this.props.item
        console.log({items})
        return(
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