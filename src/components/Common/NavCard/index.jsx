export function NavCard({ tag, handleSelectedTag }) {
  return (
    <li className="tm-page-nav-item" onClick={() => handleSelectedTag(tag)}>
      <span className="tm-page-link active">
        <i className="fas fa-mug-hot tm-page-link-icon"></i>
        <span>{tag}</span>
      </span>
    </li>
  );
}
