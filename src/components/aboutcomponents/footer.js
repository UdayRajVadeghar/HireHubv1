// components/Footer.js


const Footer = () => {
  return (
    <footer className=" text-gray-900 py-10 dark:text-white">
      <div className="container mx-auto px-4 lg:flex lg:justify-between">
        
        <div className="flex-grow p-4 lg:grid lg:grid-cols-4 gap-4 text-center lg:text-left">
          <div className="p-4">
            <ul>
              <li className="p-2 font-bold">About us</li>
              <li className="p-2">Resources</li>
              <li className="p-2">Blog</li>
              <li className="p-2">Careers</li>
              <li className="p-2">Contact</li>
              <li className="p-2">Customers</li>
              <li className="p-2">Help Center</li>
              <li className="p-2">Podcast</li>
            </ul>
          </div>
          <div className="p-4">
            <ul>
              <li className="p-2 font-bold">Documentation</li>
              <li className="p-2">Quickstart Guide</li>
              <li className="p-2">System Status</li>
              <li className="p-2">SDKs</li>
              <li className="p-2">API Reference</li>
              <li className="p-2">Sample Apps</li>
              <li className="p-2">Migration Guide</li>
              <li className="p-2">View All Docs</li>
            </ul>
          </div>
          <div className="p-4">
            <ul>
              <li className="p-2 font-bold">Product</li>
              <li className="p-2">Why HireHub?</li>
              <li className="p-2">Integrations</li>
              <li className="p-2">For Engineering Teams</li>
              <li className="p-2">For Marketing Teams</li>
              <li className="p-2">For Product Teams</li>
              <li className="p-2">Apple Receipt Checker</li>
              <li className="p-2">Pricing</li>
            </ul>
          </div>
          <div className="p-4">
            <ul>
              <li className="p-2 font-bold">Legal</li>
              <li className="p-2">Privacy Policy</li>
              <li className="p-2">Terms and Conditions</li>
              <li className="p-2">GDPR</li>
              <li className="p-2">Fair Billing Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p>©2022 HireHub</p>
      </div>
    </footer>
  );
};

export default Footer;
