import { Tool } from "@/types/tool";
import { ArrowRight } from "lucide-react";

type Props = {
  tools: Partial<Tool>[]; // Принимаем массив объектов (нужны id, name, short_description, image_url)
};

export default function SimilarTools({ tools }: Props) {
  return (
    <section style={{ marginTop: "40px", fontFamily: "sans-serif" }}>
      <h2 style={{ 
        fontSize: "20px", 
        fontWeight: 700, 
        color: "#111827", 
        marginBottom: "20px" 
      }}>
        Похожие инструменты
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
      }}>
        {tools.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              height: "200px",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {/* Фоновое изображение */}
            <img
              src={item.image_url}
              alt={item.name}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            {/* Градиентное наложение (Overlay) для читаемости текста */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              zIndex: 2,
            }} />

            {/* Контент поверх карточки */}
            <div style={{
              position: "relative",
              zIndex: 3,
              padding: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <h3 style={{ 
                  margin: 0, 
                  color: "#fff", 
                  fontSize: "18px", 
                  fontWeight: 700 
                }}>
                  {item.name}
                </h3>
                <p style={{ 
                  margin: "4px 0 0", 
                  color: "rgba(255,255,255,0.8)", 
                  fontSize: "13px" 
                }}>
                  {item.category || "AI Tool"}
                </p>
              </div>

              <button style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#ffffff",
                border: "none",
                color: "#111",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                Подробнее <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}