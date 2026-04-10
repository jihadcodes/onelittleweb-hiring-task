import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-[#ED3C6A] hover:bg-[#d4006e] text-white",
  outline: "border border-[#F72585] text-[#F72585] hover:bg-[#F72585] hover:text-white",
  white: "bg-white text-[#F72585] hover:bg-pink-50",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2  text-sm font-bold py-[18px] pl-[22px] pr-[20.5px] rounded-md transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={15} />}
    </>
  );

  if (href) return <Link href={href} className={classes}>{content}</Link>;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}