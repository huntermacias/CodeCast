import Link from "next/link";
import { Stream, User } from "@prisma/client";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultCardProps {
  data: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link
      className="block h-full w-full space-y-3 bg-gray-700
	 hover:bg-gray-600 rounded-lg overflow-hidden shadow-lg 
	 transition duration-300 ease-in-out"
      href={`/${data.user.username}`}
    >
      <Thumbnail
        src={data.thumbnailUrl}
        fallback={data.user.imageUrl}
        isLive={data.isLive}
        username={data.user.username}
      />
      <div className="px-4 py-2">
        <div className="flex gap-x-3 items-center">
          <UserAvatar
            username={data.user.username}
            imageUrl={data.user.imageUrl}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold text-white hover:text-blue-500">
              {data.name}
            </p>
            <p className="text-gray-300">{data.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-3 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <ThumbnailSkeleton />
      <div className="px-4 py-2 flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
};
