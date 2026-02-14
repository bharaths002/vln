
export interface HeartData {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export interface PhotoFrameProps {
  id: number;
  imageUrl?: string;
  onUpload: (id: number, file: File) => void;
}
