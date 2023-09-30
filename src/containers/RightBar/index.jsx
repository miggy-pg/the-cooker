import { Tags } from "../../components/Common/Tags";
import { FoodList } from "../../components/Management/FoodList";

export function RightBar() {
  return (
    <div className="tm-right">
      <main className="tm-main">
        <div className="tm-page-content">
          <Tags />
          <FoodList />
        </div>
      </main>
    </div>
  );
}
