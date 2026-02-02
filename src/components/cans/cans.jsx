import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import "./cans.css";

function Strawberry() {
    const { scene } = useGLTF("/models/can3.glb"); // Path relative to /public
    return <primitive object={scene} />;
}

function Blueberry() {
    const { scene } = useGLTF("/models/can2.glb"); // Path relative to /public
    return <primitive object={scene} />;
}

function Lavender() {
    const { scene } = useGLTF("/models/can1.glb"); // Path relative to /public
    return <primitive object={scene} />;
}

export default function Cans() {
    return (
        <div className='can-container'>
            <div className='can strawberry'>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45, position: [0, 0.5, 4] }} // closer for single model
                    style={{ height: "50vh", width: "100%" }}>
                    <Suspense fallback={null}>
                        <Stage
                            intensity={0.5}
                            adjustCamera={0.9} // tune per canvas if needed (1.2–1.6 common for cans)
                            centerTo={0}
                            preset='soft'>
                            <Strawberry />
                        </Stage>
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className='can-wrapper blueberry'>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45, position: [0, 0.5, 4] }}
                    style={{ height: "50vh", width: "100%" }}>
                    <Suspense fallback={null}>
                        <Stage
                            intensity={0.5}
                            adjustCamera={0.9}
                            centerTo={0}
                            preset='soft'>
                            <Blueberry />
                        </Stage>
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className='can-wrapper lavender'>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45, position: [0, 0.5, 4] }}
                    style={{ height: "50vh", width: "100%" }}>
                    <Suspense fallback={null}>
                        <Stage
                            intensity={0.5}
                            adjustCamera={0.9}
                            centerTo={0}
                            preset='soft'>
                            <Lavender />
                        </Stage>
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
