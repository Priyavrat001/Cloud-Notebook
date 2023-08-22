import React from 'react'

export const Noteitems = (props) => {
    const { note } = props;
    return (
        <div className='row'>
            <div className="card col-md-4 row my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-2"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}
