import { Tool } from "@/types/tool";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

type Props = {
  tools: Partial<Tool>[]; 
};

export default function SimilarTools({ tools }: Props) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="mt-10 font-sans">
      <h2 className="text-[20px] font-bold text-[#111827] mb-5 px-1">
        Похожие инструменты
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((item) => (
          <Link
            href={`/catalog/${item.slug}`}
            key={item.id}
            className="group relative h-[220px] rounded-[24px] overflow-hidden cursor-pointer flex items-end shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            {/* 1. Фоновое изображение (Z-INDEX 1) */}
            <img
              src={item.image_url}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover z-[1] transition-transform duration-700 group-hover:scale-110"
            />

            {/* 2. Градиентное наложение (Z-INDEX 2) */}
            {/* Сделал градиент чуть глубже для лучшей читаемости */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[2] opacity-80 transition-opacity group-hover:opacity-90" />

            {/* 3. Контент поверх карточки (Z-INDEX 3) */}
            <div className="relative z-[3] p-6 w-full flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Мини-иконка или заглушка */}
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden">
  {item.logo_url ? (
    <img
      src={item.logo_url}
      alt={item.name || "Logo"}
      className="w-10 h-10 object-cover rounded-xl"
    />
  ) : (
    <Zap size={18} className="text-white/80" />
  )}
</div>
                
                <div>
                  <h3 className="m-0 text-white text-[18px] font-bold leading-tight tracking-tight">
                    {item.name}
                  </h3>
                  <p className="m-0 mt-1 text-white/70 text-[13px] font-medium">
                    {item.category || "AI Tool"}
                  </p>
                </div>
              </div>

              {/* Кнопка "Подробнее" */}
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl text-[#111] text-[13px] font-bold transition-all duration-300 hover:bg-[#3168EB] hover:text-white group-hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]">
                Подробнее 
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Тонкая рамка-индикатор при ховере */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[24px] z-[4] transition-colors duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}