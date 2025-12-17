import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ScrollPinnedSectionsProps {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
}

export function ScrollPinnedSections({ children }: ScrollPinnedSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (Audit Support) - visible from 0% to 33%
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.33], [0, 1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.33], [60, 0, 0, -60]);
  const section1Scale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.33], [0.95, 1, 1, 0.95]);

  // Section 2 (Dashboard) - visible from 33% to 66%
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.63, 0.68], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.3, 0.35, 0.63, 0.68], [60, 0, 0, -60]);
  const section2Scale = useTransform(scrollYProgress, [0.3, 0.35, 0.63, 0.68], [0.95, 1, 1, 0.95]);

  // Section 3 (Learning Center) - visible from 66% to 100%
  const section3Opacity = useTransform(scrollYProgress, [0.63, 0.7, 1], [0, 1, 1]);
  const section3Y = useTransform(scrollYProgress, [0.63, 0.7, 1], [60, 0, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.63, 0.7, 1], [0.95, 1, 1]);

  // Mobile: Render sections in continuous flow
  if (!isDesktop) {
    return (
      <div>
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
    );
  }

  // Desktop: Render with stacking effect
  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section 1: Audit Support */}
        <motion.div
          style={{
            opacity: section1Opacity,
            y: section1Y,
            scale: section1Scale,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children[0]}
        </motion.div>

        {/* Section 2: Dashboard */}
        <motion.div
          style={{
            opacity: section2Opacity,
            y: section2Y,
            scale: section2Scale,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children[1]}
        </motion.div>

        {/* Section 3: Learning Center */}
        <motion.div
          style={{
            opacity: section3Opacity,
            y: section3Y,
            scale: section3Scale,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children[2]}
        </motion.div>
      </div>
    </div>
  );
}