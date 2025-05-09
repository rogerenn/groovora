// components/Button.tsx
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
  }
  
  export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
  }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-50 ${className}`}
      >
        {children}
      </button>
    );
  }
  