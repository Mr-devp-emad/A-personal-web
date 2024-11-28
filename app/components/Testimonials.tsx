"use client"
import './Testimonials.css'

const Testimonials = () => {
  return (
    <>

    {/* Large screens */}
    <div className='lg:block hidden'>
      <div className="testimonials">
  <h2>Testimonials</h2>
  <p>
    Our team members are experts in all facets of the design industry including
    print design, illustration, branding, identity, and more.
  </p>
  <div className="testimonial-slider">
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935819.png" alt="Floyd Miles" />
        <div className="info">
          <h3>Floyd Miles</h3>
          <span>★★★★★</span>
        </div>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" alt="Ronald Richards" />
        <div className="info">
          <h3>Ronald Richards</h3>
          <span>★★★★★</span>
        </div>
      </div>
      <p>
        Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit.
      </p>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src="https://www.cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png" alt="Savannah Nguyen" />
        <div className="info">
          <h3>Savannah Nguyen</h3>
          <span>★★★★★</span>
        </div>
      </div>
      <p>
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor.
      </p>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Testimonials
