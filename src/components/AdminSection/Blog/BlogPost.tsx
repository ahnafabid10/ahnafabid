"use client";

import { useState } from "react";
import QuillEditor from "./QuillEditor";

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "publishing" | "published" | "error">("idle");

  const addCategory = () => {
    const trimmed = categoryInput.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setCategoryInput("");
    }
  };

  const removeCategory = (cat: string) => {
    setCategories(categories.filter((c) => c !== cat));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required!");
      return;
    }

    setStatus("publishing");

    const blogData = {
      title: title.trim(),
      content,
      categories,
      createdAt: new Date().toISOString(),
    };

    console.log("Blog Data:", blogData);

    // TODO: Replace with your actual API endpoint
    // try {
    //   const res = await fetch('/api/blogs', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(blogData),
    //   });
    //   if (res.ok) {
    //     setStatus('published');
    //     setTitle('');
    //     setContent('');
    //     setCategories([]);
    //   } else {
    //     setStatus('error');
    //   }
    // } catch {
    //   setStatus('error');
    // }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Create Blog Post</h1>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title..."
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-medium mb-2">Categories</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCategory())}
            placeholder="Add a category..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={addCategory}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {cat}
              <button
                onClick={() => removeCategory(cat)}
                className="ml-1 text-blue-400 hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Quill Editor */}
      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <QuillEditor value={content} onChange={setContent} />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={status === "publishing"}
        className="w-full py-3.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "publishing"
          ? "Publishing..."
          : status === "published"
          ? "Published!"
          : "Publish Blog Post"}
      </button>
    </div>
  );
};

export default BlogPost;
