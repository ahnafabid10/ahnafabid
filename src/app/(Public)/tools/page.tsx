import ToolsPage from '@/components/Tools/ToolsPage/ToolsPage';
import { Navbar } from '@/components/Shared/NavBar/NavBar';
import Footer from '@/components/Shared/Footer/Footer';
import SmoothScroll from '@/components/Shared/LenisSmoothScroll/SmoothScroll';

const page = () => {
    return (
        <SmoothScroll>
        <div className="min-h-screen">
            <ToolsPage />
        </div>
        </SmoothScroll>
    );
};

export default page;
