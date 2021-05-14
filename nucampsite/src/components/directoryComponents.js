import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }
    
    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite})
    }

    rendereSelectedCampsite(campsite){
        if(campsite){
            return(
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle> {campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            )
        } 
        return <div />
    }

    render(){
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={()=> this.onCampsiteSelect(campsite)}>
                    <CardImg width="100%" src= {campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.rendereSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
                {/* <ExampleChildComponent /> */}
            </div>
        );
    }
}

// delete later
// class ExampleParentComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             number: 333
//         }
//     }
//     render() {
//         return <ExampleChildComponent number={this.state.number} />;
//     }
    
// }

// class ExampleChildComponent extends Component{
//     render(){
//         return <div>{this.props.number}</div>
//     }
// }
export default Directory;