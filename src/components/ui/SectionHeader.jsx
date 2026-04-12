export default function SectionHeader({ 
  title, 
  highlight, 
  description, 
  className = "", 
  titleClassName = "mb-3.5",
  highlightClassName = "text-[#ED3C6A]",
  descriptionClassName = "text-sm" 
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-[32px] font-bold text-[#000000] ${titleClassName}`}>
        {title}{" "}
        {highlight && <span className={highlightClassName}>{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-[#000000] leading-relaxed max-w-184.5 mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}