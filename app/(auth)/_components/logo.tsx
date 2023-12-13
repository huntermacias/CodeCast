import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <div className={cn(font.className, "flex flex-col items-center gap-x-2")}>
      <div className="bg-white rounded-full p-2">
        <Image
          src="/spooky.svg"
          alt="NextGen Stream Platform"
          width={80}
          height={80}
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">
          NextGen Stream Platform
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s Play
        </p>
      </div>
    </div>
  );
};
