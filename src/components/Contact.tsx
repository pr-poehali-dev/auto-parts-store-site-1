import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы помочь с выбором запчастей и ответить на ваши вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Наш адрес
                </h3>
                <p className="text-gray-600">
                  г. Москва, ул. Автозаводская, д. 23
                  <br />
                  Метро "Автозаводская", выход №2
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Телефоны
                </h3>
                <p className="text-gray-600">
                  <a href="tel:+74951234567" className="hover:text-blue-600">
                    +7 (495) 123-45-67
                  </a>
                  <br />
                  <a href="tel:+79161234567" className="hover:text-blue-600">
                    +7 (916) 123-45-67
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Режим работы
                </h3>
                <p className="text-gray-600">
                  Пн-Пт: 9:00 - 19:00
                  <br />
                  Сб: 10:00 - 16:00
                  <br />
                  Вс: выходной
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@avtozapchasti.ru"
                    className="hover:text-blue-600"
                  >
                    info@avtozapchasti.ru
                  </a>
                  <br />
                  <a
                    href="mailto:sales@avtozapchasti.ru"
                    className="hover:text-blue-600"
                  >
                    sales@avtozapchasti.ru
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Оставьте заявку
            </h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" className="w-full" />
              </div>
              <div>
                <Input type="tel" placeholder="Телефон" className="w-full" />
              </div>
              <div>
                <Input placeholder="Марка и модель авто" className="w-full" />
              </div>
              <div>
                <textarea
                  placeholder="Что вам нужно?"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
