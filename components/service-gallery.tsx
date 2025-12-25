import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceGalleryProps {
  images: string[];
  className?: string;
}

export function ServiceGallery({ images, className }: ServiceGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
        >
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover transition-all hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
