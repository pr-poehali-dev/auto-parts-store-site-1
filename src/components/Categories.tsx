import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      title: "Запчасти для автомобиля",
      description:
        "Широкий выбор оригинальных и неоригинальных запчастей для всех марок авто",
      iconName: "Car",
      color: "bg-blue-500",
      count: 15420,
    },
    {
      title: "Тормоза",
      description:
        "Тормозные диски, барабаны и комплектующие для безопасной езды",
      iconName: "Disc",
      color: "bg-red-500",
      count: 3240,
    },
    {
      title: "Колодки",
      description:
        "Тормозные колодки высокого качества для любых условий эксплуатации",
      iconName: "Square",
      color: "bg-orange-500",
      count: 2890,
    },
    {
      title: "Масла",
      description:
        "Моторные, трансмиссионные и гидравлические масла от ведущих брендов",
      iconName: "Droplets",
      color: "bg-amber-500",
      count: 1650,
    },
    {
      title: "Шины",
      description:
        "Летние, зимние и всесезонные шины для легковых и грузовых автомобилей",
      iconName: "Circle",
      color: "bg-gray-600",
      count: 4320,
    },
    {
      title: "Инструменты",
      description:
        "Профессиональные инструменты для ремонта и обслуживания автомобилей",
      iconName: "Wrench",
      color: "bg-green-500",
      count: 2150,
    },
    {
      title: "Предохранители",
      description:
        "Автомобильные предохранители и реле для защиты электрических цепей",
      iconName: "Zap",
      color: "bg-purple-500",
      count: 890,
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Каталог автозапчастей
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите именно то, что нужно вашему автомобилю в нашем обширном
            каталоге
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              iconName={category.iconName}
              color={category.color}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
