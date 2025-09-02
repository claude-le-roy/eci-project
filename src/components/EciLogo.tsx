interface EciLogoProps {
  className?: string;
}

const EciLogo = ({ className = "w-12 h-12" }: EciLogoProps) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        role="img"
        aria-label="Elite Career Initiative logo featuring a pink to purple gradient swirl design"
      >
        <defs>
          <linearGradient id="eci-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(320 100% 70%)" />
            <stop offset="100%" stopColor="hsl(280 100% 50%)" />
          </linearGradient>
        </defs>
        
        {/* Outer crescent */}
        <path
          d="M20 50 C20 25, 35 10, 60 10 C75 10, 85 20, 85 35 C85 50, 75 60, 60 60 C45 60, 35 50, 35 35 C35 25, 42 18, 52 18 C58 18, 62 22, 62 28"
          stroke="url(#eci-gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Inner swirl */}
        <path
          d="M45 35 C45 30, 48 27, 53 27 C58 27, 62 31, 62 36 C62 41, 58 45, 53 45 C50 45, 48 43, 48 40"
          stroke="url(#eci-gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Accent dot */}
        <circle
          cx="65"
          cy="25"
          r="3"
          fill="url(#eci-gradient)"
        />
      </svg>
    </div>
  );
};

export default EciLogo;