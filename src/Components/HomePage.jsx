import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, MessageSquare, Bell, Image, Video, FileText, Bookmark, Calendar, UserPlus } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const posts = [
    {
      id: 1,
      author: 'Dilan Wijerathne',
      title: 'Head of Innovation studio @Hatton national Bank',
      avatar: 'DW',
      verified: true,
      content: 'Humble and excited to take the next step in my journey as General Manager at Revolutionist Bank.\n\nThis milestone would not have been possible without the incred...more',
      media: { type: 'image', url: 'https://picsum.photos/800/420?random=1' },
      reactions: 300,
      comments: 0
    },
    {
      id: 2,
      author: 'Maisha Muthunayake',
      title: 'Senior lecturer @ SLIT',
      avatar: 'MM',
      verified: true,
      content: 'I am truly honored to be recognized as "Best Lecturer of the Year." 🏆💛\nFor me, teaching has always been about this thing: our students. To receive an award that reflects these values is the highest honor.',
      media: { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      reactions: 300,
      comments: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo and Search */}
            <div className="flex items-center gap-2">
              {/* Logo from public folder - place your provided image at public/skilverse-logo.png */}
              <img src="/image.png" alt="Skilverse" className="w-20 h-20 object-contain" />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-64 px-3 py-1.5 bg-gray-100 rounded text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-0.5 ${
                  activeTab === 'home' ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                <Home size={20} />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => setActiveTab('connections')}
                className={`flex flex-col items-center gap-0.5 ${
                  activeTab === 'connections' ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                <Users size={20} />
                <span className="text-xs">Connections</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex flex-col items-center gap-0.5 ${
                  activeTab === 'messages' ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                <MessageSquare size={20} />
                <span className="text-xs">Messages</span>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex flex-col items-center gap-0.5 ${
                  activeTab === 'notifications' ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                <Bell size={20} />
                <span className="text-xs">Notify</span>
              </button>
              {/* Me dropdown */}
              <div ref={menuRef} className="relative">
                <button
                  onClick={(e) => { e.stopPropagation(); setShowMenu((s) => !s); }}
                  className="flex flex-col items-center gap-0.5 text-gray-600"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold rounded-accent-avatar">
                    V
                  </div>
                  <span className="text-xs">Me</span>
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <button
                      onClick={() => { setShowMenu(false); navigate('/'); }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => { setShowMenu(false); navigate('/settings'); }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                    >
                      Settings
                    </button>
                    <div className="border-t border-gray-100" />
                    <button
                      onClick={() => { setShowMenu(false); navigate('/login'); }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            {/* Profile Card */}
            <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
              <div className="h-16 accent-gradient"></div>
              <div className="px-4 pb-4 -mt-8">
                <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white text-xl font-semibold rounded-accent-avatar">
                  V
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold text-sm">
                    Viral Khoil
                    <span className="inline-block ml-2 align-middle" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#2DB6A4" />
                        <path d="M17 8.5l-6.2 6.2L7 11.9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </h3>
                  <p className="text-xs text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Connections */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-gray-600" />
                <span className="text-sm font-semibold">Connections</span>
              </div>
              <p className="text-xs text-gray-600">Grow your Network</p>
            </div>

            {/* Your Plans */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Your Plans</span>
                <span className="text-purple-500">👑</span>
              </div>
            </div>

            {/* Saved Items & Groups */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Bookmark size={16} />
                <span className="text-sm">Saved Items</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={16} />
                <span className="text-sm">Groups</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-sm">Events</span>
              </div>
            </div>
          </div>

          {/* Center Feed */}
          <div className="col-span-6">
            {/* Create Post Card */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent"></div>
                <button className="flex-1 text-left px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm hover:bg-gray-50">
                  Start to Post
                </button>
              </div>
              <div className="flex items-center justify-around pt-2 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded">
                  <Image size={20} className="text-blue-500" />
                  <span className="text-sm font-medium">Images</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded">
                  <Video size={20} className="text-green-500" />
                  <span className="text-sm font-medium">Videos</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded">
                  <FileText size={20} className="text-orange-500" />
                  <span className="text-sm font-medium">Articles</span>
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold rounded-accent-avatar">
                        {post.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          {post.author}
                          {post.verified && (
                            <span className="inline-block ml-2 align-middle" aria-hidden="true">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#2DB6A4" />
                                <path d="M17 8.5l-6.2 6.2L7 11.9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-gray-600">{post.title}</p>
                      </div>
                    </div>
                  <button className="text-accent text-sm font-medium hover:bg-accent-50 px-3 py-1 rounded">
                    + Follow
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                {/* Media (image or video) - renders only if post.media exists */}
                {post.media && post.media.type === 'image' && (
                  <div className="mb-4">
                    <img
                      src={post.media.url}
                      alt={`${post.author} media`}
                      className="w-full h-56 object-cover rounded-lg mb-2"
                    />
                  </div>
                )}

                {post.media && post.media.type === 'video' && (
                  <div className="mb-4">
                    <video
                      controls
                      src={post.media.url}
                      className="w-full h-56 rounded-lg bg-black mb-2"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                    <span className="text-accent">👍</span>
                    <span className="text-sm">{post.reactions}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                    <MessageSquare size={16} className="text-gray-500" />
                    <span className="text-sm">Comment</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                    <span className="text-sm">🔄 Repost</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Promoted Post */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold rounded-accent-avatar">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Skiverse</h3>
                  <p className="text-xs text-gray-500">Promoted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-sm mb-4">Add to your feed</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Company Name</h4>
                      <p className="text-xs text-gray-600">Industry</p>
                      <button className="mt-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-2 py-1 rounded border border-gray-300">
                        <UserPlus size={14} />
                        <span className="text-xs">Follow</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}