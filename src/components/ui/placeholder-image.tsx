export default function PlaceholderImage({
  width = 600,
  height = 400,
  text = "Imagen",
}: { width?: number; height?: number; text?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <rect width="100%" height="100%" fill="#0284c7" />
      <text x="50%" y="50%" fontFamily="Arial" fontSize="24" fill="white" textAnchor="middle" dominantBaseline="middle">
        {text}
      </text>
    </svg>
  )
}
