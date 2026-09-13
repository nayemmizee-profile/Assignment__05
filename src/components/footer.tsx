




import logo from "../assets/logo-text.png";




export default function Footer() {
  return (
    <footer className="bg-emerald-50 pl-20 pr-20 pt-30 pb-5  ">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-5 gap-10 ">
        
          <div className="col-span-2">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="DevStack logo"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-sm font-bold uppercase text-slate-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="/" className="hover:text-pink-500">
                Home
              </a>
              <a href="/technologies" className="hover:text-pink-500">
                Technologies
              </a>
              <a href="/projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>



       
          <div>
            <h3 className="text-sm font-bold uppercase text-slate-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="/about" className="hover:text-pink-500">
                About
              </a>
              <a href="/contact" className="hover:text-pink-500">
                Contact
              </a>
              <a href="/careers" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-sm font-bold uppercase text-slate-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="/privacy-policy" className="hover:text-pink-500">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      
        <div className="mt-10 flex  gap-4 border-t border-slate-200 pt-6 text-sm text-slate-400 flex-row items-center justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-pink-500">
              Privacy
            </a>
            <a href="/terms-of-service" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}