import { Tool } from "@/types/tool";
import { 
  Heart, 
  Globe, 
  ClipboardList, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink 
} from "lucide-react";

type Props = {
  tool: Tool;
};

export default function ToolHero({ tool }: Props) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "48px",
        padding: "40px",
        background: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* ЛЕВАЯ КОЛОНКА */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Логотип и Название */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ 
            width: "56px", 
            height: "56px", 
            borderRadius: "14px", 
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            border: "1px solid #e2e8f0",
            overflow: "hidden", 
            flexShrink: 0,
            boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
          }}>
            {tool.logo_url ? (
              <img 
                src={tool.logo_url} 
                alt={tool.name} 
                style={{ 
                  width: "70%", 
                  height: "70%", 
                  objectFit: "contain" 
                }} 
              />
            ) : (
              <Zap size={24} color="#6366f1" fill="#6366f1" />
            )}
          </div>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: 850, 
            margin: 0, 
            color: "#111827", 
            letterSpacing: "-0.03em" 
          }}>
            {tool.name}
          </h1>
        </div>

        {/* Информационный блок (используем div вместо p для всей группы) */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ 
            fontSize: "19px", 
            color: "#4b5563", 
            marginBottom: "24px", 
            lineHeight: "1.6",
            margin: "0 0 24px 0" // Четко задаем отступы
          }}>
            {tool.short_description}
          </p>
          
          {/* Теги */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            <span style={{ 
              padding: "6px 14px", 
              background: "#2563eb", 
              color: "#ffffff", 
              borderRadius: "8px", 
              fontSize: "13px", 
              fontWeight: 600 
            }}>
              {tool.category}
            </span>
            {tool.tags?.slice(0, 3).map(tag => (
              <span key={tag} style={{ 
                padding: "6px 14px", 
                background: "#f1f5f9", 
                color: "#475569", 
                borderRadius: "8px", 
                fontSize: "13px",
                fontWeight: 500
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Статусы (Бесплатно / Триалы) */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "14px", 
              fontWeight: 600, 
              color: "#0f172a" 
            }}>
              <Heart size={18} color="#2563eb" fill="#2563eb" style={{ opacity: 0.8 }} />
              <span>Бесплатно</span>
            </div>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "14px", 
              color: "#64748b", 
              fontWeight: 500 
            }}>
              <Globe size={16} /> 
              <span>Есть Free Trial</span>
            </div>
          </div>
        </div>

        {/* Кнопки действий */}
        <div style={{ display: "flex", gap: "14px", marginTop: "12px" }}>
          <a
            href={tool.website_url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "14px 32px", borderRadius: "12px",
              background: "#2563eb", color: "white", textDecoration: "none",
              fontWeight: 600, fontSize: "16px",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.2)"
            }}
          >
            Открыть сайт <ExternalLink size={18} />
          </a>
          <button
            style={{
              padding: "14px 32px", borderRadius: "12px",
              background: "#ffffff", border: "1px solid #e2e8f0",
              color: "#1e293b", fontWeight: 600, fontSize: "16px", cursor: "pointer"
            }}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ position: "relative" }}>
          <img
            src={tool.image_url}
            alt={tool.name}
            style={{
              width: "100%", aspectRatio: "16/10", borderRadius: "20px",
              objectFit: "cover", boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
              display: "block"
            }}
          />
          <div style={{ 
            position: "absolute", top: "12px", right: "12px", 
            background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)",
            padding: "4px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 700
          }}>
            AI Preview
          </div>
        </div>

        {/* Карточка характеристик */}
        <div style={{ 
          border: "1px solid #f1f5f9", borderRadius: "20px", padding: "24px",
          display: "flex", flexDirection: "column", gap: "16px", background: "#f8fafc"
        }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <ClipboardList size={20} color="#6366f1" />
            <span style={{ color: "#334155", fontSize: "15px" }}>
              <strong>Цена:</strong> {tool.pricing}
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Globe size={20} color="#3b82f6" />
            <span style={{ color: "#334155", fontSize: "15px" }}>
              <strong>Для чего:</strong> {tool.best_for}
            </span>
          </div>
          
          <hr style={{ border: "0", borderTop: "1px solid #e2e8f0", margin: "4px 0" }} />
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#16a34a", fontWeight: 600 }}>
            <CheckCircle2 size={18} />
            <span>{tool.pros?.[0] || "Высокое качество"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#dc2626", fontWeight: 600 }}>
            <AlertCircle size={18} />
            <span>{tool.cons?.[0] || "Ограниченный доступ"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}