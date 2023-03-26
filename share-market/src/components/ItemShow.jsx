import { useState } from 'react';
import ItemEdit from './ItemEdit';

function ItemShow({ item, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const DeleteClick = () => {
    onDelete(item.id);
  };

  const EditClick = () => {
    setShowEdit(!showEdit);
  };

  const submitInfo = (id, newTitle, newDescription) => {
    setShowEdit(false);
    onEdit(id, newTitle, newDescription);
  };

  let titleInfo = <h3 class = "ml-99">{item.title}</h3>;
  let descriptionInfo =  <div class = "control column is-3">
    <textarea class="textarea is-small control column is-5 ml-2" placeholder="Description" rows="4" 

value={item.description} />
    </div>

  if (showEdit) {
    titleInfo = <ItemEdit onSubmit={submitInfo} item={item} />;
    descriptionInfo = ''
  }

  return (
   
    <div class = "is-flex-direction-row flex-direction: row">
           
      <div class = "ml-3 mt-4">{titleInfo}</div>
      <div>{descriptionInfo}</div>
      
      <div className="actions">
        <button class="small button mt-2 ml-2" onClick={EditClick}>
          Edit
        </button>
        <button class="delete ml-3 mt-4 ml-2" onClick={DeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemShow;
