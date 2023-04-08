import { PresentationControls, PerspectiveCamera, Text} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Model from './Model.jsx';
import { Suspense, useEffect } from 'react';
import Placeholder from './Placeholder.jsx';
// import Hamburger from './Hamburger.jsx';
// import Fox from './Fox.jsx';
import Kalo from './Kalo.jsx';
import { useThree } from '@react-three/fiber';

export default function Experience() {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3.5, 9]} />


      <ambientLight intensity={0.5} />
      <PresentationControls makeDefault global snap>
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
          scale={10}
        >
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
          <Kalo scale={0.05} rotation-x={Math.PI * 0.5} position={[0, 0, 0.05]} />
          
        </mesh>
        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.5} position={[-5.5,3.5,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            lau or lu'au
        </Text>
        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-2.5,3.8,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            mahae
        </Text>
        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-3.5,3,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            a'a lau
        </Text>
        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-3.5,2.5,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            piko
        </Text>

        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-3.5,2,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            ka'e lau
        </Text>

        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[0.5,2.5,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            'ao lu'au or mahola
        </Text>

        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-1.2,1.5,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            ha
        </Text>


        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-1.2,1,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            lihi mawae
        </Text>

        <Text color="black" anchorX="center" anchorY="middle" fontSize={0.3} position={[-1.2,0.5,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            'oha
        </Text>

        <Text color="black" anchorX="left" anchorY="middle" fontSize={0.5} position={[1,0,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            kalo
        </Text>

        <Text color="black" anchorX="left" anchorY="middle" fontSize={0.3} position={[0.5,-0.8,0]} font={"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"} >
            huluhulu
        </Text>
      </PresentationControls>
    </>
  );
}