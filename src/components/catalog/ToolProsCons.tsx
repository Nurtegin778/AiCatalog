import { CheckCircle2, MinusCircle } from "lucide-react";

type Props = {
  pros: string[];
  cons: string[];
};

export default function ToolProsCons({ pros, cons }: Props) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Две равные колонки
        gap: "24px",
        padding: "20px 0",
        fontFamily: "sans-serif",
      }}
    >
      {/* КОЛОНКА ПЛЮСОВ */}
      <div style={{
        padding: "24px",
        background: "#f0fdf4", // Очень легкий зеленый фон
        borderRadius: "20px",
        border: "1px solid #dcfce7"
      }}>
        <h3 style={{ 
          fontSize: "18px", 
          fontWeight: 700, 
          color: "#166534", 
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          Преимущества
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {pros.map((pro, index) => (
            <li
              key={index}
              style={{ 
                display: "flex", 
                gap: "10px", 
                alignItems: "flex-start", 
                marginBottom: "12px",
                fontSize: "15px",
                color: "#166534",
                lineHeight: "1.4"
              }}
            >
              <CheckCircle2 size={18} style={{ marginTop: "2px", flexShrink: 0 }} />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* КОЛОНКА МИНУСОВ */}
      <div style={{
        padding: "24px",
        background: "#fef2f2", // Очень легкий красный фон
        borderRadius: "20px",
        border: "1px solid #fee2e2"
      }}>
        <h3 style={{ 
          fontSize: "18px", 
          fontWeight: 700, 
          color: "#991b1b", 
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          Недостатки
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cons.map((con, index) => (
            <li
              key={index}
              style={{ 
                display: "flex", 
                gap: "10px", 
                alignItems: "flex-start", 
                marginBottom: "12px",
                fontSize: "15px",
                color: "#991b1b",
                lineHeight: "1.4"
              }}
            >
              <MinusCircle size={18} style={{ marginTop: "2px", flexShrink: 0 }} />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}