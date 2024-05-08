import React from 'react';
export default function Fluid() {
    return (
        <>
            <canvas className="fluid-canvas" style={{
                color: '#F7F8FA',
                height: '100%',
                width: '100%',
                margin: 0,
                position:'fixed',
                top: 0,
                left: 0,
                zIndex: '-30',
            }}></canvas>
        </>
      )
}




