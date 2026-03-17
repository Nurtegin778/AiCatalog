import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { supabase } from "@/lib/supabase";
import { Tool } from "@/types/tool";
import ToolHero from "@/components/catalog/ToolHero";
import ToolAudience from "@/components/catalog/ToolAudience";
import ToolProsCons from "@/components/catalog/ToolProsCons";
import ToolFeatures from "@/components/catalog/ToolFeatures";
import ToolTags from "@/components/catalog/ToolTags";
import SimilarTools from "@/components/catalog/SimilarTools";
import Header from "@/components/Header";

export default function ToolPage({
  tool,
  similar,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <Header />
    <div className="bg-[#F1F3FA] min-h-screen selection:bg-[#3168EB]/10 selection:text-[#3168EB] font-sans antialiased">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#3168EB]/5 to-transparent pointer-events-none" />

      <main className="relative max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        
        <div className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-white overflow-hidden">
          
          <ToolHero tool={tool} />

          <div className="px-8 md:px-16 pb-16 space-y-16">
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

            {/* ИСПРАВЛЕННАЯ СЕТКА: items-stretch заставляет колонки быть одной высоты */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Левая колонка: Основные функции */}
              <div className="lg:col-span-7 flex flex-col">
                <ToolFeatures features={tool.features} />
              </div>

              {/* Правая колонка: Целевая аудитория */}
              {/* Убрали p-2 и лишний фон, чтобы выровнять по сетке макета */}
              <div className="lg:col-span-5 flex flex-col">
                <ToolAudience audience={tool.audience} />
              </div>
            </div>

            {/* Секция плюсов и минусов */}
            <div className="pt-8 border-t border-gray-50">
              <ToolProsCons pros={tool.pros} cons={tool.cons} />
            </div>

            {/* Теги */}
            <div className="pt-4">
              <ToolTags tags={tool.tags} />
            </div>
          </div>
        </div>
        
        <div className="mt-24 px-4">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl font-extrabold text-[#1F2937] tracking-tight whitespace-nowrap">
              Похожие нейросети
            </h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-gray-200 to-transparent" />
          </div>
          <SimilarTools tools={similar as Tool[]} />
        </div>
      </main>

      <footer className="py-20 text-center">
        <p className="text-[#9CA3AF] text-sm font-semibold tracking-widest uppercase">
          AiCatalog • 2026
        </p>
      </footer>
    </div>
    </>
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

  const { data: tool, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", id)
    .single();

  if (error || !tool) {
    return { notFound: true };
  }

  const { data: similar } = await supabase
    .from("tools")
    .select("id, name, image_url, category, slug, short_description, logo_url")
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