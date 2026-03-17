import { CheckCircle2, MinusCircle } from "lucide-react";

type Props = {
  pros: string[];
  cons: string[];
};

export default function ToolProsCons({ pros, cons }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 font-sans">
      {/* КОЛОНКА ПЛЮСОВ */}
      <div className="group p-8 bg-[#F0FDF4]/50 border border-[#DCFCE7] rounded-[32px] transition-all duration-300 hover:bg-[#F0FDF4] hover:shadow-[0_20px_40px_-15px_rgba(22,101,52,0.08)]">
        <h3 className="flex items-center gap-3 text-[18px] font-black text-[#166534] mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center shadow-sm">
            <CheckCircle2 size={18} strokeWidth={2.5} />
          </div>
          Преимущества
        </h3>
        <ul className="space-y-4">
          {pros.map((pro, index) => (
            <li
              key={index}
              className="flex gap-3 items-start text-[15px] text-[#166534]/90 font-semibold leading-relaxed"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#166534] mt-2.5 shrink-0 opacity-40" />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* КОЛОНКА МИНУСОВ */}
      <div className="group p-8 bg-[#FEF2F2]/50 border border-[#FEE2E2] rounded-[32px] transition-all duration-300 hover:bg-[#FEF2F2] hover:shadow-[0_20px_40px_-15px_rgba(153,27,27,0.08)]">
        <h3 className="flex items-center gap-3 text-[18px] font-black text-[#991B1B] mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] flex items-center justify-center shadow-sm">
            <MinusCircle size={18} strokeWidth={2.5} />
          </div>
          Недостатки
        </h3>
        <ul className="space-y-4">
          {cons.map((con, index) => (
            <li
              key={index}
              className="flex gap-3 items-start text-[15px] text-[#991B1B]/90 font-semibold leading-relaxed"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#991B1B] mt-2.5 shrink-0 opacity-40" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}