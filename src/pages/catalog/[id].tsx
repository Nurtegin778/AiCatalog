import { supabase } from "@/lib/supabase";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";


export default function ToolPage({
  tool,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <section>
        <h1>{tool.name}</h1>
        <p>{tool.best_for}</p>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params ?? {};

  if (!id || typeof id !== "string") {
    return { notFound: true };
  }

  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", id)
    .single();

  if (error || !data) {
    return { notFound: true };
  }

  return {
    props: {
      tool: data,
    },
  };
};