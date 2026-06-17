export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{background: '#07080f'}}>
      {/* Deep space gradient base */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,92,252,0.15) 0%, transparent 70%)'
      }}></div>

      {/* Primary animated blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #7c5cfc, transparent)',
          filter: 'blur(80px)',
          animation: 'blob 8s infinite'
        }}></div>
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #00e5ff, transparent)',
          filter: 'blur(80px)',
          animation: 'blob 10s infinite 2s'
        }}></div>
      <div className="absolute bottom-[5%] left-[20%] w-[450px] h-[450px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #f5a623, transparent)',
          filter: 'blur(100px)',
          animation: 'blob 12s infinite 4s'
        }}></div>
      <div className="absolute top-[60%] right-[10%] w-[350px] h-[350px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #ff4d8d, transparent)',
          filter: 'blur(90px)',
          animation: 'blob 9s infinite 1s'
        }}></div>

      {/* Fine dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(124,92,252,0.8) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* Vignette edges */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,8,15,0.7) 100%)'
      }}></div>
    </div>
  );
};
