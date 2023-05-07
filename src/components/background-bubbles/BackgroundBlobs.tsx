import { BlobLeft, BlobRight } from '../icons/main-layout/blobs.tsx'

export function BackgroundBlobs () {
  return (
    <>
      <div className="blob-bubble-left">
        <BlobLeft className="float"/>
      </div>
      <div className="blob-bubble-right">
        <BlobRight className="float"/>
      </div>
    </>
  )
}
