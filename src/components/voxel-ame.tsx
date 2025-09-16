"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmeContainer, AmeSpinner } from "./voxel-ame-loader";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelAme = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
  const refMixer = useRef<THREE.AnimationMixer | null>(null);
  const [loading, setLoading] = useState(true);

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;

    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);

      const camera = (renderer as any).camera as THREE.OrthographicCamera;
      if (camera) {
        const scale = scH * 0.0005 + 3;
        camera.left = -scale;
        camera.right = scale;
        camera.top = scale;
        camera.bottom = -scale;
        camera.updateProjectionMatrix();
      }
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    let req: number | null = null;

    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      const scale = scH * 0.0005 + 3;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      (renderer as any).camera = camera;

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      
      const clock = new THREE.Clock();
      
      const loader = new GLTFLoader();
      loader.load(
        "/ame.glb",
        (gltf) => {
          const model = gltf.scene;
          scene.add(model);
          
          if (gltf.animations && gltf.animations.length) {
            const mixer = new THREE.AnimationMixer(model);

            // Giá trị < 1.0 sẽ làm chậm, > 1.0 sẽ làm nhanh.
            mixer.timeScale = 0.5;

            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
            refMixer.current = mixer;
          }

          animate();
          setLoading(false);
        },
        undefined, 
        (error) => {
          console.error("An error happened while loading the model:", error);
        }
      );

      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        
        if (refMixer.current) {
          refMixer.current.update(delta);
        }

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 5;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        if (req !== null) {
          cancelAnimationFrame(req);
        }
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <AmeContainer ref={refContainer}>{loading && <AmeSpinner />}</AmeContainer>
  );
};

export default VoxelAme;