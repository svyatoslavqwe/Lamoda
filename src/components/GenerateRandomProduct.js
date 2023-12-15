const GenerateRandomProduct = () => {
  const colors = ["Black", "Red", "White", "Blue"];
  const categories = ["Jeans", "T-Shirts", "Hoodies", "Shoes"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  return {
    id: Math.random().toString(),
    name: `Product ${Math.floor(Math.random() * 8) + 1}`,
    description: "This item is fashionable and stylish",
    color: randomColor,
    category: randomCategory,
    price: (Math.random() * 100).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    imageUrl: `/image-${Math.floor(Math.random() * 8) + 1}.png`,
  };
};

export default GenerateRandomProduct;
