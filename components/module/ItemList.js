import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };
  return (
    <div className="item-list">
      <p>Purchase Products</p>
      {products.map((item, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="name"
            label="Product Name"
            type="text"
            value={products.name}
            onChange={(e) => changeHandler(e, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={products.price}
              onChange={(e) => changeHandler(e, index)}
            />{" "}
            <FormInput
              name="qty"
              label="QTY"
              type="text"
              value={products.qty}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>Removie</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
