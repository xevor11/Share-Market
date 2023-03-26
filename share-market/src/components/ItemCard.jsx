import { useState } from 'react';

function ItemCard({ onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };

    const changeDescription = (event) => {
        setDescription(event.target.value);
    };

    const submitInfo = (event) => {
        event.preventDefault();
        onCreate(title, description);

        setTitle('');
        setDescription('');
    };

    return (
        <div className="item-create">
            <h3 class ="ml-4 mt-4">Add a Title and description for your item</h3>
            <form onSubmit={submitInfo}>
            
                <input className="input column is-3 ml-3 mt-2" placeholder= "enter Title" value={title} onChange={changeTitle} />

                <div class="field">
                    <div class="control column is-3 ">
                        <textarea class="textarea is-small" placeholder="Description" rows="6"

                            value={description} onChange={changeDescription} />
                    </div>
                </div>

                <button className="button ml-4">Create!</button>
            </form>
        </div>
    );
}

export default ItemCard;
