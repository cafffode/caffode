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
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card p-6"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={post.avatar}
                  alt={post.user}
                  className="w-12 h-12 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white">{post.user}</h4>
                    <span className="text-gray-500 text-sm">{post.handle}</span>
                    <span className="text-gray-600 text-sm">• {post.time}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">{post.content}</p>
              
              {post.image && (
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={post.image}
                    alt="Post media"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
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
