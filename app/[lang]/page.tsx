import EnPage from "@/components/pages/EnPage";
import EtPage from "@/components/pages/EtPage";
import RuPage from "@/components/pages/RuPage";

export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "et" }, { lang: "ru" }];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    if (lang === "et") {
        return <EtPage />;
    }
    if (lang === "ru") {
        return <RuPage />;
    }

    return <EnPage />;
}
