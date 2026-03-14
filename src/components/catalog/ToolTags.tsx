type Props = {
  tags: string[];
};

export default function ToolTags({ tags }: Props) {
  return (
    <section
      style={{
        marginBottom: "32px",
        padding: "20px 0", // Убираем рамку вокруг секции, оставляем только отступы
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ 
        fontSize: "14px", 
        fontWeight: 600, 
        color: "#6b7280", // Приглушенный серый для заголовка
        textTransform: "uppercase", 
        letterSpacing: "0.05em",
        marginBottom: "16px" 
      }}>
        Теги и категории
      </h2>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#f3f4f6", // Светло-серый фон
              color: "#374151", // Темно-серый текст
              borderRadius: "8px", // Мягкие углы вместо овальных
              padding: "6px 14px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "default",
              transition: "background 0.2s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}