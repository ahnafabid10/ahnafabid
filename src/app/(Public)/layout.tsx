import PublicLayout from "@/components/Shared/Layouts/PublicLayouts";


export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <PublicLayout>
            {children}
        </PublicLayout>
    );
}