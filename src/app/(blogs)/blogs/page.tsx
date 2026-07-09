import { Navbar } from "@/components/Shared/NavBar/NavBar";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07090a]">
      <Navbar/>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>
    </div>
  );
}
