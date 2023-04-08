import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as Three from "three"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)

//
// const renderer = new Three.WebGL1Renderer;
// const camera = new Three.PerspectiveCamera;
// const scene = new Three.Scene;
//
// window.addEventListener('resize', () => {
//     // update display width and height
//     let width = window.innerWidth
//     let height = window.innerHeight
//     // update camera aspect
//     camera.aspect = width / height
//     camera.updateProjectionMatrix();
//     // update renderer
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.render(scene, camera);
//     console.log("Ran")
// })
