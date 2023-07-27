import React, { memo, useCallback, useMemo, useState } from "react";

let count = 0;

export const ListItems = () => {
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  console.log("RE-RENDER - LIST ITEMS");

  function handleAddItem(e) {
    e.preventDefault();
    setItems([...items, { id: count++, text: itemValue }]);
  }

  const handleRemoveItem = useCallback(
    (id) => setItems((state) => state.filter((item) => item.id !== id)),
    [setItems]
  );

  const slowCalc = useMemo(() => {
    console.log("useMemo");
    return items.filter((item) => item.text.includes("a")).length;
  }, [items]);

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          onChange={(e) => setItemValue(e.target.value)}
          value={itemValue}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
      </ul>
      <p style={{ textAlign: "center" }}>
        Quantidade item que possui a letra ( a ): {slowCalc}
      </p>
    </>
  );
};

// Child

const Item = memo(({ item, handleRemoveItem }) => {
  console.log("RE-RENDER -  ITEMS");

  return (
    <li key={item.id}>
      {item.text} <button onClick={() => handleRemoveItem(item.id)}>x</button>
    </li>
  );
});
