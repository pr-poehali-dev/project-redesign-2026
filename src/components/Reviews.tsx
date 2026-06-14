const reviews = [
  {
    name: "Анна К.",
    location: "Москва",
    text: "Сделали потолок в гостиной за один день. Мастера аккуратные, мусора не оставили. Глянец получился идеальный — отражает свет, комната стала визуально выше.",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    location: "Санкт-Петербург",
    text: "Заказывал многоуровневый потолок со скрытой подсветкой. Результат превзошёл ожидания! Цена оказалась точно такой, как в смете — никаких сюрпризов.",
    rating: 5,
  },
  {
    name: "Марина Р.",
    location: "Краснодар",
    text: "Обращалась уже второй раз — теперь в спальне. Качество на высоте, замерщик приехал в день обращения. Рекомендую всем знакомым.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Отзывы клиентов</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Нам доверяют тысячи семей
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="border border-neutral-200 p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-neutral-900 text-lg">★</span>
                ))}
              </div>
              <p className="text-neutral-700 text-base leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <p className="font-semibold text-neutral-900">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
