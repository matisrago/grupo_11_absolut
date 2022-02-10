import React from 'react'
function lastProductDb(props){

						{/*<!-- Last Movie in DB -->*/}
                        return(
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
								</div>
								
								<div className="card-body">
									<div className="text-center">
									
									</div>
									<p>{props.ultimoProducto.name}</p>
								</div>
								<div>
									<img style={{width: '70%'}}src={`${props.ultimoProducto.image}`}/>
									
								</div>
							</div>
						</div>

                        )}

export default lastProductDb