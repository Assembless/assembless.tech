import React from 'react';
import { Canvas } from 'react-three-fiber';

export const EarthComp = React.lazy(() => import(`./Earth`));

/**
 * @description This is the canvas component for the earth.
 */
const EarthCanvas = () => (
  <Canvas style={{ width: `400px`, height: `400px`, borderRadius: `400px` }}>
    <React.Suspense
      fallback={
        <mesh scale={[1, 1, 1]}>
          <sphereGeometry args={[3, 52, 52]} />
          <meshStandardMaterial color="#eee" />
        </mesh>
      }
    >
      <EarthComp />
    </React.Suspense>
  </Canvas>
);

export default EarthCanvas;
