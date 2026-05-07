<li key={item.id}>
  <strong>{item.title}</strong> - ₹{item.amount}
  <br />
  <small>{item.category} | {item.type}</small>
  <br />
  <span>{item.note}</span>

  <button onClick={() => deleteItem(item.id)}>Delete</button>
</li>