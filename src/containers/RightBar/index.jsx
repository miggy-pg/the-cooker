import { useSelector } from "react-redux";
import { Tags } from "../../components/Common/Tags";
import { FoodList } from "../../components/Management/FoodList";

export function RightBar() {
  const customer = useSelector((store) => store.customer);
  console.log("customer: ", customer);

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
