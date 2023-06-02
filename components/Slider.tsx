import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
	value: number;
	onChange: (value: number) => void;
	max: number;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange, max = 1 }) => {
	const handleChange = (newValue: number[]) => {
		onChange?.(newValue[0]);
	};
	return (
		<RadixSlider.Root
			className="relative flex items-center touch-none w-full h-10"
			defaultValue={[1]}
			value={[value]}
			onValueChange={handleChange}
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
