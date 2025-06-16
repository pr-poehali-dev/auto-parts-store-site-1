import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Качественные
              <span className="text-blue-400 block">автозапчасти</span>
              для вашего авто
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Широкий ассортимент оригинальных и аналоговых запчастей от ведущих
              производителей. Быстрая доставка по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <Icon name="Search" className="w-5 h-5 mr-2" />
                Найти запчасти
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Консультация
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50K+</div>
                <div className="text-sm text-gray-400">товаров в наличии</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">поддержка клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99%</div>
                <div className="text-sm text-gray-400">довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=600&h=400&fit=crop&crop=center"
                alt="Автозапчасти"
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 rounded-full p-4">
                <Icon name="Wrench" className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
