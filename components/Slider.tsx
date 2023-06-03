import * as RadixSlider from "@radix-ui/react-slider";
import { useState } from "react";

interface SliderProps {
	value: number;
	onScrub?: (value: number) => void;
	onScrubEnd?: (value: number) => void;
	max: number;
}

const Slider: React.FC<SliderProps> = ({
	value = 1,
	onScrub,
	onScrubEnd,
	max = 1,
}) => {
	const [tempValue, setTempValue] = useState(value);

	const handleValueChange = (newValue: number[]) => {
		setTempValue(newValue[0]);
		onScrub?.(newValue[0]);
	};

	const handleValueCommit = (newValue: number[]) => {
		[];
		onScrubEnd?.(newValue[0]);
	};

	return (
		<RadixSlider.Root
			className="relative flex items-center touch-none w-full h-10"
			value={[tempValue]}
			onValueChange={handleValueChange}
			onValueCommit={handleValueCommit}
			max={max}
			step={0.01}
			aria-label="Volume"
		>
			<RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
				<RadixSlider.Range className="absolute bg-white rounded-full h-full" />
			</RadixSlider.Track>
			<RadixSlider.Thumb
				className="block w-2 h-2 bg-white rounded-[10px] focus:outline-none"
				aria-label="Volume"
			/>
		</RadixSlider.Root>
	);
};

export default Slider;
