const MediaItemSkeleton = () => {
	return (
		<div className="flex items-center gap-x-3 w-full p-2 rounded-md">
			<div className="w-12 h-12 bg-gray-300 rounded-md animate-pulse"></div>
			<div className="flex flex-col gap-y-3 overflow-hidden">
				<div className="w-36 h-4 bg-gray-300 rounded animate-pulse"></div>
				<div className="w-24 h-3 bg-gray-300 rounded animate-pulse"></div>
			</div>
		</div>
	);
};

export default MediaItemSkeleton;
