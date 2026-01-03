"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

interface Glasses3DViewerProps {
  className?: string
}

export default function Glasses3DViewer({ className = "" }: Glasses3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const modelRef = useRef<THREE.Group | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Create scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Create camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 3
    cameraRef.current = camera

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.8))
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    // Add additional lights for better visibility
    const light2 = new THREE.DirectionalLight(0xffffff, 0.5)
    light2.position.set(-5, 5, -5)
    scene.add(light2)

    // Load model
    const loader = new GLTFLoader()
    loader.load(
      "/science/Fantabulous Gaaris.glb",
      (gltf) => {
        const model = gltf.scene
        modelRef.current = model

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = (2 / maxDim) * 1.5 * 0.75 * 0.75 // Scale it down by 0.75x again
        
        // Center the model at origin, then scale
        model.position.sub(center)
        model.scale.multiplyScalar(scale)
        // Move the model down significantly to position it lower in the viewable container
        model.position.y -= 0.5
        
        scene.add(model)
      },
      (progress) => {
        // Optional: handle loading progress
      },
      (error) => {
        console.error("Error loading model:", error)
      }
    )

    // Track model area for zoom prevention
    let modelCenterY = height / 2 // Model is centered vertically
    let modelHeight = height * 0.6 // Approximate model height (60% of container)
    let modelBottomY = modelCenterY + modelHeight / 2

    // Add OrbitControls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 1.5
    controls.maxDistance = 5
    controls.autoRotate = true
    controls.autoRotateSpeed = 2.0
    controls.enableZoom = false
    controlsRef.current = controls

    // Disable zoom when mouse is below model area
    const handleWheel = (event: WheelEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      const localY = event.clientY - rect.top
      
      // If mouse is below the model area (with 50px buffer), prevent zoom
      if (localY > modelBottomY + 50) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }

    renderer.domElement.addEventListener('wheel', handleWheel, { passive: false })

    // Handle window resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
      // Update model area calculation
      modelCenterY = newHeight / 2
      modelHeight = newHeight * 0.6
      modelBottomY = modelCenterY + modelHeight / 2
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('wheel', handleWheel)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (controls) {
        controls.dispose()
      }
      if (renderer) {
        container.removeChild(renderer.domElement)
        renderer.dispose()
      }
    }
  }, [])

  return (
    <div className={`w-full ${className} overflow-hidden relative`} style={{ height: 'calc(50% + 2cm)' }}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}


