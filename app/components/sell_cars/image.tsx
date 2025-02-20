"use client";
import React, { useState } from "react";

const ImagesSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
      // handle uploading or display preview
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFiles || selectedFiles.length < 1) {
      alert("Please upload at least one image.");
      return;
    }
    // Otherwise proceed
    console.log("Proceed with images:", selectedFiles);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="collapse-title text-xl font-bold border-b">Images</div>

        <div className="collapse-content p-1">
          <form className="max-w-3xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
              <label className="min-w-[12rem] font-semibold">Images *</label>
              <div className="flex items-center gap-4">
                <label className="btn btn-primary relative overflow-hidden">
                  Select images
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="text-sm text-gray-600">
                  Upload 1–12 images
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-square bg-gray-100 border 
                             border-gray-300 flex items-center justify-center 
                             text-gray-400"
                >
                  Car {i + 1}
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500">Upload at least 1 image</p>

            <button type="submit" className="btn btn-primary px-8">
              Create listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
