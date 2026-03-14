import { Check } from "lucide-react";

type Props = {
  features: string[];
};

export default function ToolFeatures({ features }: Props) {
  return (
    <section
      style={{
        padding: "20px 0", // Убираем внешние рамки, так как они теперь в общем контейнере main
        fontFamily: "sans-serif",
      }}
    >
      <h2 
        style={{ 
          fontSize: "20px", 
          fontWeight: 700, 
          color: "#1a1a1a", 
          marginBottom: "20px",
          marginTop: 0 
        }}
      >
        Основные функции
      </h2>

      <ul style={{ 
        listStyle: "none", 
        padding: 0, 
        margin: 0,
        display: "flex",
        flexDirection: "column",
        background: "#f9fafb", // Легкий серый фон для всего списка, как на макете
        borderRadius: "16px",
        overflow: "hidden"
      }}>
        {features.map((feature, index) => (
          <li 
            key={index} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "12px",
              padding: "16px 24px",
              fontSize: "15px",
              color: "#374151",
              borderBottom: index !== features.length - 1 ? "1px solid #edf2f7" : "none"
            }}
          >
            <Check size={18} color="#2563eb" strokeWidth={3} />
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}