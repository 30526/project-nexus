import React from "react";

const LoadingPage = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
  speed = 2,
}) => {
  const animName = `slideGradient${Math.round(speed * 1000)}`; // unique-ish name if multiple on page
  const duration = `${speed}s`;

  return (
    <div className="min-h-screen flex mx-auto justify-center items-center">
      <div className="w-100">
        <h2 className="animate-pulse text-center mb-4 font-bold text-2xl bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-transparent bg-clip-text">Loading...</h2>
        {/* Inline styles so you don't need to edit tailwind config */}
        <style>{`
        @keyframes ${animName} {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .${animName} {
          animation: ${animName} ${duration} linear infinite;
        }
      `}</style>

        <div
          role="status"
          aria-live="polite"
          className={`relative overflow-hidden ${width} ${height} bg-gray-200/60 ${rounded} dark:bg-gray-700/40`}
        >
          {/* sliding gradient bar */}
          <div
            className={`${animName} absolute inset-0 -left-full flex`}
            style={{ willChange: "transform" }}
          >
            {/* The sliding element is wider than the container so it sweeps across */}
            <div
              className="w-[120%] h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(23,112,255,0) 0%, rgba(23,112,255,0.15) 15%, rgba(7,194,241,0.9) 50%, rgba(23,112,255,0.15) 85%, rgba(23,112,255,0) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
