import { BlobLeft, BlobRight } from '../icons/main-layout/blobs.tsx'

export function BackgroundBlobs () {
  return (
    <>
      <div className="blob-bubble-left">
        <BlobLeft/>
      </div>
      <div className="blob-bubble-right">
        <BlobRight/>
      </div>
    </>
  )
}
