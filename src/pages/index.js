import React, { useState, useEffect } from "react";
import Layout from '@/components/shared/Layout';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check
    checkScreenSize();

    // Event listener
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);
  
  return (
    <Layout>
    <div className={`p-8 ${isMobile ? "bg-blue-50" : "bg-white"}`}>
      <h1 className="text-xl mb-6">the Stopwatch App is <a href="/StopwatchEmbed">here.</a></h1>
    </div>
    </Layout>
  );
}