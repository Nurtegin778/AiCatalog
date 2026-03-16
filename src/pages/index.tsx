export default function Home() {
  const categories = [
    "Генерация текста",
    "Генерация изображений",
    "Код",
    "Видео",
    "Музыка",
    "Продуктивность",
    "Презентация",
    "Дизайн"
  ];
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Каталог нейросетей
        </h1>

        <p className="mt-2 text-gray-600">
          Найдите лучшие AI-инструменты для своих задач
        </p>

        <input
          type="text"
          placeholder="Поиск нейросетей..."
          className="mt-6 w-full rounded-lg border p-3 text-gray-900"
        />
        <div className="mt-6 flex flex-wrap gap-5">
         {categories.map((category) => (
          <button
           key={category}
           className="rounded-full bg-white border px-4 py-2 text-sm hover:bg-gray-100"
          >
           {category}
          </button>
        ))}
</div>

      </div>
    </main>
  );
}