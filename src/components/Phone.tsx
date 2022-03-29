import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html, useGLTF } from '@react-three/drei';
import { tokens } from '@pongo-ui/react-components';
import { makeStyles, shorthands } from '@griffel/react';
import { ReceiveSurvey, CompleteSurvey, ProductRecommendations } from '.';

const useStyles = makeStyles({
  phoneStyles: {
    position: 'absolute',
    width: '390px',
    height: '840px',
    ...shorthands.borderRadius('34px'),
    ...shorthands.padding('10px'),
    boxSizing: 'border-box',
    backgroundColor: tokens.canvasColor,
  },
});

export const Phone = (props: any) => {
  const styles = useStyles();
  const { tabValue } = props;
  const group = React.useRef<any>();
  const { nodes, materials } = useGLTF('/image/smart-phone.glb') as any;

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    if (group?.current?.rotation!) {
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-5 + Math.sin(t)) / 5, 0.1);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.13, 5.5, 0.2]} rotation={[-Math.PI, -Math.PI / 2, -Math.PI]} scale={0.1} rotation-x={-3.467}>
        <mesh geometry={nodes.立方体001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.立方体001_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.立方体001_2.geometry} material={materials.Back} />
        <mesh geometry={nodes.立方体001_3.geometry} material={materials.GOLD} />
        <mesh geometry={nodes.立方体001_4.geometry} material={materials.BARRES} />
        <mesh geometry={nodes.立方体001_5.geometry} material={materials.Labber} />
        <mesh geometry={nodes.立方体001_6.geometry} material={materials.GLASS}>
          <Html className="content" rotation-y={Math.PI / 2} position={[4.74, 11, 25]} transform scale={4.2} occlude>
            <div className={styles.phoneStyles}>
              {tabValue === '1' ? (
                <ReceiveSurvey />
              ) : tabValue === '2' ? (
                <CompleteSurvey />
              ) : (
                <ProductRecommendations />
              )}
            </div>
          </Html>
        </mesh>
        <mesh geometry={nodes.立方体001_7.geometry} material={materials.Lenscover} />
        <mesh geometry={nodes.立方体001_8.geometry} material={materials.CA} />
        <mesh geometry={nodes.立方体001_9.geometry} material={materials.Display} />
        <mesh geometry={nodes.立方体001_10.geometry} material={materials['Lens.2']} />
        <mesh geometry={nodes.立方体001_11.geometry} material={materials.GLS} />
      </group>
    </group>
  );
};
