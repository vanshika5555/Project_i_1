import React, { useState } from 'react';

const OptimistxWebsite = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-400">Optimistx</span>
            <span className="text-sm text-gray-400">digital agency</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Pages</a>
            <a href="#" className="text-gray-300 hover:text-white">Blogs</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-gray-900 transition">
              Get Started
            </button>
            <button className="bg-blue-600 p-2 rounded-full">
              🔍
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                <span className="text-cyan-400">ELEVATE</span><br />
                <span className="text-cyan-400">YOUR</span><br />
                <span className="text-blue-400">BUSINESS</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                with Our Cutting-Edge Digital Marketing
              </p>
              <div className="flex mb-8">
                <input
                  type="text"
                  placeholder="Audit your website"
                  className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-l-lg flex-grow text-white"
                />
                <button className="bg-purple-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-purple-700 transition">
                  Audit
                </button>
              </div>
              <div className="flex space-x-6 mb-8">
                <button className="flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition">
                  <span>✓</span>
                  <span>Get Started</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <span>▶</span>
                  <span>Watch Video</span>
                </button>
              </div>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>📞 123-4567-90</span>
                <span>✉ info@name.com</span>
                <div className="flex space-x-2">
                  <span>🌐</span>
                  <span>💬</span>
                  <span>📺</span>
                  <span>📱</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">☀️</span>
              </div>
              <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              <div className="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
              <div className="relative z-10 bg-gray-800 rounded-lg p-4 max-w-md mx-auto">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg mb-4 font-bold">
                  SEO
                </div>
                <div className="w-full h-64 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-800 text-2xl">👤</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-black p-2 rounded">
                  <div className="flex space-x-2">
                    <div className="w-3 h-8 bg-orange-400 rounded"></div>
                    <div className="w-3 h-6 bg-blue-400 rounded"></div>
                    <div className="w-3 h-10 bg-green-400 rounded"></div>
                    <div className="w-3 h-4 bg-purple-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Your Website Traffic */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Boost Your Website Traffic!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { num: '01', title: 'Marketing Services', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' },
              { num: '02', title: 'SEO Optimizations', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' },
              { num: '03', title: 'Pro Support', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' },
              { num: '04', title: 'Brand Strategy', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' }
            ].map((service, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-4">{service.num}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300">
                  <span>✓</span>
                  <span>Get Started</span>
                </button>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
                    <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
                    <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
                    <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 w-32 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Our main goal to satisfied local clients</h3>
              <p className="text-yellow-400 text-lg mb-4">Ad nec unum copiosae. Sea ex everti labores, ad option iuvaset qui melliuscula</p>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['The Briefing', 'Analysing', 'Design and Adaptive', 'Development', 'Search Engine Optimization'].map((tag, index) => (
                  <span key={index} className="border border-gray-600 px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300">
                  <span>✓</span>
                  <span>Get Started</span>
                </button>
                <button className="bg-purple-600 px-6 py-3 rounded font-semibold hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-8">We Provide Amazing Digital Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-lg">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
                  <p className="text-gray-200 mb-6">Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris...</p>
                  <button className="bg-black px-6 py-2 rounded text-white hover:bg-gray-800 transition">
                    View Detail
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-400 to-green-500 p-8 rounded-lg">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-4 text-black">Creative Solutions</h3>
                  <p className="text-gray-800 mb-6">Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris...</p>
                  <button className="bg-black px-6 py-2 rounded text-white hover:bg-gray-800 transition">
                    View Detail
                  </button>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 rounded-lg">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-4 text-black">SEO Optimization</h3>
                  <p className="text-gray-800 mb-6">Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris...</p>
                  <button className="bg-black px-6 py-2 rounded text-white hover:bg-gray-800 transition">
                    View Detail
                  </button>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-lg">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-4">Brand Identity</h3>
                  <p className="text-gray-200 mb-6">Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris...</p>
                  <button className="bg-black px-6 py-2 rounded text-white hover:bg-gray-800 transition">
                    View Detail
                  </button>
                </div>
              </div>
              <button className="w-full mt-6 border border-gray-600 py-3 rounded text-white hover:bg-gray-800 transition">
                View All Services
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Boost Traffic & Sales</h3>
              <p className="text-gray-200 mb-8">Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris...</p>
              <button className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 mb-8">
                <span>✓</span>
                <span>Get Started</span>
              </button>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                </div>
                <div className="h-4 bg-orange-400 rounded mb-2"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Company */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Web Design Company That You Can Trust</h2>
              <div className="space-y-6">
                {[
                  { title: 'Competitive Rates', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' },
                  { title: 'Premium Development', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' },
                  { title: 'No Contracts Needed', desc: 'Lorem ipsum dolor sit amet consectetur. Eget ut enim eu mauris gravida...' }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mt-8">
                <span>✓</span>
                <span>Get Started</span>
              </button>
            </div>
            <div className="relative">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              <div className="w-full h-80 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }, (_, i) => (
                      <div key={i} className="w-8 h-8 bg-gray-600 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Think We Design We Create */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">▶</span>
            </div>
            <h2 className="text-5xl font-bold">We Think, We Design, We Create</h2>
          </div>
          <button className="bg-purple-600 px-8 py-3 rounded font-semibold hover:bg-purple-700 transition">
            Contact Us Today!
          </button>
        </div>
      </section>

      {/* Company Growth */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Our Company Growth</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '3,460+', label: 'Satisfied Clients' },
                { num: '8,550+', label: 'Successful Campaigns' },
                { num: '1,286+', label: 'Brands Joined' },
                { num: '2,283+', label: 'Brands Joined' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 px-6 py-3 rounded font-semibold hover:bg-purple-700 transition">
              Learn More
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <span>▶</span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Things We Made */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Things we Made</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4"></div>
                <div className="text-black font-bold">Creative Project 1</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4"></div>
                <div className="text-white font-bold">Creative Project 2</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4"></div>
                <div className="text-white font-bold">Creative Project 3</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg h-32 flex items-center justify-center">
              <div className="text-black font-bold">Project 4</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg h-32 flex items-center justify-center">
              <div className="text-white">
                <p className="font-bold mb-2">Got any projects in mind?</p>
                <p>Don't hesitate to get in touch with us!</p>
                <button className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 mt-4">
                  <span>✓</span>
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
          <button className="w-full border border-gray-600 py-3 rounded text-white hover:bg-gray-800 transition">
            View All Projects
          </button>
        </div>
      </section>

      {/* Professional SEO Agency */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              <div className="bg-gradient-to-br from-cyan-400 to-green-500 rounded-full p-8 w-64 h-64 mx-auto flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute bottom-8 right-8 grid grid-cols-2 gap-2">
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-32 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">We Are Professional SEO Agency</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 font-bold">01</span>
                  <span>Urna eu suspendisse felis socialeibus.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 font-bold">02</span>
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 font-bold">03</span>
                  <span>In nulla nunc arcu velit consectetur.</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-purple-600 px-6 py-3 rounded font-semibold hover:bg-purple-700 transition">
                  Learn More
                </button>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300">
                  <span>✓</span>
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What client says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'John Mullins', role: 'Graphic Designer', rating: 5 },
              { name: 'Domtan Ali', role: 'Product Manager', rating: 5 },
              { name: 'SO Agent', role: 'Agent', rating: 5 },
              { name: 'Rubana Wood', role: 'Project Manager', rating: 5 }
            ].map((client, index) => (
              <div key={index} className="border border-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">{client.name}</div>
                    <div className="text-sm text-gray-400">{client.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: client.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur. Nunc risus pellentesque vehicula vitae enicim aliquet. Ac quis eu fauod dignissim...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600"></div>
                <div className="p-6">
                  <div className="text-sm text-purple-400 mb-2">April 17, 2024</div>
                  <h3 className="text-xl font-bold mb-4">Simple Ways To Optimize Your Website For SEO</h3>
                  <button className="text-cyan-400 hover:text-cyan-300">Read More →</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Companies we love</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {Array.from({ length: 12 }, (_, index) => (
                <div key={index} className="border border-gray-700 p-4 rounded flex items-center justify-center">
                  <span className="text-gray-500">logoipsum</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-cyan-400 mb-8">LET'S TALK</h2>
            <p className="text-gray-300 mb-12">Lorem ipsum dolor sit amet consectetur. Elit sed do eiusmod tempor...</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <textarea
                name="message"
                placeholder="Write here message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 py-4 rounded font-semibold hover:bg-blue-700 transition mt-8"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-8">www.DownloadNewThemes.com</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-900">🏢</span>
                  </div>
                  <div className="text-left">
                    <div className="text-cyan-400 font-semibold">Company Name</div>
                    <div className="text-gray-400 text-sm">Main XYZ Street, XYZ City XYZ</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-900">✉</span>
                  </div>
                  <div className="text-left">
                    <div className="text-cyan-400 font-semibold">Email Address</div>
                    <div className="text-gray-400 text-sm">youremail@email.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-900">📞</span>
                  </div>
                  <div className="text-left">
                    <div className="text-cyan-400 font-semibold">Phone Number</div>
                    <div className="text-gray-400 text-sm">123-4567-890</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-400">Optimistx</span>
              <span className="text-sm text-gray-400">digital agency</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Subscribe Our newsletter</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-l text-white text-sm"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-r font-semibold hover:bg-purple-700 transition text-sm">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-blue-400">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-pink-400">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-blue-400">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-blue-600">in</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            Copyright © 2024 Optimistx By Environment. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OptimistxWebsite;