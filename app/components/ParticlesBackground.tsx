import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            radius: number;
            color: string;
            velocity: { x: number; y: number };
            alpha: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.radius = Math.random() * 2 + 1;
                // Indigo/Pink/Purple hues for the glow
                const colors = ["#6366f1", "#ec4899", "#8b5cf6", "#a855f7"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.velocity = {
                    x: (Math.random() - 0.5) * 0.5, // Slow random movement
                    y: (Math.random() - 0.5) * 0.5,
                };
                this.alpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                // Wrap around screen
                if (this.x < 0) this.x = canvas!.width;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;
            }

            draw() {
                ctx!.save();
                ctx!.globalAlpha = this.alpha;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx!.fillStyle = this.color;
                ctx!.shadowBlur = 15; // Glow effect
                ctx!.shadowColor = this.color;
                ctx!.fill();
                ctx!.restore();
            }
        }

        function initParticles() {
            particles = [];
            // Adjust density for mobile/desktop
            const particleCount = Math.min(
                50,
                Math.floor((window.innerWidth * window.innerHeight) / 15000)
            );

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            // Create trail effect by drawing semi-transparent background instead of clearing
            ctx!.fillStyle = "rgba(10, 10, 10, 0.1)"; // Dark background matching the theme
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: "#0a0a0a" }} // Fallback background
        />
    );
}
