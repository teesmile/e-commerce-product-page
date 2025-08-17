'use client';
import { useState } from 'react';

type Props = { images: string[]; thumbnails: string[] };

export default function ProductGallery({ images, thumbnails }: Props) {
    const [idx, setIdx] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <div className='w-full relative'>
                {/* Left arrow (mobile only) */}
                <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full font-bold shadow p-4 md:hidden"
                    
                    onClick={() => setIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    aria-label="Previous image"
                >
                    <img src="/images/icon-previous.svg" alt="Previous" className="w-3 h-3 " />
                </button>
                <button className='w-full' onClick={() => setLightboxOpen(true)} aria-label='Open image lightbox'>
                    <img src={images[idx]} alt="Product Image" className='w-full h-80 object-cover md:rounded-xl md:h-[28rem]' />
                </button>
                {/* Right arrow (mobile only) */}
                <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full shadow p-4 md:hidden"
                    // key={images[idx]}
                    onClick={() => setIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    aria-label="Next image"
                >
                    <img src="/images/icon-next.svg" alt="Next" className="w-3 h-3" />
                </button>
                {/* thumbnails Horizontal scroll on mobile */}
                <div className='mt-4 gap-2  overflow-x-auto space-x-auto md:overflow-x-visible hidden md:flex'>
                    {thumbnails.map((thumbnail, index) => (
                        <button key={index} onClick={() => setIdx(index)}
                            className={`relative md:rounded-lg overflow-hidden flex-shrink-0 w-15 h-15 md:w-24 md:h-24 ring-2 ${index === idx ? 'ring-brand' : 'ring-transparent hover:ring-gray-200'}`} aria-label={`Show image ${index + 1}`}>

                            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className={`w-full h-full object-cover ${index === idx ? 'opacity-60' : 'hover:opacity-80'} md:rounded-xl`} />
                        </button>

                    ))}
                </div>
            </div>

            {/* lightbox (modal) */}
            {lightboxOpen && (
                <div className='fixed inset-0 z-50 grid justify-center place-items-center p-4 bg-overlay'>
                    <div className='relative w-full max-w-xl'>
                        <button className='absolute -top-10 right-0 text-white text-2xl' onClick={() => setLightboxOpen(false)} aria-label='Close lightbox'>
                            <img src="/images/icon-close.svg" alt="Close Lightbox" className='w-5 h-5 rounded-xl shadow-card' />
                        </button>
                        <img src={images[idx]} alt="" className='w-full rounded-xl shadow-card' />
                        <div className='mt-4 hidden md:flex justify-center gap-4'>
                            {images.map((image, index) => (
                                <button key={image} onClick={() => setIdx(index)} className={`relative rounded-lg overflow-hidden flex-shrink-0 w-20 h-20 md:w-24 md:h-24 ring-2 ${index === idx ? 'ring-brand' : 'ring-transparent hover:ring-gray-200'}`} aria-label={`Show image ${index + 1}`}>
                                    <img src={image} alt={`Image ${index + 1}`} className={`w-20 h-20 object-cover ${index === idx ? 'opacity-60' : ''}`} />
                                </button>
                            ))}
                        </div>

                    </div>

                    <img src={images[idx]} alt={`Lightbox Image ${idx + 1}`} className='max-w-full max-h-full' />
                </div>
            )}
        </>

    );
}
