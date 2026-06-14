export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/86c5a263-92d9-46ff-91d2-29f6739b2c9f/files/1385912f-b2e9-43e2-84b8-c6fedd74ca5b.jpg"
          alt="Многоуровневый натяжной потолок с подсветкой"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Потолки, которые впечатляют</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Глянцевые, матовые и многоуровневые потолки со скрытой подсветкой. Безупречно ровная поверхность,
          чистый монтаж за один день и материалы, которые служат десятилетиями.
        </p>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Вызвать замерщика
        </a>
      </div>
    </div>
  );
}