"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const ImageUpload = () => {
  const router = useRouter();
  const [carID, setCarID] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedCarID = localStorage.getItem("carID");
    if (storedCarID) {
      setCarID(storedCarID);
    } else {
      console.error("CarID is missing from localStorage.");
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray: File[] = Array.from(e.target.files) as File[];
      setSelectedFiles(filesArray);

      // Generate preview URLs
      const previews = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select images to upload.");
      return;
    }

    if (!carID) {
      alert("CarID is missing. Please try again.");
      return;
    }

    setUploading(true);
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("carid", carID);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      console.log("Uploaded image data:", data);

      // Show success popup
      setShowPopup(true);

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 10000);
      localStorage.removeItem("carID")
      // Redirect to /profile after 10 seconds
      setTimeout(() => {
        router.push("/profile");
      }, 10000);

      // Reset state after upload
      setSelectedFiles([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {!carID && <p className="text-red-500">Error: CarID is missing.</p>}

      <input type="file" accept="image/*" multiple onChange={handleFileChange} />

      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {imagePreviews.map((src, index) => (
            <img key={index} src={src} alt={`Selected ${index}`} className="w-full h-auto" />
          ))}
        </div>
      )}

      {selectedFiles.length > 0 && (
        <button className="btn btn-primary mt-2" onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-4 rounded-lg shadow-lg text-center">
            <p className="text-green-600 font-bold">Images uploaded successfully!</p>
            <p className="text-gray-400 text-sm">Redirecting to profile...</p>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => {
                setShowPopup(false);
                router.push("/profile"); // Allow manual redirect
              }}
            >
              Go to Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
