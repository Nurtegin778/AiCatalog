import { Audience } from "@/types/tool";
import { Users, Lightbulb, MonitorPlay, GraduationCap, Layout } from "lucide-react";

type Props = {
  audience: Audience[];
};

// Маппинг иконок, если в БД приходят строки-названия
const iconMap: Record<string, React.ReactNode> = {
  students: <GraduationCap size={24} />,
  creatives: <Lightbulb size={24} />,
  marketing: <MonitorPlay size={24} />,
  default: <Users size={24} />,
};

export default function ToolAudience({ audience }: Props) {
  // Цвета для мягких градиентов под иконки (как на макете)
  const bgStyles = [
    { bg: "#eef2ff", color: "#6366f1" }, // Индиго
    { bg: "#fff7ed", color: "#f97316" }, // Оранжевый
    { bg: "#f5f3ff", color: "#8b5cf6" }, // Фиолетовый
  ];

  return (
    <section style={{ padding: "24px 0", fontFamily: "sans-serif" }}>
      <h2 style={{ 
        fontSize: "20px", 
        fontWeight: 700, 
        color: "#111827", 
        marginBottom: "20px" 
      }}>
        Кому подойдет:
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "16px",
        }}
      >
        {audience.map((item, index) => {
          const style = bgStyles[index % bgStyles.length];
          
          return (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px",
                background: "#ffffff",
                border: "1px solid #f1f5f9",
                borderRadius: "20px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Контейнер для иконки */}
              <div
                style={{
                  minWidth: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: style.bg,
                  color: style.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Если в item.icon просто строка-эмодзи, выводим её, иначе пробуем маппинг */}
                {item.icon.length > 2 ? (iconMap[item.icon] || iconMap.default) : <span style={{fontSize: '24px'}}>{item.icon}</span>}
              </div>

              {/* Текстовый блок */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: "16px", 
                  fontWeight: 700, 
                  color: "#111827" 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: "14px", 
                  color: "#64748b", 
                  lineHeight: "1.4" 
                }}>
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