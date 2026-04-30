import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import Charts from "./components/Charts";
import Login from "./components/Login";
import { toggleDarkMode } from "./utils/ui";

const API = "https://fastapi-crud-3deh.onrender.com/items/";

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ AUTH STATE (MOVE HERE)
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  // FETCH ITEMS
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ADD
  const addItem = async (item) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchItems();
  };

  // UPDATE
  const updateItem = async (id, item) => {
    await fetch(API + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    setEditItem(null);
    fetchItems();
  };

  // DELETE
  const deleteItem = async (id) => {
    await fetch(API + id, {
      method: "DELETE",
    });
    fetchItems();
  };

  // FILTER
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ AUTH CHECK (PLACE HERE)
  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  // ✅ MAIN RETURN (INSIDE FUNCTION)
  return (
    <div className="layout">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <h2>Dashboard</h2>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="btn"
              onClick={() => {
                localStorage.removeItem("auth");
                setIsAuth(false);
              }}
            >
              Logout
            </button>

            <button className="btn" onClick={toggleDarkMode}>
              🌙
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="container">

          {/* HERO */}
          <div className="hero">
            <h1>Manage Your Tasks</h1>
            <p>Simple CRUD Dashboard</p>
          </div>

          {/* SEARCH */}
          <input
            className="search"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* STATS */}
          <div className="stats">
            <div className="stat-card">
              <h3>{items.length}</h3>
              <p>Total Items</p>
            </div>

            <div className="stat-card">
              <h3>{filteredItems.length}</h3>
              <p>Filtered Results</p>
            </div>
          </div>

          {/* CHARTS */}
          <Charts items={items} />

          {/* FORM */}
          <h3 className="section-title">Add Item</h3>
          <Form
            addItem={addItem}
            updateItem={updateItem}
            editItem={editItem}
          />

          {/* LIST */}
          <h3 className="section-title">Items List</h3>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <List
              items={filteredItems}
              deleteItem={deleteItem}
              setEditItem={setEditItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;