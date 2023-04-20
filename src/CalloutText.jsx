import { Text, Plane, Billboard, Box, Wireframe, useHelper, Line, Sphere, Mask, useMask } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { Box3, Box3Helper, Vector3, BufferGeometry } from 'three';

// might have to get midpoint of billboard in a useFrame and update the lineStart to always have it point to the right area.

export default function CalloutText({ hawaiianName, englishTranslation, position }) {
  const groupRef = useRef();
  const englishRef = useRef();
  const hawaiianRef = useRef();
  const [textRendered, setTextRendered] = useState({ hawaiian: false, english: false });
  const [planeSize, setPlaneSize] = useState({ width: 0.01, height: 0.01 });

  useEffect(() => {
    if (textRendered.hawaiian && textRendered.english) {
      const bounds = new Box3().setFromObject(groupRef.current);
      const size = new Vector3();

      bounds.getSize(size);
      hawaiianRef.current.position.x -= size.x / 2;
      hawaiianRef.current.position.y += size.y / 2;

      englishRef.current.position.x -= size.x / 2;
      englishRef.current.position.y += size.y / 2;

      setPlaneSize({ width: size.x, height: size.y });

      console.log('both rendered');
      console.log(size);
    }
  }, [textRendered]);

  return (
    <>
      <Mask id={1}>
        <sphereGeometry args={[0.8, 64, 64]} />
      </Mask>
      <Billboard ref={groupRef} position={position}>
        <group>
          <Text
            ref={hawaiianRef}
            color="black"
            anchorX="left"
            anchorY="top"
            fontSize={0.2}
            position={[0, 0, 0]}
            font={"./Roboto-Regular.ttf"}
            onSync={(mesh) => {
              setTextRendered((prevState) => ({
                ...prevState,
                hawaiian: true,
              }));
            }}
          >
            {hawaiianName}
          </Text>
          <Text
            ref={englishRef}
            color="gray"
            anchorX="left"
            anchorY="top"
            fontSize={0.15}
            font={"./Roboto-Regular.ttf"}
            position={[0, 0 - 0.25, 0]}
            maxWidth={1.5}
            onSync={(mesh) => {
              setTextRendered((prevState) => ({
                ...prevState,
                english: true,
              }));
            }}
          >
            ({englishTranslation})
          </Text>
          <Plane args={[planeSize.width, planeSize.height, 1]} position={[0, 0, -0.05]} scale={1.5}>
            <meshBasicMaterial color="#ffffff" transparent opacity={1} />
          </Plane>
        </group>
      </Billboard>

      {(textRendered.hawaiian && textRendered.english) && <CalloutLine groupRef={groupRef} endPosition={[-1.98, 3.4, 0.5]} />}
    </>
  );
};

const CalloutLine = ({groupRef, endPosition}) => {
  console.log('line')
  const stencil = useMask(1, false)
  const bounds = new Box3().setFromObject(groupRef.current)
  const size = new Vector3();
  const center = new Vector3();
  bounds.getSize(size);
  bounds.getCenter(center);
  const positionX = (groupRef.current.position.x)
  const positionY = groupRef.current.position.y ;
  return (
    <Line
      points={[[positionX,positionY,0], endPosition]}
      lineWidth={2}                   // In pixels (default)
      
    >
      <lineBasicMaterial color="pink" {...stencil} />
    </Line>
  )
}

// const CalloutLine = ({groupRef, endPosition}) => {
//   console.log('line')
//   const stencil = useMask(1)
//   const bounds = new Box3().setFromObject(groupRef.current)
//   const size = new Vector3();
//   const center = new Vector3();
//   bounds.getSize(size);
//   bounds.getCenter(center);
//   const positionX = (groupRef.current.position.x)
//   const positionY = groupRef.current.position.y ;
//   const geometry = new BufferGeometry().setFromPoints([
//     [positionX, positionY, 0],
//     endPosition,
//   ]);
//   return (
//     <line
//       points={[[positionX,positionY,0], endPosition]}
//     >
//       <lineBasicMaterial attach="material" color="black" />
//     </line>
//   )
// }



const Midpoints = ({groupRef}) => {
  console.log('midpoints')
  const bounds = new Box3().setFromObject(groupRef.current)
  const helper = new Box3Helper(bounds, 0xffff00)
  const size = new Vector3();
  const center = new Vector3();
  bounds.getSize(size);
  bounds.getCenter(center);
  const positionX = (size.x / 2);
  const positionY = 0 - (size.y / 2);
  return (
    <>
    
    <Box args={[size.x, size.y, size.z]} position={[groupRef.current.position.x , groupRef.current.position.y ,-0.05]}>
      <Wireframe/>
      <meshPhongMaterial color="#ffffff" opacity={1} transparent />

    </Box>
    </>
  )
}


