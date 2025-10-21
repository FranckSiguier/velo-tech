import { Card, CardContent } from "~/components/ui/card";

interface BuildData {
  frame?: string;
  groupset?: string;
  wheels?: string;
  tyres?: string;
}

interface LatestBuildDisplayProps {
  imageData: string | null;
  buildData: BuildData;
  variant?: "compact" | "full";
}

export function LatestBuildDisplay({
  imageData,
  buildData,
  variant = "full",
}: LatestBuildDisplayProps) {
  if (!imageData) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No builds uploaded yet.</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Card className="overflow-hidden border-gray-700 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative overflow-hidden bg-gray-900">
              <img
                src={`data:image/png;base64,${imageData}`}
                alt="Latest Custom Build"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Specifications Section */}
            <div className="p-8 flex flex-col justify-center space-y-4 bg-gradient-to-br from-gray-800 to-gray-900">
              <h3 className="text-xl font-bold text-primary font-display mb-2">
                Build Specifications
              </h3>

              {buildData.frame && (
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Frame
                  </p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {buildData.frame}
                  </p>
                </div>
              )}

              {buildData.groupset && (
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Groupset
                  </p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {buildData.groupset}
                  </p>
                </div>
              )}

              {buildData.wheels && (
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Wheels
                  </p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {buildData.wheels}
                  </p>
                </div>
              )}

              {buildData.tyres && (
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Tyres
                  </p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {buildData.tyres}
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Full variant for admin page
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="space-y-4">
        <img
          src={`data:image/png;base64,${imageData}`}
          alt="Latest Build"
          className="max-w-full h-auto rounded-xl shadow-xl border border-gray-700"
        />
      </div>

      {/* Metadata Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary font-display">
          Build Specifications
        </h2>

        <div className="space-y-4">
          {buildData.frame && (
            <div className="bg-gradient-to-r from-gray-800 to-secondary-800 p-5 rounded-xl shadow-md border border-gray-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                Frame
              </h3>
              <p className="text-lg font-semibold text-white">
                {buildData.frame}
              </p>
            </div>
          )}

          {buildData.groupset && (
            <div className="bg-gradient-to-r from-gray-800 to-secondary-800 p-5 rounded-xl shadow-md border border-gray-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                Groupset
              </h3>
              <p className="text-lg font-semibold text-white">
                {buildData.groupset}
              </p>
            </div>
          )}

          {buildData.wheels && (
            <div className="bg-gradient-to-r from-gray-800 to-secondary-800 p-5 rounded-xl shadow-md border border-gray-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                Wheels
              </h3>
              <p className="text-lg font-semibold text-white">
                {buildData.wheels}
              </p>
            </div>
          )}

          {buildData.tyres && (
            <div className="bg-gradient-to-r from-gray-800 to-secondary-800 p-5 rounded-xl shadow-md border border-gray-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                Tyres
              </h3>
              <p className="text-lg font-semibold text-white">
                {buildData.tyres}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
