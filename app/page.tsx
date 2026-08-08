import Image from "next/image";
import Link from "next/link";
import GreetingCarousel from "./components/GreetingCarousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-[#0d1117] text-white overflow-hidden font-poppins">
        {/* Concentric circles background - positioned right */}
        <div className="absolute inset-0 hero-circles">
          <div className="circle-ring circle-ring-1"></div>
          <div className="circle-ring circle-ring-2"></div>
        </div>

        <div className="relative z-10 mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-10 pb-8">
          {/* Logo */}
          <div className="mb-8 sm:mb-10">
            <Image
              src="/Logo-black.svg"
              alt="Appadvent Logo"
              width={160}
              height={40}
              className="w-[120px] sm:w-[160px]"
            />
          </div>

          {/* Hero Content - Two columns */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 max-w-[650px] text-center lg:text-left z-20">
              {/* Stats line */}
              <div className="mb-4 sm:mb-6 font-[var(--font-poppins)] text-[24px] sm:text-[30px] md:text-[36px] font-normal leading-[1.2] md:leading-[100%] tracking-[0%]">
                <p className="leading-relaxed text-gray-300">
                  We have delivered
                </p>
                <p className="leading-relaxed">
                  <span className="text-[#00a5e3] font-semibold">
                    30+ projects,
                  </span>{" "}
                  <span className="text-gray-300">That have impacted</span>{" "}
                </p>
                <p className="leading-relaxed text-gray-300">
                  <span className="text-[#00a5e3] font-semibold">
                    10M+ Users</span> and generated{" "}
                  <span className="text-[#00a5e3] font-semibold">
                    $1M+ Revenue
                  </span>
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.2] md:leading-[1.1] tracking-tight">
                Let&apos;s Build Great
                <br className="hidden sm:block" />
                Things with People
                <br className="hidden sm:block" />
                Together!!
              </h1>
            </div>

            {/* Right: Logo Icon in Circle */}
            <div className="flex-shrink-0 relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] mt-8 lg:mt-0">
              {/* Concentric circle rings - absolutely positioned from center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-gray-600/20 hidden md:block pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-gray-600/20 hidden sm:block pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-gray-600/25 hidden sm:block pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-gray-600/25 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gray-600/30 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-gray-600/40 pointer-events-none"></div>

              {/* Inner white circle with logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[270px] md:h-[270px] rounded-full bg-white flex items-center justify-center shadow-2xl z-10">
                <Image
                  src="/Frame 4.svg"
                  alt="Appadvent Logo Icon"
                  width={180}
                  height={200}
                  className="w-[140px] h-[155px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="relative z-10 lg:bg-transparent">
          <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 lg:py-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-16 text-[13px] md:text-[14px] text-gray-400">
              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-white break-all">info@appadvent.com</span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className="text-white">www.appadvent.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-white">+91 88640 23673</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GREETINGS SECTION ==================== */}
      <section className="bg-white mt-16 md:mt-24 lg:mt-40 font-poppins">
        <div className="mx-auto w-full flex flex-col lg:flex-row items-center">
          {/* Left: Team Photo with dot decorations */}
          <div className="w-full lg:w-[55%] flex-shrink-0 relative px-6 py-8 md:px-10 md:py-10">
            {/* Dot Pattern (Behind Image, Top-Right) */}
            <div className="absolute -top-5 -right-5 w-[70%] h-[70%] z-0 hidden md:block"
              style={{
                backgroundImage: 'radial-gradient(circle, #c5c5e8 2px, transparent 2px)',
                backgroundSize: '20px 20px',
                backgroundRepeat: 'space'
              }}>
            </div>
            {/* image — converted to Swiper carousel */}
            <GreetingCarousel />
          </div>

          {/* Right: Greetings Text */}
          <div className="flex-1 flex flex-col justify-center px-6 py-10 sm:p-10 md:p-12 lg:px-12 xl:px-16 text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] font-semibold mb-4 md:mb-6 leading-tight">
              <span className="text-[#7C7C7C] font-semibold">Greetings! From</span>
              <br />
              <span className="text-[#1a1a1a] font-bold">Appadvent</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] leading-[1.7] text-[#333] mb-5 font-normal">
              Our business at Appadvent aims to provide organizations
              with advanced and effective tools and programs that
              enhance their online presence and drive growth. The clients&apos;
              needs shall be prioritized and served to their fullest
              satisfaction to meet their business objectives.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] leading-[1.7] text-[#333] font-normal">
              Appadvent&apos;s goal is to become known as a trustworthy
              outsourcing partner for companies looking to leverage
              technology for business growth. As the environment is
              always changing, our strategic goal is to evolve and become
              as inventive as we can continuously.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== OUR CORE SERVICES SECTION ==================== */}
      <section className="bg-[#eef3f8] py-16 md:py-20 font-poppins">
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Section Title */}
          <h2 className="text-center text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-[#0F054F] mb-10">
            Our core services
          </h2>

          {/* Services Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Software Development */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <h3 className="text-[20px] sm:text-[22px] md:text-[20px] lg:text-[22px] font-bold text-[#0F054F] mb-4 z-10 relative">
                1. Software Development
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-regular leading-[1.7] text-black mb-5 z-10 relative">
                We design and develop secure, scalable, and high-performance software solutions tailored to your business needs. From websites and mobile applications to enterprise systems and cloud platforms, our team builds digital products that enhance user experience, improve operational efficiency, and support long-term business growth.
              </p>
              <span className="inline-block bg-[#08526D] text-white text-[11px] sm:text-[12px] font-semibold px-4 py-1.5 rounded mb-4 z-10 relative">
                Our Expertise
              </span>
              <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] xl:text-[18px] text-[#1a1a2e] font-semibold z-10 relative">
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> UI/UX Design</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Custom Software Development</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Web Development</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Mobile App Development</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> E-commerce Solutions</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Cloud & DevOps</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[5px] sm:-translate-y-[4px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> API Development & Integration</li>
              </ul>
              {/* Decorative icon */}
              <div className="absolute bottom-6 right-6 text-[#d0d8e8] opacity-30 sm:opacity-60 z-0">
                <Image width={140} height={140} src="/backend.svg" alt="code" className="w-[100px] sm:w-[140px]" />
              </div>
            </div>

            {/* Card 2: Digital Marketing */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <h3 className="text-[20px] sm:text-[22px] md:text-[20px] lg:text-[22px] font-bold text-[#0F054F] mb-4 z-10 relative">
                2. Digital Marketing
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-regular leading-[1.7] text-[#444] mb-5 z-10 relative">
                Our digital marketing services help businesses increase brand visibility, attract qualified leads, and maximize return on investment. Using data-driven strategies and creative campaigns, we build a strong online presence that converts visitors into loyal customers and drives sustainable business growth.
              </p>
              <span className="inline-block bg-[#08526D] text-white text-[11px] sm:text-[12px] font-semibold px-4 py-1.5 rounded mb-4 z-10 relative">
                Our Expertise
              </span>
              <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] xl:text-[18px] text-[#1a1a2e] font-semibold z-10 relative">
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Search Engine Optimization (SEO)</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Search Engine Marketing (SEM/PPC)</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Social Media Marketing</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Content Marketing</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Branding & Creative Design</li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Performance Marketing</li>
              </ul>
              {/* Decorative icon */}
              <div className="absolute bottom-6 right-6 text-[#d0d8e8] opacity-30 sm:opacity-60 z-0">
                <Image width={140} height={140} src="/citizens-red 2.svg" alt="digital" className="w-[100px] sm:w-[140px]" />
              </div>
            </div>

            {/* Card 3: AI & Automation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col h-full">
              <h3 className="text-[20px] sm:text-[22px] md:text-[20px] lg:text-[22px] font-bold text-[#0F054F] mb-4 z-10 relative">
                3. AI & Automation
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-regular leading-[1.7] text-[#444] mb-5 z-10 relative">
                Transform your business with intelligent automation powered by cutting-edge AI technologies. We create secure, scalable, and custom AI solutions that streamline operations, automate workflows, enhance customer experiences, and unlock valuable business insights. Our AI-driven systems help organizations boost productivity, reduce operational costs, and stay ahead in a rapidly evolving digital landscape.
              </p>
              <div className="mt-auto z-10 relative">
                <span className="inline-block bg-[#08526D] text-white text-[11px] sm:text-[12px] font-semibold px-4 py-1.5 rounded mb-4">
                  Our Expertise
                </span>
                <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] xl:text-[18px] text-[#1a1a2e] font-semibold z-10 relative">
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> AI Chatbots & Virtual Assistants</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Business Process Automation</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> AI Lead Qualification</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Customer Engagement Automation</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> AI Analytics & Reporting</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> AI API & Platform Integration</li>
                </ul>
              </div>
              {/* Decorative icon */}
              <div className="absolute bottom-6 right-6 text-[#d0d8e8] opacity-30 sm:opacity-60 z-0">
                <Image width={140} height={140} src="/helpdesk.svg" alt="digital" className="w-[100px] sm:w-[140px]" />
              </div>
            </div>

            {/* Card 4: Support & Maintenance */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col h-full">
              <h3 className="text-[20px] sm:text-[22px] md:text-[20px] lg:text-[22px] font-bold text-[#0F054F] mb-4 z-10 relative">
                4. Support & Maintenance
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-regular leading-[1.7] text-[#444] mb-5 z-10 relative">
                We provide ongoing support and maintenance to ensure your web and mobile applications operate smoothly and efficiently. Our services include regular updates, performance optimization, security patches, and issue resolution. With expertise in server management, database optimization, and security updates using tools like AWS, Docker, Kubernetes, MySQL, and PostgreSQL, we keep your applications running at peak performance and address any technical issues promptly.
              </p>
              <div className="mt-auto z-10 relative">
                <span className="inline-block bg-[#08526D] text-white text-[11px] sm:text-[12px] font-semibold px-4 py-1.5 rounded mb-4">
                  Our Expertise
                </span>
                <ul className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] xl:text-[18px] text-[#1a1a2e] font-semibold z-10 relative">
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Website & Application Maintenance</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Cloud & Server Management</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Security & Compliance</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Performance Optimization</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> Feature Enhancements</li>
                  <li className="flex items-start sm:items-center gap-3 sm:gap-4"><span className="font-bold text-[18px] sm:text-[20px] xl:text-[22px] text-[#1a1a2e] flex-shrink-0 -translate-y-[1px] sm:-translate-y-[1px]"><Image src="/Vector.svg" alt="" width={16} height={16} /></span> 24/7 Technical Support</li>
                </ul>
              </div>
              {/* Decorative icon */}
              <div className="absolute bottom-6 right-6 text-[#d0d8e8] opacity-30 sm:opacity-60 z-0">
                <Image width={140} height={140} src="/integration.svg" alt="digital" className="w-[100px] sm:w-[140px]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== LATEST COMPLETE PROJECTS ==================== */}
      <section className="bg-white py-16 md:py-20 font-poppins">
        <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-10">
          {/* Title with top line */}
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <div className="flex w-full justify-center mb-4 md:mb-6">
            </div>
            <h2 className="text-[28px] sm:text-[30px] md:text-[32px] font-bold text-[#1a1a2e] text-center">
              Latest Complete Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 font-poppins">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-5 bg-[#eef3f8] h-[200px] sm:h-[260px] w-full flex-shrink-0">
                <Image src="/5073080c9c5e644ed70d8d78b3e9589f0b0a88c4.png" alt="Queue Management System" width={600} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#1a1a2e] mb-5">Queue Management System</h3>
                <div className="grid grid-cols-3 items-end sm:flex sm:flex-nowrap sm:justify-between sm:items-center mt-auto gap-2 sm:gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Completion Time</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">9Months</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Platform</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">SAAS</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">View</span>
                    <a href="https://qms.josamsolution.com" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-bold text-[#00a5e3]">Full details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-5 bg-[#eef3f8] h-[200px] sm:h-[260px] w-full flex-shrink-0">
                <Image src="/Rectangle 71.png" alt="Goalkick" width={600} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#1a1a2e] mb-5">Goalkick</h3>
                <div className="grid grid-cols-3 items-end sm:flex sm:flex-nowrap sm:justify-between sm:items-center mt-auto gap-2 sm:gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Completion Time</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">3Months</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Platform</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">Application</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">View</span>
                    <a href="https://apps.apple.com/ng/app/goalkick-soccer/id6480132548" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-bold text-[#00a5e3]">Full details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-5 bg-[#eef3f8] h-[200px] sm:h-[260px] w-full flex-shrink-0">
                <Image src="/cfdb7dced9f4e4416949b66e49161286204affe4.png" alt="Newness plant" width={600} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#1a1a2e] mb-5">Newness plant</h3>
                <div className="grid grid-cols-3 items-end sm:flex sm:flex-nowrap sm:justify-between sm:items-center mt-auto gap-2 sm:gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Completion Time</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">6Months</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Platform</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">Application</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">View</span>
                    <a href="https://play.google.com/store/apps/details?id=com.newnessplant&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-bold text-[#00a5e3]">Full details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-5 bg-[#eef3f8] h-[200px] sm:h-[260px] w-full flex-shrink-0">
                <Image src="/835f27a2cd2478c0bfe8112fe232336134882823.png" alt="Privicam" width={600} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#1a1a2e] mb-5">Privicam</h3>
                <div className="grid grid-cols-3 items-end sm:flex sm:flex-nowrap sm:justify-between sm:items-center mt-auto gap-2 sm:gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Completion Time</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">2Months</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">Platform</span>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#1a1a2e]">Application</span>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-gray-200 self-center"></div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-400 mb-1">View</span>
                    <a href="https://play.google.com/store/apps/details?id=com.streamline.privicam&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-bold text-[#00a5e3]">Full details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-12">
            <a href="https://appadvent.com/portfolio" target="_blank" rel="noopener noreferrer" className="text-[#00a5e3] font-bold text-[14px] hover:underline">View portfolio</a>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="bg-[#f4f7f9] py-16 md:py-20 font-poppins relative pb-10 md:pb-10">
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16">
          <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#1a1a2e] mb-10 md:mb-12 font-THICCCBOI">
            Recent Words from Our Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
              <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 opacity-30">
                <Image src="/”.png" alt="quote" width={40} height={40} />
              </div>
              <div className="flex gap-1 text-[#ffb000] mb-4 md:mb-5 w-[80px] md:w-[100px]">
                <Image src="/stars.svg" alt="quote" width={100} height={100} className="w-full h-auto" />
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a1a2e] mb-1">Kevin S</h3>
              <p className="text-[15px] md:text-[17px] text-gray-500 mb-4 md:mb-6 font-regular">President, Streamline factory Inc.</p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] md:leading-[1.9] text-black mb-6 md:mb-8 min-h-[120px] md:min-h-[160px] font-regular">
                Appadvent Technologies Pvt Ltd successfully delivered the app on time, meeting all required standards. The team organized the project well, set clear milestones, and kept the client updated throughout the process. Overall, the team&apos;s responsiveness, technical expertise, and commitment stood out.
              </p>
              <div>
                <a href="https://clutch.co/profile/appadvent-technologies" target="_blank" rel="noopener noreferrer" className="font-bold text-[18px] md:text-[20px] text-[#1a1a2e] mt-auto">Clutch</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
              <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 opacity-30">
                <Image src="/”.png" alt="quote" width={40} height={40} />
              </div>
              <div className="flex gap-1 text-[#ffb000] mb-4 md:mb-5 w-[80px] md:w-[100px]">
                <Image src="/stars.svg" alt="quote" width={100} height={100} className="w-full h-auto" />
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a1a2e] mb-1">Fatema Abdullah</h3>
              <p className="text-[15px] md:text-[17px] text-gray-500 mb-4 md:mb-6 font-medium">Wsltk Sales</p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] md:leading-[1.9] text-black mb-6 md:mb-8 min-h-[120px] md:min-h-[160px] font-regular">
                Thanks to Appadvent Technologies Pvt Ltd, the client achieved a 20% rise in revenue, a 15% jump in average order value, and a 25% increase in active users. They also achieved a 40% user retention rate and a 30% increase in sessions per user. Overall, the team delivered truly impressive results.
              </p>
              <div>
                <a href="https://clutch.co/profile/appadvent-technologies" target="_blank" rel="noopener noreferrer" className="font-bold text-[18px] md:text-[20px] text-[#1a1a2e] mt-auto">Clutch</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
              <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 opacity-30">
                <Image src="/”.png" alt="quote" width={40} height={40} />
              </div>
              <div className="flex gap-1 text-[#ffb000] mb-4 md:mb-5 w-[80px] md:w-[100px]">
                <Image src="/stars1.svg" alt="quote" width={100} height={100} className="w-full h-auto" />
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a1a2e] mb-1">Paul Quinones</h3>
              <p className="text-[15px] md:text-[17px] text-gray-500 mb-4 md:mb-6 font-medium">SK2 Nutrition</p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] md:leading-[1.9] text-black mb-6 md:mb-8 min-h-[120px] md:min-h-[160px] font-regular">
                Thanks to Appadvent Technologies Pvt Ltd&apos;s efforts, the client&apos;s website concept has launched. The team ensures the client&apos;s requirements are fulfilled. Appadvent Technologies Pvt Ltd&apos;s flexibility when faced with a problem is impressive. The client is happy with the team&apos;s performance.
              </p>
              <div>
                <a href="https://clutch.co/profile/appadvent-technologies" target="_blank" rel="noopener noreferrer" className="font-bold text-[18px] md:text-[20px] text-[#1a1a2e] mt-auto">Clutch</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-12 mb-10 md:mb-12">
            <a href="https://clutch.co/profile/appadvent-technologies" target="_blank" rel="noopener noreferrer" className="text-[#00a5e3] font-bold text-[15px] md:text-[16px] hover:underline">Click here to view more comments</a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER SECTION ==================== */}
      <footer className="bg-white font-poppins relative overflow-hidden pt-20 md:pt-10">
        <div className="mx-auto w-full relative z-10">
          <div className="mb-8 md:mb-12 px-6 sm:px-10 lg:px-20 text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-extrabold text-[#0F054F] leading-tight mb-2 md:mb-3">
              Thank you!
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#0F054F]">
              We are ready to build your idea
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left: Building Image */}
            <div className="w-full lg:w-[60%] px-4 sm:px-10 lg:px-0">
              <div className="overflow-hidden rounded-[24px] lg:rounded-none lg:rounded-tr-[120px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                <Image src="/46941e4a2c4b522238d9274f3dd5a7ca3f0042ab.png" alt="Appadvent Office" width={1100} height={850} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Contact Details */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-10 lg:pl-12 xl:pl-20 py-10 lg:py-0">
              <h3 className="text-[18px] lg:text-[16px] font-bold text-[#0F054F] mb-4 md:mb-6">Corporate office</h3>

              <div className="flex items-start gap-3 mb-6 md:mb-8">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0F054F] mt-1 flex-shrink-0 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p className="text-[14px] md:text-[15px] lg:text-[13px] text-[#0F054F] leading-[1.7]">
                  LG - 01, Block A 199, Sector 63<br />
                  Noida, Uttar Pradesh, 201301, India.
                </p>
              </div>

              <div className="space-y-4 mb-8 md:mb-10">
                <div className="flex items-center gap-3 text-[14px] md:text-[15px] lg:text-[13px] text-[#0F054F]">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0F054F] -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@appadvent.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">info@appadvent.com</a>
                </div>
                <div className="flex items-center gap-3 text-[14px] md:text-[15px] lg:text-[13px] text-[#0F054F]">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0F054F] -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>88640 23673</span>
                </div>
                <div className="flex items-center gap-3 text-[14px] md:text-[15px] lg:text-[13px] text-[#0F054F]">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0F054F] -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  <a href="https://www.appadvent.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">www.appadvent.com</a>
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[16px] font-bold text-[#0F054F] mb-4">Connect with social link</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-4 lg:flex-col lg:space-y-3 lg:gap-0 text-[14px] md:text-[15px] lg:text-[13px] text-[#0F054F] capitalize">
                <a href="https://www.linkedin.com/company/appadvent-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:text-blue-600 transition-colors"><Image src="/linkedin.png" alt="" width={20} height={20} />linkedin</a>
                <a href="https://x.com/appadventtech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:text-blue-600 transition-colors"><Image src="/X.png" alt="" width={20} height={20} />X</a>
                <a href="https://www.facebook.com/appadventtechnologies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:text-blue-600 transition-colors"><Image src="/facebook.png" alt="" width={20} height={20} />Facebook</a>
                <a href=" https://www.instagram.com/appadvent_technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit hover:text-blue-600 transition-colors"><Image src="/instagram.png" alt="" width={20} height={20} />Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
