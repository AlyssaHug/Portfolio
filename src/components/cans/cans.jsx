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
    const { scene } = useGLTF("/models/can1.glb");
    
    // Boost metallic materials
    scene.traverse((child) => {
        if (child.isMesh && child.material) {
            if (child.material.metalness !== undefined) {
                child.material.metalness = Math.max(0.7, child.material.metalness);
                child.material.roughness = Math.min(0.4, child.material.roughness); // shinier
                child.material.envMapIntensity = 2.5;   // ← very important for cans
            }
        }
    });

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
                            intensity={0.2}
                            adjustCamera={0.9} // tune per canvas if needed (1.2–1.6 common for cans)
                            centerTo={0}
                            preset="soft" 
            environment="warehouse"  >
                            <Strawberry />
                        </Stage>
                        <directionalLight
                            position={[-0.5, -0.2, 1]}
                            intensity={0.2}
                            color='#ffffff'
                        />
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
                            intensity={0.2}
                            adjustCamera={0.9}
                            centerTo={0}
                            preset="soft" 
            environment="warehouse"  >
                            <Blueberry />
                        </Stage>
                        <directionalLight
                            position={[-0.5, -0.2, 1]}
                            intensity={0.2}
                            color='#ffffff'
                        />
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
            intensity={0.8}           
            adjustCamera={0.9}
            centerTo={0}
            preset="soft" 
            environment="warehouse"        
        >
            <Lavender />
        </Stage>
        {/* Key light */}
        <directionalLight
            position={[-0.5, -0.2, 1]}
            intensity={0.2}
            color="#ffffff"
        />

        <OrbitControls makeDefault enableZoom={false} />
    </Suspense>
</Canvas>
            </div>
        </div>
    );
}
