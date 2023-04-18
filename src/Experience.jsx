import {PresentationControls, OrbitControls, PerspectiveCamera, Text, Billboard, Line, Sphere, Html} from '@react-three/drei';
import { useState, useEffect} from 'react';
import Kalo from './Kalo.jsx';
import { useThree, useFrame } from '@react-three/fiber';
import CalloutText from './CalloutText.jsx';



export default function Experience() {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 12, 0);
  }, [camera]);



  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 4, 7.5]} /> */}


      <ambientLight intensity={0.5} />
      <OrbitControls enablePan={true}/>
      
      
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
        <mesh
          receiveShadow
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          scale={100}
        >
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
        </mesh>
        <Kalo scale={0.5}  position={[0, -0.5, 0]} />
        
        <CalloutText hawaiianName="mahae" englishTranslation="leaf sinus" position={[-4,4.2,0]} />
    </>
  );
}