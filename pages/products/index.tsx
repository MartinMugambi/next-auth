interface Products {
  id: number;
  productName: string;
  price: number[];
  description: string;
}

const Products = (props: Products) => {
  const discountProducts: Products = {
    id: 1,
    productName: "PlayStation 5",
    price: [3, 4, 5],
    description: "Gaming Consile",
  };

  const { id, productName, price, description } = discountProducts;

  const totalPrice = price.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return (
    <section>
      <h1>{`The product is ${id}`}</h1>
      <p>The productname is {`${productName}`}</p>
      <p>Product total price is {`${totalPrice}`}</p>
      <p>Product description is {`${description}`}</p>
    </section>
  );
};

export default Products;
