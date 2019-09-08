import React, { useRef, useState, useEffect } from 'react';
import style from './canvas.less';


const Canvas = ({activeTool, penOptions}) => {
    const canvasRef = useRef(null);

	const [isDrawing, setIsDrawing] = useState(false);
	const [ctx, setCtx] = useState(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext('2d'));
	}, [])

	const getX = e => (
		!e.pageX 
			? e.targetTouches[0].pageX - canvasRef.current.offsetLeft
			: e.pageX - canvasRef.current.offsetLeft
	)

    const getY = e => (
		!e.pageY
			? e.targetTouches[0].pageY - canvasRef.current.offsetTop
			: e.pageY - canvasRef.current.offsetTop
	)

	const start = e => {
		if(activeTool === "pen") {
			setIsDrawing(true);
			ctx.beginPath();
			ctx.moveTo(getX(e), getY(e));
			e.preventDefault();
		}
	}

	const draw = e => {
		if(isDrawing) {
			ctx.lineTo(getX(e), getY(e));
			ctx.lineWidth = penOptions.strokeWidth;
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		e.preventDefault();
	}

	const end = e => {
		if(isDrawing) {
			ctx.stroke();
			ctx.closePath();
			setIsDrawing(false);
		}
		e.preventDefault();
	}

	return (
		<canvas
			width={window.innerWidth - 262}
			height={window.innerHeight}
			className={style.canvas}
			ref={canvasRef}
			onMouseDown={start}
			onMouseMove={draw}
			onMouseUp={end}
		/>
	);
}


export default Canvas;