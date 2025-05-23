import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "Уход за лицом",
      icon: "Sparkles",
      products: "120+ товаров",
      color: "from-pink-400 to-pink-500",
    },
    {
      name: "Макияж",
      icon: "Palette",
      products: "85+ товаров",
      color: "from-purple-400 to-purple-500",
    },
    {
      name: "Парфюмерия",
      icon: "Flower",
      products: "45+ товаров",
      color: "from-green-400 to-green-500",
    },
    {
      name: "Уход за волосами",
      icon: "Scissors",
      products: "60+ товаров",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Увлажняющий крем для лица",
      brand: "Natura Beauty",
      price: "2,490 ₽",
      oldPrice: "3,200 ₽",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Сыворотка с витамином C",
      brand: "Glow Lab",
      price: "1,890 ₽",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Тушь для ресниц объёмная",
      brand: "Beauty Pro",
      price: "1,250 ₽",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1583241475880-74d9b8f5c0fb?w=400&h=400&fit=crop",
    },
  ];

  const benefits = [
    {
      icon: "Leaf",
      title: "100% натуральные ингредиенты",
      description: "Только проверенные компоненты природного происхождения",
    },
    {
      icon: "Shield",
      title: "Безопасность и качество",
      description:
        "Все продукты сертифицированы и прошли дерматологические тесты",
    },
    {
      icon: "Heart",
      title: "Забота о планете",
      description: "Экологичная упаковка и поддержка устойчивого развития",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.poehali.dev/files/9335a5c8-f4cd-4a52-8d37-7455961f8ff5.png"
                alt="Forma Logo"
                className="h-12 w-auto"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-pink-500 bg-clip-text text-transparent font-montserrat">
                Forma
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Бренды
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                О нас
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-green-50">
                <Icon name="Search" size={20} className="text-gray-600" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-pink-50">
                <Icon name="Heart" size={20} className="text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-yellow-50 relative"
              >
                <Icon name="ShoppingBag" size={20} className="text-gray-600" />
                <Badge className="absolute -top-2 -right-2 bg-pink-500 text-white min-w-5 h-5 text-xs">
                  3
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-yellow-200/30 to-pink-200/30"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-bold text-gray-800 mb-8 font-montserrat leading-tight">
              Натуральная красота
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                в каждом дне
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Откройте для себя мир органической косметики премиум-класса.
              Продукты, созданные природой для вашей естественной красоты и
              здоровья.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 text-lg rounded-full shadow-lg"
              >
                Открыть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-400 text-green-700 hover:bg-green-50 px-10 py-4 text-lg rounded-full"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 font-montserrat text-gray-800">
          Категории товаров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 bg-white/80 backdrop-blur overflow-hidden"
            >
              <CardHeader className="text-center pb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon name={category.icon} size={36} className="text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat text-gray-800 mb-2">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {category.products}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-16">
          <h2 className="text-4xl font-bold text-center mb-16 font-montserrat text-gray-800">
            Почему выбирают Forma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-montserrat text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-800">
            Популярные товары
          </h2>
          <Button
            variant="outline"
            className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full"
          >
            Все товары
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur overflow-hidden rounded-2xl"
            >
              <div className="aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 border-0 px-3 py-1"
                  >
                    {product.brand}
                  </Badge>
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-6 font-montserrat text-gray-800 leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-800">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-4 py-2"
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://cdn.poehali.dev/files/9335a5c8-f4cd-4a52-8d37-7455961f8ff5.png"
                  alt="Forma Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="text-2xl font-bold font-montserrat">
                  Forma
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Натуральная косметика премиум-класса для естественной красоты и
                здоровья кожи
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-montserrat text-lg">
                Каталог
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Уход за лицом
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Макияж
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Парфюмерия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-montserrat text-lg">
                Помощь
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Возврат
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:text-pink-300"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-montserrat text-lg">
                Подписка
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Получайте новости о скидках и новинках
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-gray-700 text-white px-4 py-3 rounded-l-xl flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-l-none rounded-r-xl px-6">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-12 text-center text-gray-400">
            <p>&copy; 2024 Forma. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
