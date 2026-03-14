import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { supabase } from "@/lib/supabase";
import { Tool } from "@/types/tool";
import ToolHero from "@/components/catalog/ToolHero";
import ToolAudience from "@/components/catalog/ToolAudience";
import ToolProsCons from "@/components/catalog/ToolProsCons";
import ToolFeatures from "@/components/catalog/ToolFeatures";
import ToolTags from "@/components/catalog/ToolTags";
import SimilarTools from "@/components/catalog/SimilarTools";

export default function ToolPage({
  tool,
  similar,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: "80px" }}>
      <main
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Основной контейнер-карточка (единый блок как на макете) */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "32px",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
            border: "1px solid #f1f5f9",
            overflow: "hidden",
          }}
        >
          {/* Главный блок: Заголовок, описание и правая панель с ценой */}
          <ToolHero tool={tool} />

          {/* Контентная часть под Hero */}
          <div style={{ padding: "0 40px 40px" }}>
            
            <hr style={{ border: "0", borderTop: "1px solid #f1f5f9", marginBottom: "32px" }} />

            {/* Список функций на серой подложке */}
            <ToolFeatures features={tool.features} />

            {/* Блок Кому подойдет (сетка с иконками) */}
            <ToolAudience audience={tool.audience} />

            {/* Плюсы и минусы в две колонки */}
            <ToolProsCons pros={tool.pros} cons={tool.cons} />

            {/* Теги в самом низу карточки */}
            <ToolTags tags={tool.tags} />
          </div>
        </div>

        {/* Секция похожих инструментов (вне основной карточки) */}
        <SimilarTools tools={similar} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  tool: Tool;
  similar: Partial<Tool>[];
}> = async (context) => {
  const { id } = context.params ?? {};

  if (!id || typeof id !== "string") {
    return { notFound: true };
  }

  // Получаем основной инструмент
  const { data: tool, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", id)
    .single();

  if (error || !tool) {
    return { notFound: true };
  }

  // Получаем похожие инструменты (из той же категории)
  const { data: similar } = await supabase
    .from("tools")
    .select("id, name, image_url, category, slug")
    .eq("category", tool.category)
    .neq("id", tool.id)
    .limit(3);

  return {
    props: {
      tool: tool as Tool,
      similar: (similar || []) as Partial<Tool>[],
    },
  };
};