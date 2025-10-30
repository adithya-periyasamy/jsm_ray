import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Rootlayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon-dark.png"
              alt="MockMate Logo"
              width={38}
              height={32}
            />
            <h2 className="text-primary-200">Ray</h2>
          </Link>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Rootlayout;
