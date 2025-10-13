"use client"

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaydahblaq@gmail.com',
      href: 'mailto:kaydahblaq@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 708 082 2869',
      href: 'tel:+2347080822869'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'LAGOS, NIGERIA',
      href: '#'
      // INSRT LINK TO MAP OR REMOVE
    }
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      href:"https://www.instagram.com/kaydahblaq_?igsh=MXEwaGJ3bjRxZnQxeg==",
      target:"_blank",
      rel:"noopener noreferrer",
      
    },
    {
      icon: FaXTwitter,
      label: 'X',
      href: "https://x.com/kaydahblaq999?s=21",
      target:"_blank",
      rel:"noopener noreferrer",
      
    },
    {
      icon: FaTiktok,
      label: 'TikTok',
      href: "https://www.tiktok.com/@kaydahblaq?_t=ZS-90VwC7hdwR8&_r=1",
      target: "_blank",
      rel: "noopener noreferrer",
      
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let&apos;s create something beautiful together. I&apos;m always excited to work on new projects and campaigns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-light mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[120px] resize-none"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full py-3 space-x-2">
                      <Send size={18} />
                      <span>Send Message</span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-light mb-6">Follow Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{social.label}</div>
                        </div>
                      </div>
                      <motion.div
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-medium mb-2">Let&apos;s Work Together</h4>
              <p className="text-muted-foreground mb-4">
                I&apos;m always looking for exciting new projects and collaborations. Whether you&apos;re a brand, photographer, or creative agency, I&apos;d love to hear from you.
              </p>
              <div className="text-sm text-primary font-medium">
                Available for worldwide projects
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;