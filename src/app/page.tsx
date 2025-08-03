import Header from "@/components/header/Header";

import { Providers } from "@/providers/Providers";

import { PAGE } from "@/config/pages.config";
import Link from "next/link";

export default function HomePage() {
  return (
    <Providers>
      <div style={{}}>
        Авторизуйтесь{" "}
        <Link
          href={PAGE.AUTH}
          style={{
            color: "#402f87",
            textDecoration: "underline",
          }}
        >
          здесь
        </Link>{" "}
        чтобы продолжить{" "}
      </div>
    </Providers>
  );
}
