import { redirect } from "next/navigation";

const LEGACY_MAP: Record<string, string> = {
  rooms: "habitaciones",
  property: "carta",
  kitchen: "servicios",
  explore: "contactos",
};

export default async function LegacyCirqaSubrouteRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const mapped = slug.map((part) => LEGACY_MAP[part] ?? part);
  redirect(`/hotel/${mapped.join("/")}`);
}

