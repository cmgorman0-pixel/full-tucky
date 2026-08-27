const variants: Record<string, string> = {
  amber: "ph-amber",
  red: "ph-red",
  espresso: "ph-espresso",
  green: "ph-green",
};

export default function PlaceholderPhoto({
  variant,
  height,
  label = "Photo",
}: {
  variant: "amber" | "red" | "espresso" | "green";
  height: number;
  label?: string;
}) {
  return (
    <div
      className={`placeholder-photo ${variants[variant]}`}
      style={{ height }}
    >
      <div className="ph-label absolute bottom-0 left-0">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 8h3l2-3h6l2 3h3v11H4V8Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        {label}
      </div>
    </div>
  );
}
