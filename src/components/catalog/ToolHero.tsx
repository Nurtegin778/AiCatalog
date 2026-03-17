import { Tool } from "@/types/tool";
import { 
  Heart, 
  Globe, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  MousePointer2
} from "lucide-react";

type Props = {
  tool: Tool;
};

export default function ToolHero({ tool }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 p-12 bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] font-sans border border-gray-100">
      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="flex flex-col">
        
        {/* Логотип и Название */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] flex items-center justify-center border border-[#E5E7EB] shrink-0 shadow-sm">
            {tool.logo_url ? (
              <img 
                src={tool.logo_url} 
                alt={tool.name} 
                className="w-10 h-10 object-contain" 
              />
            ) : (
              <Zap size={28} className="text-[#3168EB] fill-[#3168EB]" />
            )}
          </div>
          <h1 className="text-4xl font-extrabold text-[#1F2937] tracking-tight">
            {tool.name}
          </h1>
        </div>

        {/* Описание */}
        <div className="flex flex-col gap-6 mb-10">
          <p className="text-[22px] text-[#4B5563] leading-snug font-medium max-w-2xl">
            {tool.short_description}
          </p>
          
          {/* Категория и Теги */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-4 py-2 bg-[#F3F4F6] text-[#4B5563] rounded-lg text-sm font-semibold border border-gray-100">
              {tool.category}
            </span>
            <div className="h-4 w-[1px] bg-gray-300 mx-2" />
            <span className="text-sm text-[#6B7280] font-medium mr-1">Теги:</span>
            {tool.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-sm text-[#6B7280] font-medium hover:text-[#3168EB] cursor-default transition-colors">
                {tag}{tag !== tool.tags[2] ? ',' : ''}
              </span>
            ))}
          </div>

          {/* Статусы */}
          <div className="flex gap-8 items-center mt-2">
            <div className="flex items-center gap-2 text-[15px] font-bold text-[#1F2937]">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <Heart size={16} className="text-[#3168EB] fill-[#3168EB]" />
              </div>
              <span>Бесплатно</span>
            </div>
            <div className="flex items-center gap-2 text-[15px] text-[#6B7280] font-medium">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                <Globe size={16} className="text-[#3168EB]" /> 
              </div>
              <span>Есть Free Trial</span>
            </div>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-4 mb-12">
          <a
            href={tool.website_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-4 rounded-xl bg-[#3168EB] text-white no-underline font-bold text-lg shadow-[0_10px_20px_rgba(49,104,235,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Открыть сайт <MousePointer2 size={20} />
          </a>
          <button
            className="px-10 py-4 rounded-xl bg-[#F3F4F6] text-[#1F2937] font-bold text-lg hover:bg-[#E5E7EB] transition-colors"
          >
            Подробнее
          </button>
        </div>

        {/* Основные функции */}
        <div className="mt-auto pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold text-[#1F2937] mb-6">Основные функции</h3>
          <ul className="grid grid-cols-1 gap-4">
            {tool.features?.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-4 text-[#4B5563] text-base font-medium group">
                <div className="flex-shrink-0 text-[#3168EB]">
                  <CheckCircle2 size={22} strokeWidth={2.5} />
                </div>
                <span className="group-hover:text-[#1F2937] transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="flex flex-col gap-6">
        {/* Изображение */}
        <div className="relative group overflow-hidden rounded-[28px] shadow-2xl border border-gray-100">
          <img
            src={tool.image_url}
            alt={tool.name}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Инфо-карточка */}
        <div className="bg-[#FFFFFF] border border-[#F3F4F6] rounded-[28px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <Zap size={20} className="text-[#3168EB] mt-1 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">Цена</span>
                <span className="text-[#1F2937] font-semibold text-base">{tool.pricing}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe size={20} className="text-[#3168EB] mt-1 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">Для чего</span>
                <span className="text-[#1F2937] font-semibold text-base">{tool.best_for}</span>
              </div>
            </div>

            <div className="pt-4 space-y-3 border-t border-gray-50">
              <div className="flex items-center gap-3 text-[#10B981] bg-green-50/50 px-4 py-3 rounded-xl border border-green-100/50">
                <CheckCircle2 size={18} strokeWidth={3} />
                <span className="font-bold text-sm">{tool.pros?.[0]}</span>
              </div>
              <div className="flex items-center gap-3 text-[#EF4444] bg-red-50/50 px-4 py-3 rounded-xl border border-red-100/50">
                <AlertCircle size={18} strokeWidth={3} />
                <span className="font-bold text-sm">{tool.cons?.[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}