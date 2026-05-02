export default function GoodCodeLabel({ className = "" }) {
  return (
    <span className={className}>
      The Good{" "}
      <span className="whitespace-nowrap">
        <span className="text-white">&lsaquo;</span>
        Code
        <span className="text-white">&rsaquo;</span>
      </span>{" "}
      Project
    </span>
  );
}
