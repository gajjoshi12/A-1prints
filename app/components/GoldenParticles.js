"use client";

import React, { useEffect, useRef } from "react";

export default function GoldenParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedY = -Math.random() * 0.5 - 0.2;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.6 + 0.2;
                this.fadeSpeed = Math.random() * 0.005 + 0.002;
                this.color = Math.random() > 0.5 ? "#FFD700" : "#DAA520";
                this.shimmer = 0;
                this.shimmerSpeed = Math.random() * 0.1 + 0.05;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
                this.shimmer += this.shimmerSpeed;

                // Fade in and out
                const shimmerOpacity = Math.sin(this.shimmer) * 0.3 + 0.7;

                if (this.y < -10 || this.opacity <= 0) {
                    this.reset();
                    this.y = canvas.height + 10;
                }

                return shimmerOpacity;
            }

            draw(shimmerOpacity) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity * shimmerOpacity;
                ctx.fill();

                // Add glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 1;
            }
        }

        // Create particles
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                const shimmerOpacity = particle.update();
                particle.draw(shimmerOpacity);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-5"
            style={{ opacity: 0.6 }}
        />
    );
}
