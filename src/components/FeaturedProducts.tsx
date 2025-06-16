import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Тормозные колодки передние Bosch BP1234",
      price: 2450,
      originalPrice: 2890,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      brand: "Bosch",
      rating: 5,
      inStock: true,
    },
    {
      name: "Моторное масло Shell Helix Ultra 5W-40 4л",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      brand: "Shell",
      rating: 4,
      inStock: true,
    },
    {
      name: "Шина летняя Michelin Primacy 4 205/55 R16",
      price: 8900,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      brand: "Michelin",
      rating: 5,
      inStock: true,
    },
    {
      name: "Свечи зажигания NGK BKR6E комплект 4шт",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=300&fit=crop",
      brand: "NGK",
      rating: 4,
      inStock: false,
    },
    {
      name: "Аккумулятор Varta Blue Dynamic 60Ah",
      price: 6500,
      originalPrice: 7200,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      brand: "Varta",
      rating: 5,
      inStock: true,
    },
    {
      name: "Фильтр воздушный Mann C25114/1",
      price: 890,
      image:
        "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=300&fit=crop",
      brand: "Mann",
      rating: 4,
      inStock: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые востребованные автозапчасти с высокими оценками покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              brand={product.brand}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
