import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Все товары сертифицированы и имеют официальную гарантию производителя",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем по Москве в день заказа, по России — за 1-3 дня",
    },
    {
      icon: "Users",
      title: "Экспертная поддержка",
      description:
        "Наши специалисты помогут подобрать запчасти под ваш автомобиль",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description:
        "Принимаем наличные, карты, переводы и предоставляем рассрочку",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Более 15 лет мы специализируемся на продаже автозапчастей. За это
              время мы обслужили более 100,000 клиентов и заработали репутацию
              надёжного поставщика качественных комплектующих.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={feature.icon as any}
                      className="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=500&fit=crop"
              alt="Склад автозапчастей"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">лет на рынке</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-orange-500 p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-sm text-orange-100">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
