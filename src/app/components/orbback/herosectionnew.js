"use client";
import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Vec3 } from "ogl";
import "./Orb.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const companies = [
  { name: "Google", icon: "/icons/google.svg" },
  { name: "Amazon", icon: "/icons/amazon.svg" },
  { name: "Meta", icon: "/icons/dot.svg" },
  { name: "Apple", icon: "/icons/dot.svg" },
  { name: "Paypal", icon: "/icons/dot.svg" },
  { name: "Adobe", icon: "/icons/adobe.svg" },
  { name: "Oracle", icon: "/icons/dot.svg" },
];

const skills = [
  { name: "DSA", icon: "/icons/dsa.svg" },
  { name: "Python", icon: "/icons/dot.svg" },
  { name: "Java", icon: "/icons/dot.svg" },
  { name: "Software Testing", icon: "/icons/dot.svg" },
  { name: "System Design", icon: "/icons/system.svg" },
  { name: "Angular", icon: "/icons/dot.svg" },
  { name: "React", icon: "/icons/dot.svg" },
];

const domains = [
  { name: "Frontend Developer", icon: "/icons/fd.svg" },
  { name: "Backend Developer", icon: "/icons/bd.svg" },
  { name: "Data Scientist", icon: "/icons/ds.svg" },
  { name: "Fullstack Developer", icon: "/icons/fullstack.svg" },
  { name: "QA Engineer", icon: "/icons/qa.svg" },
  { name: "Data Engineer", icon: "/icons/de.svg" },
  { name: "UI/UX Designer", icon: "/icons/uiux.svg" },
];

export default function Herosectionnew({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
}) {
  const router = useRouter();
  const ctnDom = useRef(null);

  const vert = /* glsl */ `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = /* glsl */ `
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }
    
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);
      
      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;
      
      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;
      
      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);
      
      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
      
      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);
      
      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
      
      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
      
      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Vec3(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        hue: { value: hue },
        hover: { value: 0 },
        rot: { value: 0 },
        hoverIntensity: { value: hoverIntensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      if (!container) return;
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      program.uniforms.iResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    }
    window.addEventListener("resize", resize);
    resize();

    let targetHover = 0;
    let lastTime = 0;
    let currentRot = 0;
    const rotationSpeed = 0.3;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const size = Math.min(width, height);
      const centerX = width / 2;
      const centerY = height / 2;
      const uvX = ((x - centerX) / size) * 2.0;
      const uvY = ((y - centerY) / size) * 2.0;

      if (Math.sqrt(uvX * uvX + uvY * uvY) < 0.8) {
        targetHover = 1;
      } else {
        targetHover = 0;
      }
    };

    const handleMouseLeave = () => {
      targetHover = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let rafId;
    const update = (t) => {
      rafId = requestAnimationFrame(update);
      const dt = (t - lastTime) * 0.001;
      lastTime = t;
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.hue.value = hue;
      program.uniforms.hoverIntensity.value = hoverIntensity;

      const effectiveHover = forceHoverState ? 1 : targetHover;
      program.uniforms.hover.value +=
        (effectiveHover - program.uniforms.hover.value) * 0.1;

      if (rotateOnHover && effectiveHover > 0.5) {
        currentRot += dt * rotationSpeed;
      }
      program.uniforms.rot.value = currentRot;

      renderer.render({ scene: mesh });
    };
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  return (
    <section
      className="relative w-full min-h-[80vh] pt-28 pb-16 px-2 md:px-0 font-poppins transition-colors duration-300"
      style={{
        background: "var(--hero-gradient)",
      }}
    >
      {/* Orb Container - replaces glowing circle */}
      <div
        ref={ctnDom}
        className="orb-container"
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "50%",
          top: "50px",
          zIndex: 1,
          width: "100%",
          height: "400px",
          transform: "translateX(-50%) translateY(10%) scale(1.5)",
          display: "flex",
          justifyContent: "center",
        }}
      />
      {/* Hero Content */}
      <div className="relative w-full flex flex-col items-center text-center max-w-3xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-3 leading-tight text-center"
          style={{ color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Supercharge your career with <br className="hidden md:block" />
          <span className="block">Long Term Mentorship</span>
        </motion.h2>
        <motion.p
          className="mb-7 max-w-2xl px-4 mx-auto text-sm"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Land your dream job, role, and company faster than ever with 1:1 long
          term mentorship.
        </motion.p>
        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-2.5 rounded-md cursor-pointer shadow-sm transition-all text-base"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            Book a Free Trial
          </button>
          <button
            onClick={() => router.push("/mentors")}
            className="flex justify-center cursor-pointer items-center px-6 py-2.5 rounded-md shadow-sm transition-all text-base text-white"
            style={{
              background: "var(--primary)",
            }}
          >
            Find Your Mentor
            <img
              src="/icons/right.svg"
              alt="arrow"
              className="ml-2 h-6 w-6 object-contain"
            />
          </button>
        </motion.div>
        {/* Features */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium mb-10"
          style={{ color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.27 }}
        >
          <div className="flex items-center gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            No Payment Required
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            Verified Mentors Only
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/tick.svg"
              alt="tick"
              className="h-4 w-4 object-contain"
            />
            Reschedule Anytime
          </div>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 mt-2 z-10 relative">
        {/* Companies */}
        <motion.div
          className="shadow-sm rounded-xl p-5 flex flex-col transition-colors duration-300"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.12 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base" style={{ color: "var(--foreground)" }}>
              Companies
            </span>
            <span className="text-lg">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {companies.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={c.icon}
                    alt={c.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm" style={{ color: "var(--foreground)" }}>
                    {c.name}
                  </span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button
            className="mt-auto py-2 rounded-md text-sm font-semibold transition-all"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            Explore All Companies &rarr;
          </button>
        </motion.div>
        {/* Skills */}
        <motion.div
          className="shadow-sm rounded-xl p-5 flex flex-col transition-colors duration-300"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.17 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base" style={{ color: "var(--foreground)" }}>
              Skills
            </span>
            <span className="text-lg">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {skills.map((s) => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm" style={{ color: "var(--foreground)" }}>
                    {s.name}
                  </span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button
            className="mt-auto py-2 rounded-md text-sm font-semibold transition-all"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            Explore All Skills &rarr;
          </button>
        </motion.div>
        {/* Domains */}
        <motion.div
          className="rounded-xl shadow-sm p-5 flex flex-col transition-colors duration-300"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.22 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-base" style={{ color: "var(--foreground)" }}>
              Domains
            </span>
            <span className="text-lg">
              <img
                src="/icons/rightArrow.svg"
                alt="arrow"
                className="h-10 w-10 object-contain"
              />
            </span>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            {domains.map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={d.icon}
                    alt={d.name}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm" style={{ color: "var(--foreground)" }}>
                    {d.name}
                  </span>
                </div>
                <img
                  src="/icons/righticon.svg"
                  alt="arrow"
                  className="h-3 w-3 object-contain"
                />
              </div>
            ))}
          </div>
          <button
            className="mt-auto py-2 rounded-md text-sm font-semibold transition-all"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            Explore All Domains &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}