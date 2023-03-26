import { useState } from 'react';
import ItemCard from './components/ItemCard';
import ItemList from './components/ItemList';
import 'bulma/css/bulma.min.css';

function App() {
  const [items, setItems] = useState([]);

  const editItemById = (id, newTitle, newDescription) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle , description: newDescription};
      }

      return item;
    });

    setItems(updatedItems);
  };

  const deleteItemById = (id) => {
    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });

    setItems(updatedItems);
  };

  const createItem = (title, description) => {
    const updatedItems = [
      ...items,
      {
        id: Math.round(Math.random() * 9999),
        title,
        description
      },
    ];
    setItems(updatedItems);
  };

  return (
    <div className="app">
         <ItemCard onCreate={createItem} />
      <ItemList onEdit={editItemById} items={items} onDelete={deleteItemById} />
     
    </div>
  );
}

export default App;
