function ImagePreloader() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"></div>
    </div>
  )
}

export default ImagePreloader;
