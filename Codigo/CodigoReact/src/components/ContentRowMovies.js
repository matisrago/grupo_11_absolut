import React from 'react';
import SmallCard from './SmallCard';
import { Component } from 'react';



class ContentRowTop extends Component{
    constructor(){
        super();
        this.state = {
            users : [],
            usersLength:"",
            products:[],
             productsLength:[],
             categoryLength:[],
             category1: [],
             category2: [],
             category3: []
        }

    }
        

        componentDidMount(){
            fetch("/api/users")
            .then(response=>{return response.json()})
            .then(usuarios=>{this.setState({users:usuarios.data.resultado,usersLength:usuarios.meta.total})})

            fetch("/api/products")
            .then(response=>{return response.json()})
            .then(productos=>{this.setState({productsLength:productos.meta.total})})

            fetch("/api/category")
            .then(response=>{return response.json()})
            .then(categorias=>{this.setState({categoryLength:categorias.meta.total})})

            fetch("/api/products/category/1")
            .then(response=>{return response.json()})
            .then(categoria1=>{this.setState({category1:categoria1.meta.total})})

            fetch("/api/products/category/2")
            .then(response=>{return response.json()})
            .then(categoria2=>{this.setState({category2:categoria2.meta.total})})

            fetch("/api/products/category/3")
            .then(response=>{return response.json()})
            .then(categoria3=>{this.setState({category3:categoria3.meta.total})})

            

        }


        
    render(){
        return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {   
                <SmallCard user={this.state.usersLength} product={this.state.productsLength} category={this.state.categoryLength} category1={this.state.category1} category2={this.state.category2} category3={this.state.category3}/>
            }      
        </div>
        </React.Fragment>
    )}
}
export default ContentRowTop;