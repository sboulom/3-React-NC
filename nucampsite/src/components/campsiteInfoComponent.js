import React, { Component } from 'react';
import { Card, Button, CardImg, CardText, CardBody, CardTitle, Modal, ModalBody, ModalHeader, Label, Row,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }
    
    render(){
        return(
            <div>
            <Button type="submit" outline onClick={this.toggleModal} md={2} className="fa fa-pencil fa-lg "> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Control.select model=".rating" id="rating" name="rating" className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="author md={2}">Your Name</Label>
                        <Control.text model=".author" id="author" name="author"
                            placeholder="Your Name" 
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                            />
                       <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                        />
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="text md={2}">Comment</Label>
                        <Control.textarea model=".text" id="text" name="text"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(1),
                                maxLength: maxLength(40)
                            }}
                            />
                       <Errors
                            className="text-danger"
                            model=".text"
                            show="touched"
                            component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 1 characters',
                                    maxLength: 'Must be 40 characters or less'
                                }}
                        />
                    </Row>
                    <div className="form-group">
                        <Button type="submit" value="submit" color="primary" md={2}>Submit</Button>
                    </div>
                </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    };
};
    function RenderCampsite({campsite}){
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    function RenderComments({comments}){
        if(comments){
            return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return(
                        <div key={comment.id}>
                            <p>
                                {comment.text} <br />
                               -- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    )
                })}
                <CommentForm />
            </div>)
        }
    }
    function CampsiteInfo (props){
        if (props.campsite) {
           return (
               <div className="container">
                   <div className="row">
                        <div className="col">
                         <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active> {props.campsite.name}</BreadcrumbItem>
                         </Breadcrumb>
                         <h2>{props.campsite.name}</h2>
                         <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>   
           )
        }
        return <div />;
        
    }


export default CampsiteInfo;