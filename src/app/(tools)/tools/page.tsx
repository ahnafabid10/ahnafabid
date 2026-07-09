import ToolsPage from '@/components/Tools/ToolsPage/ToolsPage';
import SmoothScroll from '@/components/Shared/LenisSmoothScroll/SmoothScroll';
import PublicLayout from '@/components/Shared/Layouts/PublicLayouts';

const page = () => {
    return (
        <PublicLayout>
        <SmoothScroll>
        <ToolsPage />
        </SmoothScroll>
        </PublicLayout>

        
    );
};

export default page;
