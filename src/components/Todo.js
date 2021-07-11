
import React,{useState} from 'react';
import {Card,Button,Form,Col,Row,Badge} from 'react-bootstrap'
// import {AiFillPlusCircle} from 'react-icons/ai'
// import {FcTodoList} from 'react-icons/fc'
// import {FaMinus} from 'react-icons/fa'
import '../components/todo.css';
import { connect } from 'react-redux';
import {addItem,deleteItem} from '../redux'

function Todo (props) {
    const [val,setVal] = useState("")

    const deleteHandler = (id) => {
        props.deleteItem(id)
        
    }

    const addItemHandler = () => {
        (val === "")?(alert("Task should not be empty")):(props.addItem(val))
        setVal("")
    }
    return(
        <Card >
           <Card.Header>{' '}TODO APP </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Row>
                    <Button variant="success">
                        Total Tasks <Badge variant="light">{' '}{props.value.length}</Badge>
                    </Button>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Col xs lg md = {10}>
                            <Form.Control type="text" placeholder="Type here.." value={val} onChange={(e) => setVal(e.target.value)}></Form.Control>
                        </Col>
                        <Col xs md lg ={2}>
                            <Button variant="primary" onClick={() => addItemHandler() } title="Add New Item"> Add {' '}+</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <hr></hr>
                <div>
                    {  
                        (props.value.length > 0) ? 
                        (props.value.map((val,index) => {
                            return (
                                <div key={index}>                                
                                    <Row key={index}>
                                        <Col xs md lg = {11} className="todo">
                                            <span>{val}</span>
                                        </Col>
                                        <Col xs md lg = {1}>
                                            <Button id = {index} variant="danger"  onClick={(e) => deleteHandler(e.target.id)} >-</Button> 
                                        </Col>
                                    </Row>
                                    <br></br>
                                </div>
                            );
                        })):(<div style={{display:'flex', justifyContent:'center'}}>Nothing to display</div>)
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        value:state.todo.value
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: val => dispatch(addItem(val)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)