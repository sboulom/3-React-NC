import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}){
    return(
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src= {campsite.image} alt={campsite.name} />                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}
//where is your navbar brand

function Directory(props) {
 
    // rendereSelectedCampsite(campsite){
    //     if(campsite){
    //         return(
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle> {campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     } 
    //     return <div />
    // }

 
        const directory = props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite}                                                                     />
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    {directory}

                </div>
                {/* <div className="row">
                    <div className="col-md-5 m-1">
                        {this.rendereSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
               
            </div>
        );
    
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