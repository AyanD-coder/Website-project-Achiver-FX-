"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button as JolyButton } from "@/components/ui/joly-button";
import { useMediaQuery } from "@/lib/useMediaQuery";

const REGISTER_URL = "/register";

interface ElasticHueSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  labelClassName?: string;
}

function ElasticHueSlider({
  value,
  onChange,
  min = 0,
  max = 360,
  step = 1,
  label = "Adjust Hue",
  labelClassName,
}: ElasticHueSliderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const progress = (value - min) / (max - min);
  const thumbPosition = progress * 100;

  return (
    <div className="relative flex w-full max-w-xs scale-75 flex-col items-center sm:scale-100">
      {label ? (
        <label
          htmlFor="hue-slider-native"
          className={`mb-2 text-sm text-gray-300 ${labelClassName ?? ""}`}
        >
          {label}
        </label>
      ) : null}

      <div className="relative flex h-5 w-full items-center">
        <input
          id="hue-slider-native"
          type="range"
          suppressHydrationWarning
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 z-40 h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
          style={{ WebkitAppearance: "none" }}
        />

        <div className="absolute left-0 z-0 h-1 w-full rounded-full bg-gray-700" />

        <div
          className="absolute left-0 z-10 h-1 rounded-full bg-blue-500"
          style={{ width: `${thumbPosition}%` }}
        />

        <motion.div
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${thumbPosition}%` }}
          animate={{ scale: isDragging ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: isDragging ? 20 : 30 }}
        >
          <div className="h-4 w-4 rounded-full border border-white/40 bg-white shadow-[0_0_24px_rgba(59,130,246,0.75)]" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="mt-2 text-xs text-gray-500"
        >
          {value}°
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

interface LightningProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
  active?: boolean;
  maxFPS?: number;
}

function Lightning({
  hue = 230,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
  active = true,
  maxFPS = 30,
}: LightningProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }

    const syncCanvasSize = () => {
      const nextWidth = Math.max(1, Math.round(canvas.clientWidth));
      const nextHeight = Math.max(1, Math.round(canvas.clientHeight));

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
        gl.viewport(0, 0, nextWidth, nextHeight);
      }
    };

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
        p = fract(p * .1031);
        p *= p + 33.33;
        p *= p + p;
        return fract(p);
      }

      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * .1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
        float c = cos(theta);
        float s = sin(theta);
        return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 fp = fract(p);
        float a = hash12(ip);
        float b = hash12(ip + vec2(1.0, 0.0));
        float c = hash12(ip + vec2(0.0, 1.0));
        float d = hash12(ip + vec2(1.0, 1.0));
        vec2 t = smoothstep(0.0, 1.0, fp);
        return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < OCTAVE_COUNT; ++i) {
          value += amplitude * noise(p);
          p *= rotate2d(0.45);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = fragCoord / iResolution.xy;
        uv = 2.0 * uv - 1.0;
        uv.x *= iResolution.x / iResolution.y;
        uv.x += uXOffset;
        uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;

        float dist = abs(uv.x);
        vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
        vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
        col = pow(col, vec3(1.0));
        fragColor = vec4(col, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);

    const vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const uHueLocation = gl.getUniformLocation(program, "uHue");
    const uXOffsetLocation = gl.getUniformLocation(program, "uXOffset");
    const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
    const uIntensityLocation = gl.getUniformLocation(program, "uIntensity");
    const uSizeLocation = gl.getUniformLocation(program, "uSize");

    const startTime = performance.now();
    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let destroyed = false;
    let isInViewport = true;
    let isPageVisible =
      typeof document === "undefined" || document.visibilityState !== "hidden";
    let lastFrameTime = 0;
    const frameIntervalMs = 1000 / Math.max(1, maxFPS);

    const drawFrame = (elapsedTime: number) => {
      syncCanvasSize();
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(iTimeLocation, elapsedTime);
      gl.uniform1f(uHueLocation, hue);
      gl.uniform1f(uXOffsetLocation, xOffset);
      gl.uniform1f(uSpeedLocation, speed);
      gl.uniform1f(uIntensityLocation, intensity);
      gl.uniform1f(uSizeLocation, size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    const render = (currentTime: number) => {
      animationFrameId = 0;

      if (destroyed || !active || !isInViewport || !isPageVisible) {
        return;
      }

      if (currentTime - lastFrameTime >= frameIntervalMs) {
        lastFrameTime = currentTime;
        drawFrame((currentTime - startTime) / 1000);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const ensureAnimation = () => {
      if (
        !destroyed &&
        !animationFrameId &&
        active &&
        isInViewport &&
        isPageVisible
      ) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      isPageVisible =
        typeof document === "undefined" ||
        document.visibilityState !== "hidden";

      if (isPageVisible) {
        ensureAnimation();
      } else {
        stopAnimation();
      }
    };

    syncCanvasSize();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        syncCanvasSize();
      });
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener("resize", syncCanvasSize);
    }

    let viewportObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      viewportObserver = new IntersectionObserver(
        (entries) => {
          const nextEntry = entries[0];
          isInViewport = nextEntry?.isIntersecting ?? true;

          if (isInViewport) {
            ensureAnimation();
          } else {
            stopAnimation();
          }
        },
        { rootMargin: "200px 0px" },
      );

      viewportObserver.observe(canvas);
    }

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    ensureAnimation();

    return () => {
      destroyed = true;
      stopAnimation();
      resizeObserver?.disconnect();
      viewportObserver?.disconnect();
      window.removeEventListener("resize", syncCanvasSize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      gl.deleteBuffer(vertexBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [active, hue, intensity, maxFPS, size, speed, xOffset]);

  return <canvas ref={canvasRef} className="relative h-full w-full" />;
}

function FeatureItem({ name, value, position }: FeatureItemProps) {
  return (
    <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
      <div className="relative flex items-center gap-2">
        <div className="relative">
          <div className="h-2 w-2 rounded-full bg-white group-hover:animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-white/20 blur-sm opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative text-white">
          <div className="font-medium transition-colors duration-300 group-hover:text-white">{name}</div>
          <div className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white/70">{value}</div>
          <div className="absolute -inset-2 -z-10 rounded-lg bg-white/10 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}



interface HeroSectionProps {
  sliderLabelClassName?: string;
}

export function HeroSection({ sliderLabelClassName }: HeroSectionProps = {}) {
  const [lightningHue, setLightningHue] = useState(220);
  const [shouldRunLightning, setShouldRunLightning] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isMobileViewport = useMediaQuery("(max-width: 767px)");
  const dynamicAccent = {
    start: `hsl(${(lightningHue - 16 + 360) % 360} 94% 68%)`,
    mid: `hsl(${lightningHue} 96% 60%)`,
    end: `hsl(${(lightningHue + 22) % 360} 92% 54%)`,
    soft: `hsl(${(lightningHue + 6) % 360} 100% 82%)`,
    glow: `hsla(${lightningHue} 100% 62% / 0.34)`,
    glowStrong: `hsla(${lightningHue} 100% 62% / 0.52)`,
    border: `hsla(${lightningHue} 100% 84% / 0.24)`,
  };
  const tradeAnywhereStyle = {
    "--trade-anywhere-dark-start": `hsl(${(lightningHue - 18 + 360) % 360} 92% 72%)`,
    "--trade-anywhere-dark-mid": `hsl(${lightningHue} 94% 64%)`,
    "--trade-anywhere-dark-end": `hsl(${(lightningHue + 18) % 360} 88% 56%)`,
  } as CSSProperties;
  const heroSubtitleStyle = {
    "--hero-subtitle-dark": `hsl(${lightningHue} 78% 84%)`,
  } as CSSProperties;
  const ctaButtonStyle = {
    backgroundImage: `linear-gradient(135deg, ${dynamicAccent.start}, ${dynamicAccent.mid}, ${dynamicAccent.end})`,
    boxShadow: `0 16px 36px ${dynamicAccent.glow}, inset 0 1px 0 rgba(255,255,255,0.18)`,
    borderColor: dynamicAccent.border,
  } as CSSProperties;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--achiever-lightning-start", dynamicAccent.start);
    root.style.setProperty("--achiever-lightning-mid", dynamicAccent.mid);
    root.style.setProperty("--achiever-lightning-end", dynamicAccent.end);
    root.style.setProperty("--achiever-lightning-soft", dynamicAccent.soft);
    root.style.setProperty("--achiever-lightning-glow", dynamicAccent.glow);
    root.style.setProperty("--achiever-lightning-glow-strong", dynamicAccent.glowStrong);

    return () => {
      root.style.removeProperty("--achiever-lightning-start");
      root.style.removeProperty("--achiever-lightning-mid");
      root.style.removeProperty("--achiever-lightning-end");
      root.style.removeProperty("--achiever-lightning-soft");
      root.style.removeProperty("--achiever-lightning-glow");
      root.style.removeProperty("--achiever-lightning-glow-strong");
    };
  }, [
    dynamicAccent.end,
    dynamicAccent.glow,
    dynamicAccent.glowStrong,
    dynamicAccent.mid,
    dynamicAccent.soft,
    dynamicAccent.start,
  ]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId = 0;

    const startLightning = () => {
      setShouldRunLightning(true);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startLightning, { timeout: 1200 });
    } else {
      timeoutId = globalThis.setTimeout(startLightning, 900);
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative min-h-[104svh] w-full overflow-visible bg-transparent text-white sm:min-h-[115vh]">
      <div className="relative z-20 mx-auto flex min-h-[96svh] max-w-7xl flex-col px-4 pb-24 pt-28 sm:min-h-screen sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-44 lg:pt-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative top-[18%] z-20 hidden w-full min-[980px]:block"
        >
          <motion.div variants={itemVariants}>
            <FeatureItem name="Forex" value="Global pairs" position="left-0 sm:left-10 top-40" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="Indices" value="Major markets" position="left-1/4 top-24" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="Execution" value="Ultra fast" position="right-1/4 top-24" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="Liquidity" value="Deep access" position="right-0 sm:right-10 top-40" />
          </motion.div>
        </motion.div>

        <div className="relative z-30 mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center text-center">
          <ElasticHueSlider
            value={lightningHue}
            onChange={setLightningHue}
            label="Global Access for All Markets"
            labelClassName={sliderLabelClassName}
          />

          <button
            className="group mb-6 flex items-center space-x-2 rounded-full bg-white/5 px-4 py-2 text-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
          >
            <span>Trade with premium access</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <h1
            style={tradeAnywhereStyle}
            className="mb-2 bg-[linear-gradient(90deg,var(--trade-anywhere-dark-start),var(--trade-anywhere-dark-mid),var(--trade-anywhere-dark-end))] bg-clip-text text-[2.6rem] font-extrabold tracking-tight text-transparent drop-shadow-[0_0_28px_rgba(255,255,255,0.08)] min-[380px]:text-5xl md:text-7xl"
          >
            Trade Anywhere,
          </h1>

          <h2
            className="bg-gradient-to-r from-brand-glow to-brand-primary bg-clip-text pb-3 text-[2.1rem] font-bold tracking-tight text-transparent min-[380px]:text-4xl md:text-6xl"
          >
            Earn Everywhere
          </h2>

          <p
            style={heroSubtitleStyle}
            className="mb-9 max-w-2xl text-center text-base font-medium leading-relaxed text-[color:var(--hero-subtitle-dark)] md:text-xl"
          >
            Everything you need to trade Forex in one place.
          </p>

          <div className="w-full sm:w-auto">
            <JolyButton
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full border text-black"
              style={ctaButtonStyle}
            >
              <a href={REGISTER_URL}>
                GET STARTED TODAY
              </a>
            </JolyButton>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-[36rem] z-0 sm:-bottom-[42rem] lg:-bottom-[56rem]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,12,0.92)_0%,rgba(4,8,20,0.72)_38%,rgba(4,8,20,0.38)_75%,rgba(4,8,20,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_50%_55%,rgba(37,99,235,0.10),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,140,0.16),transparent_34%),radial-gradient(circle_at_50%_75%,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-black/56" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(8,12,24,0.14),rgba(3,6,16,0.58)_58%,rgba(2,4,12,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_24%,rgba(0,0,0,0.38)_68%,rgba(0,0,0,0.68)_100%)]" />

        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-90 sm:w-[125%]">
          <Lightning
            hue={lightningHue}
            xOffset={0}
            speed={1.6}
            intensity={0.20}
            size={2.15}
            active={shouldRunLightning && !shouldReduceMotion}
            maxFPS={isMobileViewport ? 18 : 30}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-80 bg-transparent" />
      </div>
    </div>
  );
}
