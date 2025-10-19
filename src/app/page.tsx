import Header from "@/components/header/Header";
import { MainHeader } from "@/components/main-header/MainHeader";

import { Providers } from "@/providers/Providers";

export default function HomePage() {
  return (
    <Providers>
      <MainHeader />
    </Providers>
  );
}
