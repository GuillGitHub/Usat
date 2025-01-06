import React, { useState } from 'react';
import { CarouselContainer, Slide, NavigationButton } from './styles';

export const Carrossel = ({ images, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <CarouselContainer>
            <NavigationButton direction="left" onClick={prevSlide}>
                ◀ 
            </NavigationButton>
            {images.map((image, index) => (
                <Slide
                    key={index}
                    bgImage={image}
                    style={{
                        opacity: index === currentIndex ? 1 : 0,
                        position: index === currentIndex ? 'relative' : 'absolute',
                    }}
                >
                    {index === currentIndex && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '40%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                            }}
                        >
                            {children}
                        </div>
                    )}
                </Slide>
            ))}
            <NavigationButton direction="right" onClick={nextSlide}>
                ▶
            </NavigationButton>
        </CarouselContainer>
    );
};