import React from 'react';

function MovieList(props){
    return(
        <React.Fragment>
            <tr >
				<td class="table-primary">{props.id}</td>
				<td class="table-warning">{props.name}</td>
				<td class="table-success">{props.surname}</td>
                <td>{props.email}</td>
				<td>{props.date}</td>
			</tr>
        </React.Fragment>
    )
}
export default MovieList;