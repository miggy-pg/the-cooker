import { LeftBar } from "../containers/LeftBar";
import { RightBar } from "../containers/RightBar";

export default function Homepage() {
  return (
    <div className="tm-container">
      <div className="tm-row">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
