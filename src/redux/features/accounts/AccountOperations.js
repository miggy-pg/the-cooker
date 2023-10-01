import { payCash } from "../customers/customerSlice";

export default function AccountOperations() {
  const [paymentAmount, setPaymentAmount] = useState("");

  function handlePaymentCash() {
    if (!paymentAmount) return;

    dispatch(payCash(paymentAmount));
  }

  return <div>AccountOperations</div>;
}
