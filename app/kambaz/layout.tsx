import { AccountProvider } from "./account/AccountContext";
import KambazNavigation from "./Navigation";
import { type ReactNode } from "react";
import { Suspense } from "react";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Suspense>
      <AccountProvider>
        <div id="wd-kambaz" className="font-sans">
          <Suspense>
            <KambazNavigation />
          </Suspense>
          <div className="wd-main-content-offset p-3">{children}</div>
        </div>
      </AccountProvider>
    </Suspense>
  );
}
