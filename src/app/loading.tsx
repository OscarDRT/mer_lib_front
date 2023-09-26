import { CustomLoader } from "@/components/loader";

export default function Loading() {
  return (
    <section
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <CustomLoader />;
    </section>
  );
}
