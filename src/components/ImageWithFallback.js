import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  iconClassName = "w-16 h-16 text-gray-400",
  fallbackText = "",
  loading = "lazy",
  style = {},
  onError: customOnError,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    if (customOnError) {
      customOnError(e);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center ${fallbackClassName || className}`}
        style={style}
      >
        <ImageIcon className={iconClassName} />
        {fallbackText && (
          <p className="text-gray-500 font-medium mt-2 text-center">
            {fallbackText}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
