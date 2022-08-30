import { Canvas, useThree } from '@react-three/fiber'
import { Center, Text3D, OrbitControls, Edges } from '@react-three/drei'

export default function App() {
  return (

    <><div class="nav-wrapper">
      <nav>
        <a href="" class="hover-this"><span>@NOTALEXC</span></a>
        <a href="" class="hover-this"><span>INSTAGRAM</span></a>
        <a href="" class="hover-this"><span>BEHANCE</span></a>
        <a href="" class="hover-this"><span>EMAIL</span></a>

        <div class="cursor"></div>

      </nav>
    </div><><div class="noise"></div>
        <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
          <Scene />
          <Topbar />
          <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </Canvas></></>
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
          size={2}
          font="/PP Neue Machina Inktrap Ulbold_Regular (2).json">
          {`@NOT\nALEXC`}
          <meshBasicMaterial
            color={'black'} />
          <Edges color={'#dddddd'}
            threshold={5}
          />
        </Text3D>
        <Center position={[-1.25, 0, 0]}>

        </Center>
      </Center>
    </>
  )
}

function Topbar() {

  const link = document.querySelectorAll('nav > .hover-this');
  const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 25,
      xMove = x / width + (move + 2) - move,
      yMove = y / height + (move + 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);




};
