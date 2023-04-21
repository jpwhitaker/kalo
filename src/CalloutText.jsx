import { Text, Plane, Billboard, Line, Mask, useMask } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { Box3, Vector3 } from 'three';

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
          <Mask id={1} position={[0, 0, 0]} scale={1.2}>
            <planeGeometry args={[planeSize.width, planeSize.height]} scale={1.2}/>
          </Mask>
        </group>
      </Billboard>

      {(textRendered.hawaiian && textRendered.english) && <CalloutLine groupRef={groupRef} endPosition={[-1.98, 3.4, 0.5]} />}
    </>
  );
};

const CalloutLine = ({ groupRef, endPosition }) => {
  const stencil = useMask(1, true)
  const bounds = new Box3().setFromObject(groupRef.current)
  const size = new Vector3();
  const center = new Vector3();
  bounds.getSize(size);
  bounds.getCenter(center);
  const positionX = (groupRef.current.position.x)
  const positionY = groupRef.current.position.y;

  return (
    <>
      <Line
        points={[[positionX, positionY, 0], endPosition]}
        lineWidth={2}
        {...stencil}
      />
    </>
  )
}




