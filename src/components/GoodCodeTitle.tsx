export default function GoodCodeTitle({ className = "" }) {
  return (
    <span className={`tracking-tight ${className}`}>
      The Good{" "}
      <span>
        <span className="text-[#cc595a]">&lsaquo;</span>
        <span className="text-foreground">Code</span>
        <span className="text-[#cc595a]">&rsaquo;</span>
      </span>{" "}
      Project
    </span>
  );
}
