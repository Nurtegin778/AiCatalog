import { Hash } from "lucide-react";

type Props = {
  tags: string[];
};

export default function ToolTags({ tags }: Props) {
  if (!tags || tags.length === 0) return null;

  return (
    <section className="py-6 font-sans">
      {/* Приглушенный заголовок в стиле Monkeytype для чистоты интерфейса */}
      <div className="flex items-center gap-2 mb-4">
        <Hash size={14} className="text-[#9CA3AF]" />
        <h2 className="text-[12px] font-bold text-[#9CA3AF] uppercase tracking-[0.15em]">
          Теги и категории
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-white border border-[#F3F4F6] text-[#4B5563] text-[13px] font-bold rounded-xl shadow-sm transition-all duration-300 hover:border-[#3168EB]/30 hover:text-[#3168EB] hover:bg-[#3168EB]/5 cursor-default"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
}