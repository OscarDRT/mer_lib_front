import { Screen } from "@/components/icons/screen";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        padding: "16px",
        maxWidth: "1250px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Screen />
      <h2>Parece que esta página no existe</h2>
      <Link href={"/"}>Ir a la página principal</Link>
    </div>
  );
}
