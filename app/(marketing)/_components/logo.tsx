import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo-dark.svg"
        alt="Jotion logo"
        width={16}
        height={16}
        className="dark:hidden"
      />
      <Image
        src="/logo-white.svg"
        alt="Jotion logo"
        width={16}
        height={16}
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
