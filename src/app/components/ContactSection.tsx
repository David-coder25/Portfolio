import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { sendEmail } from '../../utils/mailer';
interface formErrors {
  name?: string
  email?: string
  message?: string
}
export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<formErrors>({
    name: '',
    email: '',
    message: ''
  })

  const [focused, setFocused] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    message: false
  });

  type FormField = "name" | "email" | "message";

  const handleBlur = (field: FormField, isTouched: boolean) => {
    setFocused(prev => ({
      ...prev,
      [field]: isTouched
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(formData);

  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/David-coder25',
      color: 'hover:text-purple-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/davidraja25',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:davidraja4013@gamil.com',
      color: 'hover:text-cyan-400',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'davidraja4013@gamil.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '91+ 9159578900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirunelveli , Tamil Nadu',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="relative container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className={`p-3 glass-card rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleBlur('name', true)}
                      onBlur={() => handleBlur('name', false)}
                      className="w-full bg-gray-900/50 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300"
                      placeholder="Your Name"
                      required
                      name="name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                    {focused.name && (
                      <motion.div
                        layoutId="input-focus"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleBlur('email', true)}
                      onBlur={() => handleBlur('email', false)}
                      className="w-full bg-gray-900/50 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                      name="email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                    {focused.email && (
                      <motion.div
                        layoutId="input-focus"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleBlur('message', true)}
                      onBlur={() => handleBlur('message', false)}
                      className="w-full bg-gray-900/50 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300 min-h-[150px]"
                      placeholder="Tell me about your project..."
                      required
                      name="message"
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                    {focused.message && (
                      <motion.div
                        layoutId="input-focus"
                        className="absolute inset-0 border-2 border-cyan-500 rounded-md pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/50 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
