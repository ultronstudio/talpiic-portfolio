import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    const observerOptions = { threshold: 0.2 };

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsImageVisible(true);
        imageElement && imageObserver.unobserve(imageElement);
      }
    }, observerOptions);

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsTextVisible(true);
        textElement && textObserver.unobserve(textElement);
      }
    }, observerOptions);
    
    if (imageElement) imageObserver.observe(imageElement);
    if (textElement) textObserver.observe(textElement);

    return () => {
      imageElement && imageObserver.unobserve(imageElement);
      textElement && textObserver.unobserve(textElement);
    };
  }, []);

  return (
    <section id="about" className="py-20 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div 
            ref={imageRef}
            className={`lg:w-1/2 transition-all duration-1000 ease-out ${isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
            <img 
                src="https://picsum.photos/id/1062/600/600" 
                alt="Talpiic Portrait" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
                loading="lazy"
            />
        </div>
        <div 
            ref={textRef}
            className={`lg:w-1/2 transition-all duration-1000 ease-out delay-200 ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
            <h2 className="text-4xl font-extrabold mb-4">Kdo jsem?</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
                Jsem video editor, který se specializuje na tvorbu dynamického a poutavého obsahu. S více než rokem zkušeností pomáhám tvůrcům a firmám vyniknout v dnešním digitálním světě.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p className="text-gray-400 leading-relaxed">
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egas leo in pede.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
