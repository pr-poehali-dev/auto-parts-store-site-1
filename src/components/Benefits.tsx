import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Принимаем заказы круглосуточно через сайт",
      color: "bg-blue-500",
    },
    {
      icon: "Shield",
      title: "Гарантия 2 года",
      description: "На все оригинальные запчасти",
      color: "bg-green-500",
    },
    {
      icon: "Truck",
      title: "Доставка от 1 дня",
      description: "По Москве и области",
      color: "bg-orange-500",
    },
    {
      icon: "Percent",
      title: "Скидки до 30%",
      description: "Постоянным клиентам",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div
                className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon
                  name={benefit.icon as any}
                  className="w-8 h-8 text-white"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
