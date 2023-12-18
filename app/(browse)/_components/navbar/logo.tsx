import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
	<Link href="/">
		<div className="lg:flex items-center gap-x-2 hover:opacity-75 transition">
			<div className="bg-white rounded-full p-1 mr-4 lg:mr-0 lg:shrink shrink-0">
				<Image
					src="/spooky.svg"
					alt="game-hub"
					height="32"
					width="32"
				/>
			</div>

			<div className={cn(
				"hidden lg:block",
				font.className)}>
				<p className="font-xl font-semibold">Gamehub</p>
				<p className="font-xs text-muted-foreground">let&apos;s play</p>
			</div>
		</div>
	</Link>
  );
};
