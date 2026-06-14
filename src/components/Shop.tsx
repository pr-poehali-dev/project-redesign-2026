import { useState } from "react";

const packages = [
  {
    title: "Спальня",
    area: "до 20 м²",
    price: "15 000 ₽",
    description: "Матовый натяжной потолок под ключ",
    features: ["Замер бесплатно", "Монтаж за 1 день", "Гарантия 15 лет"],
    popular: false,
  },
  {
    title: "Гостиная",
    area: "до 35 м²",
    price: "24 000 ₽",
    description: "Глянцевый или матовый потолок с подсветкой",
    features: ["Замер бесплатно", "Монтаж за 1 день", "Подсветка в подарок", "Гарантия 15 лет"],
    popular: true,
  },
  {
    title: "Квартира",
    area: "до 80 м²",
    price: "от 55 000 ₽",
    description: "Многоуровневый потолок во всей квартире",
    features: ["Замер бесплатно", "Монтаж 2–3 дня", "Любой дизайн", "Гарантия 15 лет"],
    popular: false,
  },
];

export default function Shop() {
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  const handleOrder = (title: string) => {
    setSelected(title);
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "" });
  };

  return (
    <div className="bg-neutral-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Готовые пакеты</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight">
          Выберите подходящий вариант
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col p-8 border transition-all duration-300 ${
                pkg.popular
                  ? "border-white bg-white text-neutral-900"
                  : "border-neutral-700 bg-neutral-900 text-white"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-4 right-4 text-xs uppercase tracking-wide bg-neutral-900 text-white px-3 py-1">
                  Популярное
                </span>
              )}
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-1">{pkg.title}</h4>
                <p className={`text-sm ${pkg.popular ? "text-neutral-500" : "text-neutral-400"}`}>
                  {pkg.area}
                </p>
              </div>
              <p className={`text-sm mb-6 ${pkg.popular ? "text-neutral-600" : "text-neutral-400"}`}>
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${pkg.popular ? "text-neutral-700" : "text-neutral-300"}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-3xl font-bold">{pkg.price}</span>
                <button
                  onClick={() => handleOrder(pkg.title)}
                  className={`px-5 py-2 text-sm uppercase tracking-wide border transition-all duration-300 ${
                    pkg.popular
                      ? "bg-neutral-900 text-white border-neutral-900 hover:bg-white hover:text-neutral-900 hover:border-neutral-900"
                      : "bg-white text-neutral-900 border-white hover:bg-transparent hover:text-white"
                  }`}
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        {selected && !sent && (
          <div className="border border-neutral-700 p-8 max-w-lg mx-auto">
            <h3 className="text-white text-xl font-bold mb-2">Заявка на пакет «{selected}»</h3>
            <p className="text-neutral-400 text-sm mb-6">Оставьте контакты — мы перезвоним в течение 30 минут</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm placeholder-neutral-500 outline-none focus:border-white transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm placeholder-neutral-500 outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-neutral-900 px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        )}

        {sent && (
          <div className="border border-neutral-700 p-8 max-w-lg mx-auto text-center">
            <p className="text-white text-xl font-bold mb-2">Заявка принята!</p>
            <p className="text-neutral-400 text-sm">Мы свяжемся с вами в течение 30 минут.</p>
          </div>
        )}
      </div>
    </div>
  );
}
