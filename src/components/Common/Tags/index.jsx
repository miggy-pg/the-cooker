export function Tags() {
  return (
    <nav className="tm-black-bg tm-drinks-nav">
      <ul>
        <li>
          <span href="#" className="tm-tab-link active" data-id="cold">
            Food
          </span>
        </li>
        <li>
          <span href="#" className="tm-tab-link" data-id="hot">
            Processing
          </span>
        </li>
        <li>
          <span href="#" className="tm-tab-link" data-id="juice">
            Payment
          </span>
        </li>
      </ul>
    </nav>
  );
}
