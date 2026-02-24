import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Projects Completed', value: '350+' },
    { icon: Target, label: 'Years Experience', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">NP Tech</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              NP Tech is a leading technology solutions provider dedicated to transforming businesses through innovative digital solutions. With over a decade of experience, we've helped hundreds of companies achieve their digital goals.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work together to deliver exceptional results that exceed expectations. We believe in building long-term partnerships and creating solutions that drive real business value.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, innovation, and success in the digital age. We're committed to delivering excellence in every project we undertake.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-1">
              <div className="bg-slate-900 rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-center gap-6"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stat.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-lg">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
