import { Audience } from "@/types/tool";
import { 
  Users, Lightbulb, MonitorPlay, GraduationCap, 
  BookOpen, Video, Palette, Code, Briefcase, Sparkles, Zap 
} from "lucide-react";

type Props = {
  audience: Audience[];
};

const iconMap: Record<string, React.ElementType> = {
  book: BookOpen,
  bulb: Lightbulb,
  video: Video,
  palette: Palette,
  code: Code,
  briefcase: Briefcase,
  sparkles: Sparkles,
  students: GraduationCap,
  marketing: MonitorPlay,
  zap: Zap,
  default: Users,
};

export default function ToolAudience({ audience }: Props) {
  if (!audience || audience.length === 0) return null;

  const colorSchemes = [
    { bg: "bg-indigo-50/50", text: "text-indigo-600", border: "group-hover:border-indigo-200", dot: "bg-indigo-400" },
    { bg: "bg-amber-50/50", text: "text-amber-600", border: "group-hover:border-amber-200", dot: "bg-amber-400" },
    { bg: "bg-purple-50/50", text: "text-purple-600", border: "group-hover:border-purple-200", dot: "bg-purple-400" },
    { bg: "bg-emerald-50/50", text: "text-emerald-600", border: "group-hover:border-emerald-200", dot: "bg-emerald-400" },
  ];

  return (
    <section className="py-0 font-sans">
      {/* Заголовок выровнен по высоте с ToolFeatures */}
      <div className="flex items-center gap-3 mb-6 px-1">
        <div className="w-1.5 h-6 bg-gradient-to-b from-[#3168EB] to-[#6366f1] rounded-full" />
        <h2 className="text-[22px] font-[900] text-[#1F2937] tracking-tight">
          Целевая аудитория
        </h2>
      </div>

      {/* Изменено на grid-cols-1 для ровного вертикального ряда в боковой панели */}
      <div className="grid grid-cols-1 gap-4">
        {audience.map((item, index) => {
          const scheme = colorSchemes[index % colorSchemes.length];
          const IconComponent = iconMap[item.icon] || iconMap.default;
          
          return (
            <div
              key={item.title}
              className={`group relative flex items-center gap-5 p-5 bg-[#F9FAFB]/50 border border-gray-100 rounded-[24px] transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] ${scheme.border} hover:-translate-y-0.5`}
            >
              <div className="relative shrink-0">
                <div className={`w-12 h-12 rounded-xl ${scheme.bg} ${scheme.text} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                  <IconComponent size={22} strokeWidth={2.5} />
                </div>
                <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white ${scheme.dot}`} />
              </div>

              <div className="relative flex flex-col">
                <h3 className="text-[16px] font-black text-[#1F2937] leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] leading-snug font-medium mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}