import React from 'react';

function SmallCard(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total users in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.user}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total products in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.product}</div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total categories in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total Vodka in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.category1}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primaryshadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total Beer in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.category2}</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total Others in dataBase</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.category3}</div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default SmallCard;