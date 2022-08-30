import { Canvas, useThree } from '@react-three/fiber'
import { Center, Text3D, OrbitControls, Edges } from '@react-three/drei'

export default function App() {
  return (
    <><div /><div />
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        <Scene />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      </Canvas></>
  )
}

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <>

      <Center rotation={[-0.2, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={-0.06}
          size={1}
          font="/Inter_Bold.json">
          {`@NOT\nALEXC`}
          <meshBasicMaterial
            color={'black'} />
          <Edges color={'#dddddd'}
            threshold={3}
          />
        </Text3D>
        <Center position={[-1.25, 0, 0]}>

        </Center>
      </Center>
    </>
  )
}

