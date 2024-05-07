'use client';

import React from 'react';

export default function Fluid() {
  return (
      // <div style={{
      //     width: '100%',
      //     height: '100%',
      //     position: 'fixed',
      //     top: 0,
      //     left: 0,
      //     zIndex: '1'
      // }}>
      //     <div style={{
      //         height: '100%',
      //         width: '100%',
      //         position: 'absolute',
      //         bottom: 'auto',
      //         left: 0,
      //         right: 'auto',
      //         top: 0,
      //     }}>
              <canvas className="fluid-canvas" style={{
                  color: '#F7F8FA',
                  height: '100%', 
                  width: '100%',
                  margin: 0,
                  position:'fixed',
                  top: 0,
                  left: 0,
                  zIndex: '-1',
              }}></canvas>
      // {/*    </div>*/}
      // {/*</div>*/}
  )
}




