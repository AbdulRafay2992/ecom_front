export default function Footer({data}) {
    return (
        <footer className="footer">
          <div className="contact-form">
            <input className="form-input" type="text" placeholder="Name" />
            <input className="form-input" type="email" placeholder="Email" />
            <button>Contact Us</button>
          </div>
    
          <div className="categories">
            {
                data.map((item,index)=>(
                    <a key={index} className="category" href="#">{item}</a>
                ))
            }
          </div>
    
          <p className="company-statement">
            &copy; 2023 My Webpage. All rights reserved. | We provide quality products and exceptional service.
          </p>
        </footer>
    );
}