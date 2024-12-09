import { useEffect, useState } from 'react';

const useDynamicIcon = (iconName: string) => {
  const [iconSrc, setIconSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      // Dynamically import all images in the assets/images directory
      const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}');

      // Find the correct image path based on the iconName
      const match = Object.keys(images).find((path) => path.includes(iconName));
      if (match) {
        const mod = await images[match]();
        const src = (mod as { default: string }).default;
        setIconSrc(src);
      }
    };

    loadIcon();
  }, [iconName]);

  return iconSrc;
};

export default useDynamicIcon;
