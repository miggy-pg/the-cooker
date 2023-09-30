export function Tags() {
  return (
    <nav className="tm-black-bg tm-drinks-nav">
      <ul>
        <li>
          <a href="#" className="tm-tab-link active" data-id="cold">
            Food
          </a>
        </li>
        <li>
          <a href="#" className="tm-tab-link" data-id="hot">
            Processing
          </a>
        </li>
        <li>
          <a href="#" className="tm-tab-link" data-id="juice">
            Payment
          </a>
        </li>
      </ul>
    </nav>
  );
}
