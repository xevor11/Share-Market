import ItemShow from './ItemShow';

function ItemList({ items, onDelete, onEdit }) {
  const renderedItems = items.map((item) => {
    return (
      <ItemShow onEdit={onEdit} onDelete={onDelete} key={item.id} item={item} />
    );
  });

  return <div className="Item-list">{renderedItems}</div>;
}

export default ItemList;
