export default function GoodCodeTitle({ className = "" }) {
  return (
    <span className={className}>
      The Good{" "}
      <span>
        <span className="text-[#cc595a]">&lsaquo;</span>
        <span>Code</span>
        <span className="text-[#cc595a]">&rsaquo;</span>
      </span>{" "}
      Project
    </span>
  );
}
