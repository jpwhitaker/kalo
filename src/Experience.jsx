import {PresentationControls, OrbitControls, PerspectiveCamera, Text, Billboard, Line, Sphere, Html} from '@react-three/drei';
import { useEffect } from 'react';
import Kalo from './Kalo.jsx';
import { useThree } from '@react-three/fiber';

export default function Experience() {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 1, 0);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 4, 7.5]} />


      <ambientLight intensity={0.5} />
      <OrbitControls enablePan={true}/>
      
      {/* <PresentationControls global snap> */}
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
        <Billboard position={[-3,4.3,0.5]}>
        <CalloutText hawaiianName="mahae" englishTranslation="leaf sinus" position={[0,0,0]} />
        </Billboard>
        <Line
          points={[[-3,4.3,0.5], [-2,3.6,0.5]]}
          color="black"                   // Default
          lineWidth={2}                   // In pixels (default)
        />
        {/* <CalloutTextHTML hawaiianName="mahae" englishTranslation="leaf sinus" position={[0,4.3,0]} /> */}
        <Sphere args={[.08,32]} position={[-2,3.6,0.5]} material-color="hotpink"/>

        {/* <CalloutText hawaiianName="'ao lū'au or mahola" englishTranslation="enexpanded, rolled leaf blade" position={[0,2.5,0]} />

        <CalloutText hawaiianName="lau or lū'au" englishTranslation="leaf" position={[-6,3.5,0]} />
        <CalloutText hawaiianName="a'a lau" englishTranslation="midrib and veins" position={[-4.4,3.5,0]} />
        <CalloutText hawaiianName="piko" englishTranslation="junction of the peticole and blade on upper surface" position={[-4.4,2.8,0]} />
        <CalloutText hawaiianName="ka'e lau" englishTranslation="edge of leaf" position={[-4.4,1.8,0]} />

        <CalloutText hawaiianName="ha" englishTranslation="peticole or leaf stalk" position={[-2,1.8,0]} />
        <CalloutText hawaiianName="lihi māwae" englishTranslation="sheath edge" position={[-2,1.2,0]} />
        <CalloutText hawaiianName="māwae" englishTranslation="peticole sheath" position={[-2,0.6,0]} />

        <CalloutText hawaiianName="'ohā" englishTranslation="bud of corm" position={[0.8,0.3,0]} />
        <CalloutText hawaiianName="huluhulu" englishTranslation="roots" position={[0.8,-0.3,0]} /> */}
      {/* </PresentationControls> */}
    </>
  );
}

const CalloutText = ({ hawaiianName, englishTranslation, position }) => {
  return (
    <>
      <Text
        color="black"
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[position[0], position[1], position[2]]}
        font={"./Roboto-Regular.ttf"}
      >
        {hawaiianName}
      </Text>
      <Text
        color="gray"
        anchorX="left"
        anchorY="top"
        fontSize={0.15}
        font={"./Roboto-Regular.ttf"}
        position={[position[0], position[1] - 0.25, position[2]]}
        maxWidth={1.5}
      >
        ({englishTranslation})
      </Text>
    </>
  );
};const CalloutTextHTML = ({ hawaiianName, englishTranslation, position }) => {
  return (
    <>
      <Html scale={1} rotation={[0, 0, 0]} position={[3, 0, 0]} transform occlude="blending">
        <div className="annotation">
          6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
        </div>
      </Html>
    </>
  );
};


