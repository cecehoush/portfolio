// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { gsap } from 'gsap';
// import NavBar from '../../navigation/NavBar';
// import './Roadmap.css';

// // Roadmap data structure
// const roadmapStops = [
//     { id: 1, title: "First Stop", content: "Welcome to the beginning of your journey! This is the first segment of our adventure." },
//     { id: 2, title: "Second Stop", content: "The next exciting destination awaits! Click to explore more." },
//     { id: 3, title: "Third Stop", content: "Continuing our journey with more exciting developments!" },
// ];

// const Roadmap = () => {
//     const mountRef = useRef(null);
//     const [journeyStarted, setJourneyStarted] = useState(false);
//     const [currentStop, setCurrentStop] = useState(1);
//     const sceneRef = useRef(null);
//     const cameraRef = useRef(null);
//     const balloonRef = useRef(null);
//     const stopRefs = useRef(roadmapStops.map(() => React.createRef()));
//     const rendererRef = useRef(null);

//     useEffect(() => {
//         // Scene setup
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setClearColor(0x000000, 0);
        
//         if (mountRef.current) {
//             mountRef.current.appendChild(renderer.domElement);
//         }

//         sceneRef.current = scene;
//         cameraRef.current = camera;
//         rendererRef.current = renderer;

//         // Lighting
//         const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
//         scene.add(ambientLight);
//         const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//         directionalLight.position.set(1, 1, 1);
//         scene.add(directionalLight);

//         // Load the balloon model
//         const loader = new GLTFLoader();
//         loader.load(
//             '/assets/balloon.glb',
//             (gltf) => {
//                 const balloon = gltf.scene;
//                 balloon.position.set(0, 0, -2);
//                 balloon.scale.set(0.5, 0.5, 0.5);
//                 balloonRef.current = balloon;
//                 scene.add(balloon);

//                 const animate = () => {
//                     requestAnimationFrame(animate);
//                     balloon.rotation.y += 0.005;
//                     renderer.render(scene, camera);
//                 };
//                 animate();
//             },
//             (xhr) => {
//                 console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//             },
//             (error) => {
//                 console.error('An error happened', error);
//             }
//         );

//         camera.position.z = 5;

//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener('resize', handleResize);

//         renderer.render(scene, camera);

//         return () => {
//             window.removeEventListener('resize', handleResize);
            
//             // Correct cleanup for Three.js objects
//             if (sceneRef.current) {
//                 // Dispose of all objects in the scene
//                 sceneRef.current.traverse((object) => {
//                     if (object.geometry) {
//                         object.geometry.dispose();
//                     }
//                     if (object.material) {
//                         if (Array.isArray(object.material)) {
//                             object.material.forEach(material => material.dispose());
//                         } else {
//                             object.material.dispose();
//                         }
//                     }
//                 });
//             }

//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//             }

//             if (mountRef.current && rendererRef.current) {
//                 mountRef.current.removeChild(rendererRef.current.domElement);
//             }
//         };
//     }, []);

//     const startJourney = () => {
//         if (!journeyStarted && cameraRef.current && balloonRef.current) {
//             setJourneyStarted(true);
            
//             const tl = gsap.timeline();

//             tl.to(cameraRef.current.position, {
//                 duration: 2,
//                 x: 1,
//                 y: 0.5,
//                 z: 1.5,
//                 ease: "power2.inOut"
//             }, 0);

//             tl.to(balloonRef.current.position, {
//                 duration: 2,
//                 x: -1.5,
//                 ease: "power2.inOut"
//             }, 0);

//             tl.to(balloonRef.current.rotation, {
//                 duration: 2,
//                 y: Math.PI / 4,
//                 ease: "power2.inOut"
//             }, 0);

//             stopRefs.current.forEach((ref, index) => {
//                 tl.fromTo(ref.current, 
//                     {
//                         opacity: 0,
//                         x: 50 + (index * 50)
//                     },
//                     {
//                         duration: 1.5,
//                         opacity: index === 0 ? 1 : 0.5,
//                         x: index === 0 ? 0 : (50 * index),
//                         ease: "power2.out"
//                     }, 0.5 + (index * 0.25));
//             });
//         }
//     };

//     const goToNextStop = () => {
//         if (currentStop < roadmapStops.length) {
//             const tl = gsap.timeline();

//             tl.to(stopRefs.current[currentStop - 1].current, {
//                 duration: 0.8,
//                 opacity: 0,
//                 x: -150,
//                 ease: "power2.in"
//             }, 0);

//             tl.to(stopRefs.current[currentStop].current, {
//                 duration: 1,
//                 opacity: 1,
//                 x: 0,
//                 filter: "blur(0px)",
//                 ease: "power2.out",
//                 onStart: () => {
//                     stopRefs.current[currentStop].current.classList.remove('background');
//                     stopRefs.current[currentStop].current.classList.add('focus');
//                 }
//             }, 0.8);

//             stopRefs.current.forEach((ref, index) => {
//                 if (index > currentStop) {
//                     tl.to(ref.current, {
//                         duration: 1,
//                         x: 50 * (index - currentStop),
//                         ease: "power2.inOut"
//                     }, 0.8);
//                 }
//             });

//             setCurrentStop(currentStop + 1);
//         }
//     };

//     return (
//         <div className="roadmap-container">
//             <NavBar />
//             <main>
//                 <h1>Roadmap</h1>
//                 <p>This is the roadmap page.</p>
//                 <div ref={mountRef} className="threejs-container" />
//                 {!journeyStarted && (
//                     <button onClick={startJourney} className="start-journey-button">
//                         Start Journey
//                     </button>
//                 )}
//                 {roadmapStops.map((stop, index) => (
//                     <div 
//                         key={stop.id}
//                         ref={stopRefs.current[index]}
//                         className={`text-box ${index === 0 ? 'focus' : 'background'}`}
//                         style={{opacity: 0}}
//                         onClick={index === currentStop - 1 ? goToNextStop : undefined}
//                     >
//                         <h2>{stop.title}</h2>
//                         <p>{stop.content}</p>
//                     </div>
//                 ))}
//             </main>
//         </div>
//     );
// };

// export default Roadmap;

import React from 'react';
import NavBar from '../../navigation/NavBar';
import RoadmapUnderConstruction from './Construction';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <NavBar />
      <RoadmapUnderConstruction />
    </div>
  );
};

export default Roadmap;