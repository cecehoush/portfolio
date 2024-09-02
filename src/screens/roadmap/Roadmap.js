import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import NavBar from '../../navigation/NavBar';
import './Roadmap.css';

const Roadmap = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Set clear color to transparent
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Load the balloon model
        const loader = new GLTFLoader();
        loader.load(
            '/assets/balloon.glb', // Update this path to where your GLB file is located
            (gltf) => {
                const balloon = gltf.scene;
                balloon.position.set(0, 0, -2); // Adjust position to be more visible
                balloon.scale.set(0.5, 0.5, 0.5); // Scale down if needed
                scene.add(balloon);

                // Optional: add rotation animation
                const animate = () => {
                    requestAnimationFrame(animate);
                    balloon.rotation.y += 0.005;
                    renderer.render(scene, camera);
                };
                animate();
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error happened', error);
            }
        );

        // Position camera
        camera.position.z = 5;

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Initial render
        renderer.render(scene, camera);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="roadmap-container">
            <NavBar />
            <main>
                <h1>Roadmap</h1>
                <p>This is the roadmap page.</p>
                <div ref={mountRef} className="threejs-container" />
            </main>
        </div>
    );
};

export default Roadmap;