import { motion } from 'motion/react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

export default function Community() {
  const posts = [
    {
      id: 1,
      user: 'Alex Dev',
      handle: '@alex_codes',
      avatar: 'https://picsum.photos/seed/user1/100/100',
      content: 'Just deployed the new Nexus Engine update. The particle system is insane now! 🚀',
      time: '2h ago',
      likes: 124,
      comments: 18,
      image: 'https://picsum.photos/seed/post1/600/400?blur=1',
    },
    {
      id: 2,
      user: 'Sarah UI',
      handle: '@sarah_designs',
      avatar: 'https://picsum.photos/seed/user2/100/100',
      content: 'Loving the new Cyberpunk UI kit from Caffode. Saved me hours of work on my latest dashboard project.',
      time: '5h ago',
      likes: 89,
      comments: 5,
    },
    {
      id: 3,
      user: 'GameMaster99',
      handle: '@gm99',
      avatar: 'https://picsum.photos/seed/user3/100/100',
      content: 'Anyone else stuck on level 4 of Neon Pulse? That boss fight is brutal.',
      time: '1d ago',
      likes: 45,
      comments: 32,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
          The <span className="text-[#7ec400]">Community</span>.
        </h1>

        {/* Feed */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -5 }}
              className="bento-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7ec400]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start space-x-5 mb-6">
                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={post.avatar}
                    alt={post.user}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white/5 group-hover:border-[#7ec400]/30 transition-colors"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#7ec400] border-2 border-[#14151a]"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-xl text-white group-hover:text-[#7ec400] transition-colors">{post.user}</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500 font-mono">{post.handle}</span>
                        <span className="text-gray-700">•</span>
                        <span className="text-gray-600">{post.time}</span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ rotate: 90 }}
                      className="p-2 rounded-full hover:bg-white/5 text-gray-600 hover:text-white transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-xl leading-relaxed font-light">{post.content}</p>
              
              {post.image && (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="mb-6 rounded-2xl overflow-hidden border border-white/5 relative group/img"
                >
                  <img
                    src={post.image}
                    alt="Post media"
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover/img:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </motion.div>
              )}

              <div className="flex items-center space-x-8 text-gray-500 mt-4 pt-4 border-t border-white/5">
                <button className="flex items-center space-x-2 hover:text-[#7ec400] transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-[#7ec400]/10">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#fed430] transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-[#fed430]/10">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#d8ff30] transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-[#d8ff30]/10">
                    <Share2 className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
