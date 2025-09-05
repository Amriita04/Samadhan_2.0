export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="mailto:shivii@example.com"><img src="/assets/icons/email.svg" alt="Email" className="w-5 h-5 inline" /></a>
        <a href="https://www.linkedin.com/in/shivanilodhi09"><img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 inline" /></a>
        <a href="https://github.com/ShivaniLodhi09"><img src="/assets/icons/github.svg" alt="GitHub" className="w-5 h-5 inline" /></a>
      </div>
      <p>© {new Date().getFullYear()} Amrita Pal. Built with empathy and purpose.</p>
    </footer>
  );
}