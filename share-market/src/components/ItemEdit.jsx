import { useState } from 'react';

function ItemEdit({ item, onSubmit }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const submitInfo = (event) => {
    event.preventDefault();

    onSubmit(item.id, title, description);
    
  };

  return (
    <form onSubmit={submitInfo} className="item-edit">
     <input className="input control column is-3 ml-2" placeholder= "enter Title" value={title} onChange={changeTitle} />

<div class="field">
    <div class="control column is-3">
        <textarea class="textarea is-small" placeholder="Description" rows="6"

            value={description} onChange={changeDescription} />
    </div>
</div>

<button className="button mr-2">Save</button>


    </form>
  );
}

export default ItemEdit;
