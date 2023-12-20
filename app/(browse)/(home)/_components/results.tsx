import { getStreams } from "@/lib/feed-service";
import { ResultCard, ResultCardSkeleton } from "./result-card";

export const Results = async () => {
  const data = await getStreams();

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-100 mb-6 underline decoration-blue-500 decoration-4">
        Recommended Streams
      </h2>
      {data.length === 0 ? (
        <p className="text-gray-400 text-lg">No streams found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((result) => (
            <ResultCard key={result.id} data={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div className="animate-pulse p-6 bg-gray-800 rounded-xl shadow-xl">
      <div className="h-8 w-3/4 bg-gray-700 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
