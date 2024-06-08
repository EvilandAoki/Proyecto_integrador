import { useEffect } from "react";
import { useSphere } from "@react-three/cannon";

export const Bullet = (props) => {
  /** Bullet collider */
  const [sphereRef, bulletApi] = useSphere(() => ({
    mass: 100,
    args: [0.09],
    type: 'dinamic',
    ...props
  }));

  useEffect(() => {
    setTimeout(() => {
      bulletApi.sleep();
      bulletApi.position.set(0, -100, 0);
    }, 5000);
  }, [])
  

  return (
    <group name="BULLET">
      <mesh ref={sphereRef} castShadow >
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshLambertMaterial color="yellow" />
      </mesh>
    </group>
    
  );
};

export default Bullet