import { Text, Plane, Billboard, Box, Wireframe, useHelper, Line, Sphere, Mask, useMask } from '@react-three/drei';

// might have to get midpoint of billboard in a useFrame and update the lineStart to always have it point to the right area.

//thinking stencil is not working because things are shifting in useEffect

export default function CalloutText2({ hawaiianName, englishTranslation, position }) {
  return (
    <>
      <Mask id={1} position={[-3, 4, 0]}>
        {/* <Sphere args={[0.8, 64, 64]} position={[-3, 4, 0]} >
          <meshStandardMaterial
            color="hotpink"
            transparent
            opacity={0.5}
          />
        </Sphere> */}
        
          <sphereGeometry args={[0.01, 64, 64]}  />
          {/* <meshStandardMaterial
            color="hotpink"
            transparent
            opacity={0.5}
          /> */}
        
      </Mask>
      {<CalloutLine endPosition={[-1.98, 3.4, 0.5]} />}
    </>
  );
};

const CalloutLine = ({ endPosition }) => {
  const stencil = useMask(1, true)

  return (
    <>
      <Line
        points={[[-5, 5, 0], endPosition]}
        lineWidth={2}                   // In pixels (default)
        {...stencil}
      />
    </>
  )
}







