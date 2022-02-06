import React, {Component} from 'react';
import Genre  from './Genre';

// let genres = [
//     {genre: 'Acción'},
//     {genre: 'Animación'},
//     {genre: 'Aventura'},
//     {genre: 'Ciencia Ficción'},
//     {genre: 'Comedia'},
//     {genre: 'Documental'},
//     {genre: 'Drama'},
//     {genre: 'Fantasia'},
//     {genre: 'Infantiles'},
//     {genre: 'Musical'}
// ]

class GenresInDb extends Component{
    constructor(){
        super();
        this.state = {
            products: [] //estado inicial
        }

    }

    componentDidMount(){
        fetch("/api/products")
        .then(response=>{return response.json()})
        .then(productos=>{this.setState({products:productos.data.resultado})})
    }



    render(){
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Products in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.products.map((producto,index)=>{
                                        return  <Genre  {...producto}  key={producto + index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
        )
    }
        

}
export default GenresInDb;