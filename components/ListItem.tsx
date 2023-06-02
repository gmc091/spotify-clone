"use client";

import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
	image: string;
	name: string;
	href: string;
	songs: Song[];
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href, songs }) => {
	const router = useRouter();

	const onPlay = useOnPlay(songs);

	if (songs.length === 0) {
		return <div></div>;
	}

	const onClick = () => {
		// Add authentication before push
		router.push(href);
	};

	const onPlayClick = (event: React.MouseEvent) => {
		// If there is at least one song, play the first one.
		if (songs.length > 0) {
			onPlay(songs[0].id);
		}

		// Prevents the event from bubbling up the event chain.
		event.stopPropagation();
	};

	return (
		<button
			onClick={onClick}
			className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        pr-4
      "
		>
			<div className="relative min-h-[64px] min-w-[64px]">
				<Image className="object-cover" src={image} fill alt="Image" />
			</div>
			<p className="font-medium truncate py-5">{name}</p>
			<div
				onClick={onPlayClick}
				className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md 
          right-5
          group-hover:opacity-100 
          hover:scale-110
        "
			>
				<FaPlay className="text-black" />
			</div>
		</button>
	);
};

export default ListItem;
