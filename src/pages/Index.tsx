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
    { name: "Уход за лицом", icon: "Sparkles", products: "120+ товаров" },
    { name: "Макияж", icon: "Palette", products: "85+ товаров" },
    { name: "Парфюмерия", icon: "Flower", products: "45+ товаров" },
    { name: "Уход за волосами", icon: "Scissors", products: "60+ товаров" },
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
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Сыворотка с витамином C",
      brand: "Glow Lab",
      price: "1,890 ₽",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Тушь для ресниц объёмная",
      brand: "Beauty Pro",
      price: "1,250 ₽",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1583241475880-74d9b8f5c0fb?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/9335a5c8-f4cd-4a52-8d37-7455961f8ff5.png"
                alt="Forma Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-800 font-montserrat">
                Forma
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Бренды
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                О нас
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={20} />
                <Badge className="ml-1 bg-pink-500">3</Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-green-100 rounded-3xl p-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Естественная красота
            <br />
            <span className="text-pink-500">каждый день</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя мир натуральной косметики и ухода. Только
            проверенные бренды и качественные продукты для вашей красоты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8"
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-400 text-green-600 hover:bg-green-50"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Категории товаров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 bg-white/70 backdrop-blur"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={category.icon}
                    size={32}
                    className="text-pink-500"
                  />
                </div>
                <CardTitle className="text-lg font-montserrat">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {category.products}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat">
            Популярные товары
          </h2>
          <Button
            variant="outline"
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            Все товары
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    {product.brand}
                  </Badge>
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3 font-montserrat">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
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
                    className="bg-pink-500 hover:bg-pink-600 text-white"
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.poehali.dev/files/9335a5c8-f4cd-4a52-8d37-7455961f8ff5.png"
                  alt="Forma Logo"
                  className="h-8 w-auto brightness-0 invert"
                />
                <span className="text-xl font-bold font-montserrat">Forma</span>
              </div>
              <p className="text-gray-400">
                Натуральная косметика для естественной красоты
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход за лицом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Макияж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Парфюмерия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Помощь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Подписка</h4>
              <p className="text-gray-400 mb-4">
                Получайте новости о скидках и новинках
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg flex-1"
                />
                <Button className="bg-pink-500 hover:bg-pink-600 rounded-l-none">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Forma. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
