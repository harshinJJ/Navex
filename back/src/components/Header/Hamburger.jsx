export default function Hamburger({ open, toggle }) {
  return (
    <div className={`hamburger ${open ? "active" : ""}`} onClick={toggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
