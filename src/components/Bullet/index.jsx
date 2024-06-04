import { useSphere } from "@react-three/cannon";

export const Bullet = (props) => {
  /** Bullet collider */
  const [sphereRef] = useSphere(() => ({
    mass: 5,
    args: [0.03],
    ...props
  }));

  return (
    <mesh ref={sphereRef} castShadow>
      <sphereGeometry args={[0.03, 32, 32]} />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
};

export default Bullet