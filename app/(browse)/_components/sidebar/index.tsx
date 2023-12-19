import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import React from "react";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";

export const Sidebar = async () => {

	const recommeded = await getRecommended();

  return (
	<Wrapper>
		<Toggle />
		<div className="space-y-4 pt-4 lg:pt-0">
			<Recommended data={recommeded} />
		</div>
	</Wrapper>
  )
}

export const SidebarSkeleton = () => {
	return (
		<aside className="fixed flex-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border[#2d2e35] z-50">
			<ToggleSkeleton />
			<RecommendedSkeleton />
		</aside>
	)
}
