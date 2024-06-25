import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.webp';

const FooterExtras = () => {
  return (
    <div>
      <div className='lg:flex pt-10 mt-10'>
        <div className='lg:w-1/3 p-4 flex-grow-0 flex-shrink-0 grid grid-rows-2'>
          <button><img src={logo} className='p-4 w-40'></img></button>
          <div className='flex pl-10'>
            <FontAwesomeIcon icon={faGithub} className='pr-3'/>
            <FontAwesomeIcon icon={faTwitter} /><br></br>
          </div>
        </div>
        <div className='flex-grow p-4 lg:grid md:grid grid-cols-4 '>
          <div className='p-4'>
            <ul>
              <li className='p-2 font-bold'><button>About us</button></li>
              <li className='p-2'><button>Resources</button></li>
              <li className='p-2'><button>Blog</button></li>
              <li className='p-2'><button>Careers</button></li>
              <li className='p-2'><button>Contact</button></li>
              <li className='p-2'><button>Customers</button></li>
              <li className='p-2'><button>Help Center</button></li>
              <li className='p-2'><button>Podcast</button></li>
            </ul>
          </div>
          <div className='p-4'>
            <ul>
              <li className='p-2 font-bold'><button>Documentation</button></li>
              <li className='p-2'><button>Quickstart Guide</button></li>
              <li className='p-2'><button>System Status</button></li>
              <li className='p-2'><button>SDKs</button></li>
              <li className='p-2'><button>API Reference</button></li>
              <li className='p-2'><button>Sample Apps</button></li>
              <li className='p-2'><button>Migration Guide</button></li>
              <li className='p-2'><button>View All Docs</button></li>
            </ul>
          </div>
          <div className='p-4'>
            <ul>
              <li className='p-2 font-bold'><button>Procuct</button></li>
              <li className='p-2'><button>Why RevenueCat?</button></li>
              <li className='p-2'><button>Integrations</button></li>
              <li className='p-2'><button>For Engineering Teams</button></li>
              <li className='p-2'><button>For Marketing Teams</button></li>
              <li className='p-2'><button>For Product Teams</button></li>
              <li className='p-2'><button>Apple Receipt Checker</button></li>
              <li className='p-2'><button>Pricing</button></li>
            </ul>
          </div>
          <div className='p-4'>
            <ul>
              <li className='p-2 font-bold'><button>Legal</button></li>
              <li className='p-2'><button>Privacy Policy</button></li>
              <li className='p-2'><button>Terms and Conditions</button></li>
              <li className='p-2'><button>GDPR</button></li>
              <li className='p-2'><button>Fair Billing Policy</button></li>
      
            </ul>
          </div>
        </div>
      
      </div>
      <p className='pl-10'>©2022 RevenueCat</p>
    </div>
  )
}

export default FooterExtras