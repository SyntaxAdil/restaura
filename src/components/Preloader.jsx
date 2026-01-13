const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex gap-2">
        <span className="h-3 w-3 bg-white rounded-full animate-bounce"></span>
        <span className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
        <span className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
};

export default Preloader;
