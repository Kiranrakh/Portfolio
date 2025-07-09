import React, { useEffect, useRef } from 'react';

interface DevOpsNode {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
  type: 'server' | 'container' | 'cloud' | 'pipeline' | 'monitor' | 'database' | 'network' | 'security' | 'kubernetes' | 'jenkins' | 'terraform' | 'docker';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
  errorState: boolean;
  errorTimer: number;
  connectionStrength: number;
  dataPackets: Array<{x: number, y: number, targetX: number, targetY: number, progress: number}>;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<DevOpsNode[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      nodesRef.current = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 8000);
      const types: DevOpsNode['type'][] = ['server', 'container', 'cloud', 'pipeline', 'monitor', 'database', 'network', 'security', 'kubernetes', 'jenkins', 'terraform', 'docker'];

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 6 + 4,
          opacity: Math.random() * 0.6 + 0.3,
          type: types[Math.floor(Math.random() * types.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05,
          pulsePhase: Math.random() * Math.PI * 2,
          errorState: Math.random() < 0.08,
          errorTimer: 0,
          connectionStrength: Math.random() * 0.5 + 0.5,
          dataPackets: [],
        });
      }
    };

    const drawDevOpsIcon = (ctx: CanvasRenderingContext2D, node: DevOpsNode) => {
      const { x, y, size, type, rotation, opacity, errorState, pulsePhase } = node;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Pulse effect
      const pulseScale = 1 + Math.sin(pulsePhase) * 0.1;
      ctx.scale(pulseScale, pulseScale);
      
      // Color based on state
      const baseOpacity = opacity * (0.8 + Math.sin(pulsePhase) * 0.2);
      let color, secondaryColor;
      
      if (errorState) {
        color = `rgba(239, 68, 68, ${baseOpacity})`;
        secondaryColor = `rgba(245, 158, 11, ${baseOpacity * 0.7})`;
      } else {
        color = `rgba(34, 211, 238, ${baseOpacity})`;
        secondaryColor = `rgba(168, 85, 247, ${baseOpacity * 0.7})`;
      }
      
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1.5;

      switch (type) {
        case 'server':
          // Server rack with status lights
          ctx.strokeRect(-size/2, -size/2, size, size);
          ctx.fillRect(-size/3, -size/3, size/8, size/8);
          ctx.fillRect(size/6, -size/3, size/8, size/8);
          ctx.fillRect(-size/3, 0, size/8, size/8);
          ctx.fillRect(size/6, 0, size/8, size/8);
          // Status indicator
          ctx.fillStyle = errorState ? 'rgba(239, 68, 68, 1)' : 'rgba(34, 197, 94, 1)';
          ctx.fillRect(-size/2 + 2, -size/2 + 2, 3, 3);
          break;
          
        case 'container':
          // Docker container with layers
          ctx.beginPath();
          ctx.roundRect(-size/2, -size/2, size, size, 4);
          ctx.stroke();
          ctx.strokeRect(-size/3, -size/3, size * 2/3, size/6);
          ctx.strokeRect(-size/3, -size/6, size * 2/3, size/6);
          ctx.strokeRect(-size/3, size/6, size * 2/3, size/6);
          break;
          
        case 'cloud':
          // Cloud with data flow
          ctx.beginPath();
          ctx.arc(-size/4, 0, size/3, 0, Math.PI * 2);
          ctx.arc(size/4, 0, size/4, 0, Math.PI * 2);
          ctx.arc(0, -size/4, size/3, 0, Math.PI * 2);
          ctx.fill();
          // Data streams
          ctx.strokeStyle = secondaryColor;
          ctx.setLineDash([2, 2]);
          ctx.beginPath();
          ctx.moveTo(0, size/2);
          ctx.lineTo(0, size);
          ctx.stroke();
          ctx.setLineDash([]);
          break;
          
        case 'pipeline':
          // CI/CD pipeline with flow
          ctx.strokeStyle = secondaryColor;
          ctx.beginPath();
          ctx.moveTo(-size/2, 0);
          ctx.lineTo(size/2, 0);
          ctx.stroke();
          // Pipeline stages
          ctx.fillStyle = color;
          ctx.fillRect(-size/3, -size/6, size/8, size/3);
          ctx.fillRect(-size/8, -size/6, size/8, size/3);
          ctx.fillRect(size/8, -size/6, size/8, size/3);
          // Flow arrows
          ctx.beginPath();
          ctx.moveTo(-size/6, -size/12);
          ctx.lineTo(-size/12, 0);
          ctx.lineTo(-size/6, size/12);
          ctx.stroke();
          break;
          
        case 'monitor':
          // Monitoring dashboard with graphs
          ctx.strokeRect(-size/2, -size/3, size, size * 2/3);
          // Graph lines
          ctx.beginPath();
          ctx.moveTo(-size/3, 0);
          ctx.lineTo(-size/6, -size/6);
          ctx.lineTo(0, size/12);
          ctx.lineTo(size/6, -size/12);
          ctx.lineTo(size/3, size/6);
          ctx.stroke();
          // Alert indicator
          if (errorState) {
            ctx.fillStyle = 'rgba(239, 68, 68, 1)';
            ctx.beginPath();
            ctx.arc(size/3, -size/4, 2, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
          
        case 'database':
          // Database cylinder
          ctx.beginPath();
          ctx.ellipse(0, -size/3, size/2, size/6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeRect(-size/2, -size/3, size, size * 2/3);
          ctx.beginPath();
          ctx.ellipse(0, size/3, size/2, size/6, 0, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        case 'network':
          // Network nodes
          const nodePositions = [
            [-size/3, -size/3], [size/3, -size/3],
            [0, 0], [-size/3, size/3], [size/3, size/3]
          ];
          nodePositions.forEach(([nx, ny]) => {
            ctx.beginPath();
            ctx.arc(nx, ny, 2, 0, Math.PI * 2);
            ctx.fill();
          });
          // Connections
          ctx.beginPath();
          ctx.moveTo(-size/3, -size/3);
          ctx.lineTo(0, 0);
          ctx.lineTo(size/3, -size/3);
          ctx.moveTo(0, 0);
          ctx.lineTo(-size/3, size/3);
          ctx.moveTo(0, 0);
          ctx.lineTo(size/3, size/3);
          ctx.stroke();
          break;
          
        case 'security':
          // Security shield
          ctx.beginPath();
          ctx.moveTo(0, -size/2);
          ctx.lineTo(size/3, -size/6);
          ctx.lineTo(size/3, size/3);
          ctx.lineTo(0, size/2);
          ctx.lineTo(-size/3, size/3);
          ctx.lineTo(-size/3, -size/6);
          ctx.closePath();
          ctx.stroke();
          // Lock icon
          ctx.strokeRect(-size/6, -size/12, size/3, size/4);
          ctx.beginPath();
          ctx.arc(0, -size/6, size/8, 0, Math.PI, true);
          ctx.stroke();
          break;
          
        case 'kubernetes':
          // Kubernetes wheel
          const spokes = 6;
          ctx.beginPath();
          for (let i = 0; i < spokes; i++) {
            const angle = (i * Math.PI * 2) / spokes;
            const x1 = Math.cos(angle) * size/4;
            const y1 = Math.sin(angle) * size/4;
            const x2 = Math.cos(angle) * size/2;
            const y2 = Math.sin(angle) * size/2;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          }
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, size/6, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'jenkins':
          // Jenkins butler hat and bow tie
          ctx.beginPath();
          ctx.ellipse(0, -size/3, size/2, size/6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeRect(-size/3, -size/3, size * 2/3, size/3);
          // Bow tie
          ctx.beginPath();
          ctx.moveTo(-size/4, 0);
          ctx.lineTo(0, -size/6);
          ctx.lineTo(size/4, 0);
          ctx.lineTo(0, size/6);
          ctx.closePath();
          ctx.fill();
          break;
          
        case 'terraform':
          // Terraform T logo
          ctx.strokeRect(-size/2, -size/2, size/6, size);
          ctx.strokeRect(-size/3, -size/2, size * 2/3, size/6);
          ctx.strokeRect(size/6, -size/3, size/6, size * 2/3);
          break;
          
        case 'docker':
          // Docker whale with containers
          ctx.beginPath();
          ctx.ellipse(0, size/4, size/2, size/4, 0, 0, Math.PI * 2);
          ctx.fill();
          // Container blocks
          for (let i = -2; i <= 2; i++) {
            ctx.strokeRect(i * size/6, -size/3, size/8, size/4);
          }
          // Whale spout
          ctx.beginPath();
          ctx.moveTo(-size/4, size/4);
          ctx.lineTo(-size/3, 0);
          ctx.stroke();
          break;
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add dynamic grid background
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      nodesRef.current.forEach((node) => {
        // Update position
        node.x += node.dx;
        node.y += node.dy;
        node.rotation += node.rotationSpeed;
        node.pulsePhase += 0.08;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        // Error state management
        if (node.errorState) {
          node.errorTimer++;
          if (node.errorTimer > 180) { // 3 seconds at 60fps
            node.errorState = false;
            node.errorTimer = 0;
          }
        } else if (Math.random() < 0.001) { // Random chance to enter error state
          node.errorState = true;
        }
        
        // Update data packets
        node.dataPackets = node.dataPackets.filter(packet => {
          packet.progress += 0.02;
          packet.x = packet.x + (packet.targetX - packet.x) * packet.progress;
          packet.y = packet.y + (packet.targetY - packet.y) * packet.progress;
          return packet.progress < 1;
        });

        // Draw DevOps icon
        drawDevOpsIcon(ctx, node);
      });

      // Draw connections between nearby nodes
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            // Connection styling based on node states and types
            const connectionOpacity = 0.2 * (1 - distance / 200) * node.connectionStrength;
            let connectionColor;
            
            if (node.errorState || otherNode.errorState) {
              connectionColor = `rgba(239, 68, 68, ${connectionOpacity})`;
              ctx.setLineDash([8, 4]); // Dashed line for error connections
            } else if (node.type === otherNode.type) {
              connectionColor = `rgba(34, 211, 238, ${connectionOpacity * 1.5})`;
              ctx.setLineDash([]);
            } else {
              connectionColor = `rgba(168, 85, 247, ${connectionOpacity * 0.8})`;
              ctx.setLineDash([]);
            }
            
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Add data flow particles along connections
            if (Math.random() < 0.005 && !node.errorState && !otherNode.errorState) {
              node.dataPackets.push({
                x: node.x,
                y: node.y,
                targetX: otherNode.x,
                targetY: otherNode.y,
                progress: 0
              });
            }
          }
        });
      });
      
      // Draw data packets
      nodesRef.current.forEach((node) => {
        node.dataPackets.forEach((packet) => {
          ctx.beginPath();
          ctx.arc(packet.x, packet.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${1 - packet.progress})`;
          ctx.fill();
          
          // Add trail effect
          ctx.beginPath();
          ctx.arc(packet.x, packet.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${(1 - packet.progress) * 0.3})`;
          ctx.fill();
        });
      });

      // Add system status indicators
      if (Math.random() < 0.01) {
        const randomNode = nodesRef.current[Math.floor(Math.random() * nodesRef.current.length)];
        if (randomNode && !randomNode.errorState) {
          ctx.beginPath();
          ctx.arc(randomNode.x, randomNode.y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(randomNode.x, randomNode.y, 12, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createNodes();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-25"
    />
  );
};