import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/467da129-7463-4338-b4ca-46a1531f1471/files/d2ddd762-d0e3-49bd-a935-0ab1d91fe787.jpg',
  'https://cdn.poehali.dev/projects/467da129-7463-4338-b4ca-46a1531f1471/files/93225540-59f2-4ccf-a47c-bcc9afbbdc1e.jpg',
  'https://cdn.poehali.dev/projects/467da129-7463-4338-b4ca-46a1531f1471/files/71eac58f-bd7b-45d4-b528-68197f313249.jpg',
  'https://cdn.poehali.dev/projects/467da129-7463-4338-b4ca-46a1531f1471/files/8714ff43-905b-44f6-baa9-011e78ac7e82.jpg',
];

const ways = [
  { icon: 'Mountain', label: 'Ландшафт', direction: 'Север' },
  { icon: 'Sun', label: 'Свет', direction: 'Юг' },
  { icon: 'Sprout', label: 'Рост', direction: 'Восток' },
  { icon: 'Scale', label: 'Баланс', direction: 'Запад' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-3xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-white/80 rounded-sm">
                  <Icon name="Compass" size={28} className="text-white" />
                </div>
                <span className="text-white/60 text-sm tracking-[0.3em] uppercase font-light">
                  Архитектурная студия
                </span>
              </div>

              <h1 className="text-6xl font-extralight text-white md:text-7xl lg:text-8xl tracking-tight">
                Four<span className="font-normal">Way</span>
              </h1>

              <p className="text-xl font-light text-white/70 md:text-2xl mt-4 max-w-xl leading-relaxed">
                Проектируем пространства, вдохновлённые древней мудростью четырёх направлений
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {ways.map((way) => (
                  <div key={way.direction} className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center w-10 h-10 border border-white/20 rounded-sm group-hover:border-white/50 transition-colors">
                      <Icon name={way.icon} size={18} className="text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider">{way.direction}</p>
                      <p className="text-white/80 text-sm font-light">{way.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out flex gap-4 mt-4',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 text-sm tracking-wider uppercase hover:bg-white/90 transition-colors"
              >
                Обсудить проект
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 text-sm tracking-wider uppercase hover:border-white/60 transition-colors"
              >
                Портфолио
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
