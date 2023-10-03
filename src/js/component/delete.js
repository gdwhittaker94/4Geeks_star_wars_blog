import React from 'react';

export const Delete = ({ onDelete }) => {

    // Delete button for list item that, when clicked, removes the list item from the list
    // Initially not displayed, but displays when we hover over div containing list item 

    return (
        <div className='deleteButton'>
            <input type="radio" id="delete" name="deleteButton" value="Delete"/>
            <label htmlFor="delete" onClick={onDelete}>                                    
                X
            </label>
        </div>
    )
}
