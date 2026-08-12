import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const OpenToWork = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Open contact form"
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-green-500/30 shadow-lg shadow-green-500/10 hover:border-green-500/60 hover:bg-black transition-all duration-300">
        {/* Green available indicator */}
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>

        <Briefcase className="w-4 h-4 text-green-400" />

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            Open to Work
          </span>

          <span className="text-xs text-gray-400">
            Let's work together
          </span>
        </div>
      </div>
    </Link>
  );
};

export default OpenToWork;