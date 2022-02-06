
import React, { Component } from "react"
import LastProductDb from "./LastProductDb"

class ProductDb extends Component{
    constructor(){
        super();
        this.state = {
            product: "" //estado inicial
        }

    }

    componentDidMount(){
        fetch("/api/products/max/last")
        .then(response=>{return response.json()})
        .then(producto=>{this.setState({product:producto.data.result[0]})})
    }
    
    render(){
        return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {   
                <LastProductDb ultimoProducto={this.state.product}/>
            }      
        </div>
        </React.Fragment>
    )}
}

export default ProductDb