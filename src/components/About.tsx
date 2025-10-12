"use client"

import { motion } from "framer-motion";
import { Award, MapPin, Camera, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
// import { ImageWithFallback } from './figma/ImageWithFallback';


const AboutSection = () => {
  const stats = [
    { icon: Camera, number: '200+', label: 'Photoshoots' },
    { icon: Award, number: '50+', label: 'Campaigns' },
    { icon: MapPin, number: '25+', label: 'Countries' },
    { icon: Users, number: '2M+', label: 'Followers' }
  ];

  const achievements = [
    'Featured in GO CRZY, NARC, TRANCE',
    'Campaign ambassador for luxury brands',
    'International runway model',
    'Social media influencer',
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            ABOUT ME
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1621788455628-957e51d2f4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk4ODgxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alexandra Hayes Portrait"
                className="w-full h-[600px] object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light mb-6">
              Bringing Dreams to Life Through Fashion
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 2 years in the fashion industry, I&apos;ve had the privilege of working with some of the world&apos;s most prestigious brands and photographers. My journey began in Lagos, Nigeria, and has taken me across the state from Lagos fashion weeks to commercial campaigns in Abuja.
              </p>

              <p>
                I specialize in high fashion, commercial, and editorial photography, bringing a unique blend of elegance, versatility, and professionalism to every project. My goal is to not just model clothing, but to tell stories and evoke emotions through imagery.
              </p>

              <p>
                Beyond modeling, I&apos;m passionate about sustainable fashion and use my platform to advocate for environmental consciousness in the industry. I believe fashion should be beautiful, responsible, and accessible.
              </p>

            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-medium mb-4">Career Highlights</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4 p-0">
                    <motion.div
                      className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <motion.div
                        className="text-3xl font-light text-primary mb-1"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-muted-foreground tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


