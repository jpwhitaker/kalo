import { Text, Billboard, Box, Wireframe, useHelper, Line } from '@react-three/drei';
import { useState, useEffect, useRef} from 'react';
import { Box3, Box3Helper, Vector3 } from 'three';




export default function CalloutText({ hawaiianName, englishTranslation, position }) {
  const groupRef = useRef();
  const [textRendered, setTextRendered] = useState({hawaiian: false, english: false});
  
  return (
    <group ref={groupRef} position={position}>
      <Text
        color="black"
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[0, 0, 0]}
        font={"./Roboto-Regular.ttf"}
        onSync={(mesh)=>{
          setTextRendered(prevState => ({
            ...prevState,
            hawaiian: true
          }));
        }}
      >
        {hawaiianName}
      </Text>
      <Text
        color="gray"
        anchorX="left"
        anchorY="top"
        fontSize={0.15}
        font={"./Roboto-Regular.ttf"}
        position={[0, 0 - 0.25, 0]}
        maxWidth={1.5}
        onSync={(mesh)=>{
          setTextRendered(prevState => ({
            ...prevState,
            english: true
          }));
        }}
      >
        ({englishTranslation})
      </Text>
      {(textRendered.hawaiian && textRendered.english) && <Midpoints groupRef={groupRef}/>}
      {(textRendered.hawaiian && textRendered.english) && <CalloutLine groupRef={groupRef} endPosition={[2,-0.8,0.5]}/>}
    </group>
  );
};

const CalloutLine = ({groupRef, endPosition}) => {
  console.log('line')
  const bounds = new Box3().setFromObject(groupRef.current)
  const helper = new Box3Helper(bounds, 0xffff00)
  const size = new Vector3();
  const center = new Vector3();
  bounds.getSize(size);
  bounds.getCenter(center);
  const positionX = (size.x)
  const positionY = 0 - (size.y / 2);
  return (
    <Line
      points={[[positionX,positionY,0], endPosition]}
      color="black"                   // Default
      lineWidth={2}                   // In pixels (default)
    />
  )
}


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
    
    {/* <Box args={[size.x, size.y, size.z]} position={[positionX,positionY,-0.05]}>
      <Wireframe/>
    </Box> */}
    </>
  )
}


