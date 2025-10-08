import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
// import { Dialog, DialogContent } from './ui/dialog';
// import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'beauty', label: 'Beauty' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1613456478740-b4ac434ef548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBydW53YXl8ZW58MXx8fHwxNzU5ODg4MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Runway Collection 2024',
      description: 'Paris Fashion Week - Haute Couture'
    },
    {
      id: 2,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1635255485316-0fb82952f19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbW9kZWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk4ODgxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Brand Campaign',
      description: 'Global advertising campaign for premium lifestyle brand'
    },
    {
      id: 3,
      category: 'editorial',
      image: 'https://images.unsplash.com/photo-1639244151653-7807947de5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU5ODM4NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vogue Editorial',
      description: 'Featured editorial spread in international fashion magazine'
    },
    {
      id: 4,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1713442861325-8ac2038d3cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTgxMTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Beauty Campaign',
      description: 'Cosmetics brand beauty photography'
    },
    {
      id: 5,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzU5ODI2NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Fashion',
      description: 'High-end fashion photography for designer collection'
    },
    {
      id: 6,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1743856641639-7fa1857d85ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHBob3Rvc2hvb3QlMjBzdHVkaW98ZW58MXx8fHwxNzU5ODExNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Studio Campaign',
      description: 'Professional studio photography for brand campaign'
    },
    {
      id: 7,
      category: 'editorial',
      image: 'https://images.unsplash.com/photo-1706824250412-42b8ba877abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb2RlbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1OTg4ODEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fashion Portrait',
      description: 'Editorial portrait for fashion magazine feature'
    },
    {
      id: 8,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1643077286854-6ada321e9b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc1OTg4ODEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Classic Beauty',
      description: 'Timeless black and white beauty photography'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            PORTFOLIO
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my work across fashion, commercial, editorial, and beauty photography.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className="px-6 py-2 transition-all duration-300"
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedImage(item)}
                whileHover={{ y: -10 }}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ZoomIn size={24} className="mx-auto mb-2" />
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </Button>
              <ImageWithFallback
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;