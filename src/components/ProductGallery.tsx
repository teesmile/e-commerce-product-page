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
                    className="cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full shadow p-4 md:hidden 
             text-gray-800 hover:text-orange-500 active:text-orange-500 transition-colors"

                    onClick={() => setIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    aria-label="Previous image"
                >
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 20" stroke="currentColor" strokeWidth="4">
                        <path d="M11 1 3 9l8 8" fillRule="evenodd" />
                    </svg></span>
                </button>
                <button className='w-full' onClick={() => setLightboxOpen(true)} aria-label='Open image lightbox'>
                    <img src={images[idx]} alt="Product Image" className='w-full sm:h-60 sm:object-cover md:rounded-md md:h-[30rem]' />
                </button>
                {/* Right arrow (mobile only) */}
                <button
                    className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full shadow p-4 md:hidden 
             text-gray-800 hover:text-orange-500 active:text-orange-500 transition-colors"
                    onClick={() => setIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    aria-label="Next image"
                >
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 20" stroke="currentColor" strokeWidth="4">
                        <path d="m2 1 8 8-8 8" fillRule="evenodd" />
                    </svg></span>
                </button>
                {/* thumbnails Horizontal scroll on mobile */}
                <div className='mt-4 gap-2  overflow-x-auto space-x-auto md:overflow-x-visible hidden md:flex'>
                    {thumbnails.map((thumbnail, index) => (
                        <button key={index} onClick={() => setIdx(index)}
                            className={`cursor-pointer relative md:rounded-md overflow-hidden flex-shrink-0 w-15 h-15 md:w-24 md:h-24 ring-2 ${index === idx ? 'ring-orange-500' : 'ring-transparent hover:ring-orange-500'}`} aria-label={`Show image ${index + 1}`}>

                            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} className={`w-full h-full object-cover ${index === idx ? 'opacity-60' : 'hover:opacity-80'} md:rounded-md`} />
                        </button>

                    ))}
                </div>
            </div>

            {/* lightbox (modal) */}
            {lightboxOpen && (
                <div className='hidden md:grid fixed inset-0 z-50 justify-center items-center p-4 bg-overlay'>
                    <div className='relative w-full max-w-xl'>

                        <button
                            className="absolute -top-9 -right-3 cursor-pointer text-gray-500 hover:text-orange-500 active:text-orange-500 transition-colors"
                            onClick={() => setLightboxOpen(false)}
                            aria-label="Close lightbox"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                fill="none"
                                viewBox="0 0 25 25"
                            >
                                <path
                                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* prev arrow */}
                        <button
                            className="cursor-pointer absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full shadow p-4
                   text-gray-800 hover:text-orange-500 active:text-orange-500 transition-colors"
                            onClick={() =>
                                setIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))
                            }
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                viewBox="0 0 12 20" stroke="currentColor" strokeWidth="3">
                                <path d="M11 1 3 9l8 8" fillRule="evenodd" />
                            </svg>
                        </button>
                        {/* main image */}
                        <img src={images[idx]} alt="" className='cursor-pointer w-60% rounded-md shadow-card' />

                        {/* next arrow */}
                        <button
                            className="cursor-pointer absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-full shadow p-4
                   text-gray-800 hover:text-orange-500 active:text-orange-500 transition-colors"
                            onClick={() =>
                                setIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))
                            }
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                viewBox="0 0 12 20" stroke="currentColor" strokeWidth="3">
                                <path d="m2 1 8 8-8 8" fillRule="evenodd" />
                            </svg>
                        </button>

                        {/* thumbnails for lightbox */}
                        <div className='mt-4 hidden md:flex justify-center gap-2'>
                            {images.map((image, index) => (
                                <button key={image} onClick={() => setIdx(index)} className={`cursor-pointer relative rounded-lg overflow-hidden flex-shrink-0 w-20 h-20 md:w-24 md:h-24  ${index === idx ? 'ring-orange-500' : 'ring-transparent hover:ring-gray-200'}`} aria-label={`Show image ${index + 1}`}>
                                    <img src={image} alt={`Image ${index + 1}`} className={`w-20 h-20 object-cover rounded-md ring-2 ${index === idx ? 'ring-orange-500' : 'ring-transparent hover:ring-orange-500'} ${index === idx ? 'opacity-60' : ''}`} />
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* <img src={images[idx]} alt={`Lightbox Image ${idx + 1}`} className='max-w-full max-h-full' /> */}
                </div>
            )}
        </>

    );
}
