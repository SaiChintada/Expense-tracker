import { showToast, confirmDelete } from "../utils/ui";

function List({ items, deleteItem, setEditItem }) {
  return (
    <div className="grid">
      {items.length === 0 ? (
         <div className="empty">
         <h2> No Items Found</h2>
         <p>Add your first item to get started</p>
       </div>
     ) : (
        items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <div style={{ marginTop: "10px" }}>
              <button
                className="btn"
                onClick={() => setEditItem(item)}
              >
                Edit
              </button>

              <button
                className="btn delete"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  if (confirmDelete()) {
                    deleteItem(item.id);
                    showToast("Item deleted");
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default List;