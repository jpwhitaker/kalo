import { Text, Plane,  Billboard, Box, Wireframe, useHelper, Line } from '@react-three/drei';
import { useState, useEffect, useRef} from 'react';
import { Box3, Box3Helper, Vector3 } from 'three';




export default function CalloutText({ hawaiianName, englishTranslation, position }) {
  const groupRef = useRef();
  const englishRef = useRef();
  const hawaiianRef = useRef();
  const [textRendered, setTextRendered] = useState({hawaiian: false, english: false});
  
  useEffect(() => {
    if (textRendered.hawaiian && textRendered.english) {
      const bounds = new Box3().setFromObject(groupRef.current)
      const size = new Vector3();
      
      bounds.getSize(size);
      hawaiianRef.current.position.x -= (size.x/2)
      hawaiianRef.current.position.y += (size.y/2)
      // hawaiianRef.current.position.z += (5)
      englishRef.current.position.x -= (size.x/2)
      englishRef.current.position.y += (size.y/2)
      // englishRef.current.position.z += (5)
      

      console.log('both rendered')
      console.log(size)
    }
  }, [textRendered]);
  
  return (
    <>
    
    
    
      <Billboard ref={groupRef} position={position} >
      <group>
      <Text
        ref={hawaiianRef}
        color="black"
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[0, 0, 0]}
        font={"./Roboto-Regular.ttf"}
        onSync={(mesh)=>{
          // const bounds = new Box3().setFromObject(groupRef.current)
          // const size = new Vector3();
          // bounds.getSize(size);
          // const positionX = (mesh.position.x - (size.x/2))
          // mesh.position.x = positionX
          // console.log(mesh)
          setTextRendered(prevState => ({
            ...prevState,
            hawaiian: true
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
        onSync={(mesh)=>{
          // const bounds = new Box3().setFromObject(groupRef.current)
          // const size = new Vector3();
          // bounds.getSize(size);
          // const positionX = (mesh.position.x - (size.x/2))
          // mesh.position.x = positionX
          setTextRendered(prevState => ({
            ...prevState,
            english: true
          }));
        }}
      >
        ({englishTranslation})
      </Text>
      </group>
      </Billboard>
    
    {/* {(textRendered.hawaiian && textRendered.english) && <Midpoints groupRef={groupRef}/>} */}
    {(textRendered.hawaiian && textRendered.english) && <CalloutLine groupRef={groupRef} endPosition={[-1.98,3.4,0.5]}/>}
    </>
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
  const positionX = (groupRef.current.position.x)
  const positionY = groupRef.current.position.y ;
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
    
    <Box args={[size.x, size.y, size.z]} position={[groupRef.current.position.x , groupRef.current.position.y ,-0.05]}>
      <Wireframe/>
      <meshPhongMaterial color="#ffffff" opacity={1} transparent />

    </Box>
    </>
  )
}


