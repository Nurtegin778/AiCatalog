// src/components/catalog/ToolFeatures.tsx
import { Check } from "lucide-react";

interface Props {
  features: string[]; // Строгое определение пропсов для устранения ошибок TS
}

export default function ToolFeatures({ features }: Props) {
  // Защита от пустого массива, чтобы не рендерить пустой блок
  if (!features || features.length === 0) return null;

  return (
    <section className="py-4 font-sans antialiased">
      {/* Заголовок с небольшим визуальным акцентом */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-[#3168EB] rounded-full" />
        <h2 className="text-[22px] font-black text-[#1F2937] tracking-tight">
          Основные функции
        </h2>
      </div>

      <ul className="list-none p-0 m-0 grid grid-cols-1 gap-3">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="group flex items-center gap-4 px-6 py-5 bg-[#F9FAFB] border border-[#F1F5F9] rounded-[20px] transition-all duration-300 hover:bg-white hover:border-[#3168EB]/30 hover:shadow-[0_10px_25px_-5px_rgba(49,104,235,0.05)] hover:-translate-y-0.5"
          >
            {/* Контейнер иконки с внутренним свечением */}
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3168EB]/5 text-[#3168EB] group-hover:bg-[#3168EB] group-hover:text-white transition-all duration-300 shadow-inner">
              <Check size={16} strokeWidth={3} />
            </div>

            {/* Текст функции */}
            <span className="text-[15px] text-[#4B5563] font-semibold leading-snug group-hover:text-[#1F2937] transition-colors">
              {feature}
            </span>

            {/* Декоративная стрелка, появляющаяся при ховере */}
            <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
               <div className="w-1.5 h-1.5 rounded-full bg-[#3168EB]" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}