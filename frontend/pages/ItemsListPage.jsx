import React,{useState,useEffect} from 'react'

const ItemsListPage = ({mockItems,ItemCard,useState,useEffect}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setItems(mockItems);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="items-list-page">
        <h1>All Lost & Found Items</h1>
        <p>Browse items recently reported by the community.</p>
      </div>
      {loading ? (
        <div className="loader"><div className="spinner"></div>Loading items...</div>
      ) : (
        <div className="items-grid">
          {items.map(item => <ItemCard key={item._id} item={item} />)}
        </div>
      )}
    </div>
  );
};

export default ItemsListPage
