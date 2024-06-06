import { useSphere } from "@react-three/cannon";

export const Bullet = (props) => {
  /** Bullet collider */
  const [sphereRef] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    type: 'dinamic',
    ...props
  }));

  return (
    <mesh ref={sphereRef} castShadow>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshLambertMaterial color="yellow" />
    </mesh>
  );
};

export default Bullet