import ColorContext from '../contexts/color';

const ColorBox = () => {
	return (
		<ColorContext.Consumer>
			{(value) => (
				<div
					style={{ width: '64px', height: '64px', background: value.color }}
				/>
			)}
			<div>커밋1</div>
		</ColorContext.Consumer>
	);
};

export default ColorBox;
