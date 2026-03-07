// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
// import { useRef } from "react";

import { useEffect, useRef } from "react";

export default function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // cursor repulsion
        if (mouse.x && mouse.y) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            this.x += dx / 10;
            this.y += dy / 10;
          }
        }

        // screen wrap
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 400; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
}
















// function MovingStars() {
//   const starsRef = useRef();
//   const { mouse } = useThree();

//   useFrame(() => {
//     if (starsRef.current) {
//       starsRef.current.rotation.x = mouse.y * 0.5;
//       starsRef.current.rotation.y = mouse.x * 0.5;
//     }
//   });

//   return (
//     <group ref={starsRef}>
//       <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
//     </group>
//   );
// }

// export default function GalaxyBackground() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 1] }}
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "black",
//       }}
//     >
//       <MovingStars />
//     </Canvas>
//   );
// }
