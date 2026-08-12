import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="
        relative
        w-16
        h-9
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        overflow-hidden
        transition-all
        duration-300
        hover:border-white/20
      "
    >
      {/* Sliding orange/white circle */}
      <motion.div
        className="
          absolute
          top-1
          w-7
          h-7
          rounded-full
          flex
          items-center
          justify-center
          bg-orange-500
          shadow-lg
        "
        animate={{
          left: isLight ? "calc(100% - 2rem)" : "0.25rem",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {isLight ? (
          <Sun className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </motion.div>

      {/* Moon */}
      <Moon
        className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          w-4
          h-4
          text-white
        "
      />
    </button>
  );
};

export default ThemeToggle;