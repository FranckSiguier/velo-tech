import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { LatestBuildDisplay } from "~/components/latest-build-display";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { getUserSession } from "~/functions/auth-server-func";
import { getLastBlob } from "~/functions/getLastBlob";
import { uploadBuild } from "~/functions/uploadBuild";
import { signOut } from "~/utils/auth-client";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
  loader: async () => {
    await getUserSession();
    const { imageData, metadata } = await getLastBlob();
    return {
      imageData,
      metadata: JSON.stringify(metadata),
    };
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { imageData, metadata } = Route.useLoaderData();
  const [file, setFile] = useState<File | null>(null);
  const [frame, setFrame] = useState("");
  const [groupset, setGroupset] = useState("");
  const [wheels, setWheels] = useState("");
  const [tyres, setTyres] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setUploadMessage("Please select a file");
      return;
    }

    console.log(file, frame, groupset, wheels, tyres);

    setIsSubmitting(true);
    setUploadMessage("");

    try {
      // Convert file to ArrayBuffer for serialization
      const fileBuffer = await file.arrayBuffer();

      const result = await uploadBuild({
        data: {
          fileBuffer,
          fileName: file.name,
          fileType: file.type,
          frame,
          groupset,
          wheels,
          tyres,
        },
      });

      if (result.success) {
        // Reset form
        setFile(null);
        setFrame("");
        setGroupset("");
        setWheels("");
        setTyres("");
        // Reset file input
        const fileInput = document.getElementById(
          "file-upload"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      setUploadMessage("Error uploading build: " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Parse metadata
  const metadataObj = metadata ? JSON.parse(metadata) : null;
  const buildData = metadataObj?.metadata || {};

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-900">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold  text-white font-display">
          Builds Management
        </h1>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>

      {/* Upload Form */}
      <div className="mb-12 bg-gradient-to-br from-gray-800 via-gray-800 to-secondary-800 p-8 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-primary font-display">
          Upload New Build
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label
                htmlFor="file-upload"
                className="text-gray-300 font-semibold"
              >
                Build Image
              </Label>
              <Input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="mt-2 bg-gray-900 border-gray-600 text-white focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <Label htmlFor="frame" className="text-gray-300 font-semibold">
                Frame
              </Label>
              <Input
                id="frame"
                type="text"
                value={frame}
                onChange={(e) => setFrame(e.target.value)}
                placeholder="e.g., Factor Ostro VAM"
                required
                className="mt-2 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <Label htmlFor="groupset" className="text-gray-300 font-semibold">
                Groupset
              </Label>
              <Input
                id="groupset"
                type="text"
                value={groupset}
                onChange={(e) => setGroupset(e.target.value)}
                placeholder="e.g., Shimano Dura-Ace Di2"
                required
                className="mt-2 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <Label htmlFor="wheels" className="text-gray-300 font-semibold">
                Wheels
              </Label>
              <Input
                id="wheels"
                type="text"
                value={wheels}
                onChange={(e) => setWheels(e.target.value)}
                placeholder="e.g., Campagnolo Bora Ultra WTO"
                required
                className="mt-2 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <Label htmlFor="tyres" className="text-gray-300 font-semibold">
                Tyres
              </Label>
              <Input
                id="tyres"
                type="text"
                value={tyres}
                onChange={(e) => setTyres(e.target.value)}
                placeholder="e.g., Continental GP5000"
                required
                className="mt-2 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-400 text-gray-900 font-semibold px-6 py-2 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Uploading..." : "Upload Build"}
            </Button>
            {uploadMessage && (
              <p
                className={`text-sm font-medium ${
                  uploadMessage.includes("Error")
                    ? "text-red-400 bg-red-900/30 px-4 py-2 rounded-lg border border-red-800"
                    : "text-primary bg-primary/20 px-4 py-2 rounded-lg border border-primary/50"
                }`}
              >
                {uploadMessage}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Latest Build Display */}
      <h2 className="text-2xl font-bold mb-6 text-white font-display">
        Latest Build
      </h2>
      <LatestBuildDisplay
        imageData={imageData}
        buildData={buildData}
        variant="full"
      />
    </div>
  );
}
