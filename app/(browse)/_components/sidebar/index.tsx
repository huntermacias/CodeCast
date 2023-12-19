import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import React from "react";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {

	const recommeded = await getRecommended();
	const follows = await getFollowedUsers();

  return (
	<Wrapper>
		<Toggle />
		<div className="space-y-4 pt-4 lg:pt-0">
			<Following data={follows} />
			<Recommended data={recommeded} />
		</div>
	</Wrapper>
  )
}

export const SidebarSkeleton = () => {
	return (
		<aside className="fixed flex-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border[#2d2e35] z-50">
			<ToggleSkeleton />
			<FollowingSkeleton />
			<RecommendedSkeleton />
		</aside>
	)
}
