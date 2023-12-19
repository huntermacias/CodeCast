"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  notificationCount?: number; // Default to zero if not provided
};

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  notificationCount = 0
}: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
	
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12 transition-colors duration-300 ease-in-out hover:bg-dark-hover rounded-md",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent shadow-lg shadow-accent/50"
      )}
    >
      <Link href={href} className="flex items-center gap-x-4 p-2 rounded-md">
       
          <Icon className={cn(
            "h-6 w-6 text-emerald-500",
            collapsed ? "mr-0" : "mr-2"
          )} />
         {!collapsed && (
            <>
              <span className="text-white font-medium">
                {label}
              </span>
              {notificationCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                  {notificationCount}
                </span>
              )}
			  </>
			)}
      </Link>
    </Button>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
