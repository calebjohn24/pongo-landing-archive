import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html, useGLTF } from '@react-three/drei';
import { tokens } from '@pongo-ui/react-components';
import { ReceiveSurvey, CompleteSurvey, ProductRecommendations } from '../components';

export const Laptop = (props: any) => {
  const { tabValue } = props;
  const group = React.useRef<any>();
  const { nodes, materials } = useGLTF('/image/mac.glb') as any;

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
    <group ref={group} {...props} dispose={null} scale={0.85}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes.Cube008.geometry} />
          <mesh material={materials['matte.001']} geometry={nodes.Cube008_1.geometry} />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[-4, 0.04, -2.8]}
              scale={0.5}
              transform
              occlude
              style={{
                position: 'absolute',
                backgroundColor: tokens.canvasColor,
                width: '668px',
                height: '430px',
                overflow: 'scroll',
              }}
            >
              {tabValue === '1' ? (
                <ReceiveSurvey />
              ) : tabValue === '2' ? (
                <CompleteSurvey />
              ) : (
                <ProductRecommendations />
              )}
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes.Cube002.geometry} />
        <mesh material={materials.trackpad} geometry={nodes.Cube002_1.geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
};
