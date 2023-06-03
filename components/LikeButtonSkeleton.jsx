// LikeButtonSkeleton.jsx
const LikeButtonSkeleton = () => {
	return (
		<div className="hover:opacity-75 transition animate-pulse">
			<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
		</div>
	);
};

export default LikeButtonSkeleton;
