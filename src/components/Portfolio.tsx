"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  category: "fashion" | "commercial" | "editorial" | "videos";
  image: string; // ✅ fixed (previously src)
  title: string;
  description: string;
  type: "image" | "video";
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all", label: "All Work" },
    { id: "fashion", label: "Fashion" },
    { id: "commercial", label: "Commercial" },
    { id: "editorial", label: "Editorial" },
    { id: "videos", label: "Videos" },
  ];

  // ✅ all paths use `image` instead of `src`
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: "fashion",
      image: "/polaroids/POLAROIDS PIC 4.jpg",
      title: "Runway Collection 2024",
      description: "Paris Fashion Week - Haute Couture",
      type: "image",
    },
    {
      id: 2,
      category: "commercial",
      image: "/NARC/NARC PHOTO 1.jpg",
      title: "Luxury Brand Campaign",
      description:
        "Global advertising campaign for premium lifestyle brand",
      type: "image",
    },
    {
      id: 3,
      category: "editorial",
      image: "/GO CRZY/GO CRZY GREEN 1.jpg",
      title: "Vogue Editorial",
      description:
        "Featured editorial spread in international fashion magazine",
      type: "image",
    },
    {
      id: 4,
      category: "fashion",
      image:"/NARC/NARC CAP 2.jpg",
      title: "Beauty Campaign",
      description: "Cosmetics brand beauty photography",
      type: "image",
    },
    {
      id: 5,
      category: "fashion",
      image: "/PERS FIT/PERS FIT PIC 2.jpg",
      title: "Luxury Fashion",
      description:
        "High-end fashion photography for designer collection",
      type: "image",
    },
    {
      id: 6,
      category: "commercial",
      image: "/GYPSY/GYPSY 1.jpg",
      title: "Studio Campaign",
      description: "Professional studio photography for brand campaign",
      type: "image",
    },
    {
      id: 7,
      category: "editorial",
      image: "/de loca/DE LOCA 2.jpg",
      title: "Fashion Portrait",
      description:
        "Editorial portrait for fashion magazine feature",

      type: "image",
    },
    {
      id: 8,
      category: "videos",
      image: "/VIDS/VIDEO SHOOT 2.mp4",
      title: "Classic Beauty",
      description: "Timeless black and white beauty photography",
      type: "video",
    },
    {
      id: 9,
      category: "fashion",
      image: "/NARC/NARC PHOTO 4.jpg",
      title: "Runway Collection 2024",
      description: "Paris Fashion Week - Haute Couture",
      type: "image",
    },
    {
      id: 10,
      category: "commercial",
      image: "/GO CRZY/GO CRZY ARMLESS 2.jpg",
      title: "Luxury Brand Campaign",
      description:
        "Global advertising campaign for premium lifestyle brand",
      type: "image",
    },
    {
      id: 11,
      category: "editorial",
      image: "/TRANCE/TRANCE 2.jpg",
      title: "Vogue Editorial",
      description:
        "Featured editorial spread in international fashion magazine",
      type: "image",
    },
    {
      id: 12,
      category: "videos",
      image: "/VIDS/VIDEO SHOOT 1.mp4",
      title: "Beauty Campaign",
      description: "Cosmetics brand beauty photography",
      type: "video",
    },
    // {
    //   id: 13,
    //   category: "fashion",
    //   image: "/TRANCE/TRANCE 3.jpg",
    //   title: "Runway Collection 2024",
    //   description: "Paris Fashion Week - Haute Couture",
    // },
    // {
    //   id: 14,
    //   category: "commercial",
    //   image: "/PERS FIT/PERS FIT PIC 2.jpg",
    //   title: "Luxury Brand Campaign",
    //   description:
    //     "Global advertising campaign for premium lifestyle brand",
    // },
    // {
    //   id: 15,
    //   category: "editorial",
    //   image: "/POLAROIDS/POLAROIDS PIC 1.jpg",
    //   title: "Vogue Editorial",
    //   description:
    //     "Featured editorial spread in international fashion magazine",
    // },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
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
            A curated selection of my work across fashion, commercial,
            editorial, and video photography.
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
                {/* ✅ Added next/image for optimization */}
                {item.type === "video" ? (
                  <video
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                  />
                  ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ZoomIn size={24} className="mx-auto mb-2" />
                    <h3 className="text-lg font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {item.description}
                    </p>
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

              {selectedImage.type === "video" ? (
                <video
                  src={selectedImage.image}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                />
                ) : (
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={1000}
                    height={700}
                    className="w-full h-auto rounded-lg"
                  />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">
                  {selectedImage.title}
                </h3>
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
