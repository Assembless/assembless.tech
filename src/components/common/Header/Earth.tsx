import React, { Suspense, useEffect, useRef } from 'react'
import { extend, MeshProps, useFrame, useLoader, useThree } from 'react-three-fiber'
import { Mesh, TextureLoader } from 'three'
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Earth: React.FC<MeshProps> = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>()

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <>
            <Suspense fallback={<mesh
                scale={[1, 1, 1]}>
                <sphereGeometry args={[3, 52, 52]} />
                <meshStandardMaterial color={"#eee"} />
            </mesh>}>
                <Controls />
                <Asset />
            </Suspense>
        </>
    )
}

function Asset() {
    const mesh = useRef<Mesh>()
    const map = useLoader(TextureLoader, "/assets/8081_earthmap4k.jpg");
    const spec = useLoader(TextureLoader, "/assets/8081_earthspec4k.jpg");
    const lights = useLoader(TextureLoader, "/assets/8081_earthlights4k.jpg");
    const bumpMap = useLoader(TextureLoader, "/assets/8081_earthbump4k.jpg");

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.0005
    })

    return <mesh position={[0, 0, 0]} ref={mesh} scale={[1, 1, 1]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[50, 50, 50]} intensity={1} />

        <sphereGeometry args={[3, 52, 52]} />
        <meshStandardMaterial map={map} bumpMap={bumpMap} emissiveMap={spec} lightMap={lights} />
    </mesh>
}

const Controls = () => {
    const { camera, gl, invalidate } = useThree()
    const ref = useRef<any>()
    useFrame(() => ref.current.update())
    useEffect(() => void ref.current.addEventListener('change', invalidate), [])
    // @ts-ignore
    return <orbitControls ref={ref} zoomSpeed={0} enableDamping args={[camera, gl.domElement]} />
}

export default Earth