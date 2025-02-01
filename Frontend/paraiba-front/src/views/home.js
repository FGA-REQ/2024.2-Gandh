import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Paraíba HotDog</title>
        <meta property="og:title" content="Immediate Ripe Mandrill" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for any inquiries or feedback.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Order Now</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/menu</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Menu</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Northeastern Delights!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our delicious menu inspired by the flavors of the
              Northeast.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/about-us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our story and commitment to quality.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Paraíba HotDog
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Explore a variety of dishes from different regions of the Nordeste
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Regional Diversity</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Easy and secure online ordering process
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Authentic Nordeste Flavors</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Savor the taste of traditional Nordeste dishes made with authentic
              ingredients
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Convenient Ordering</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Discover the Flavors of the Northeast
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore a variety of traditional dishes and flavors from the
              Northeast region of Brazil.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Order Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Discover the rich history and passion behind our brand, rooted in
              the vibrant culture and culinary heritage of the Northeast.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Explore a wide range of traditional dishes from the Northeast
              region of Brazil, prepared with authentic flavors and ingredients.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Easy Ordering Process</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Authentic Northeastern Cuisine</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Our user-friendly interface allows you to browse the menu, select
              your favorite dishes, and place orders with just a few clicks.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Company Story</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">R$39.99</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Buy Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Buy Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">24/7 customer support</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">
              Personalized recommendations based on previous orders
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Buy Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">All features of Plan 2</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Priority customer support</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">
              Exclusive discounts on selected items
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All features of Plan 1</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">R$29.99</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">
              Free delivery on orders over R$50
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">
              Access to exclusive regional recipes
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">
              Complimentary dessert with every order
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">R$19.99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Explore a variety of traditional dishes from the Nordeste region
              that will tantalize your taste buds.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Learn more about our company&apos;s passion for bringing authentic
              Nordeste flavors to your doorstep.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Easy Ordering Process</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Simply browse through our menu, select your favorite dishes, and
              proceed to checkout with just a few clicks.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Discover Our Nordeste Cuisine</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">About Us</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Have any questions or feedback? Feel free to reach out to our
              friendly team for assistance.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Contact Us</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Marketing Manager at Company Y</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO at Company X</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Maria Silva</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Ana Oliveira</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Great experience shopping on this website. The ordering process
              was smooth and the delivery was quick.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">João Santos</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Student</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Pedro Costa</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Freelancer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I absolutely love the products from this company. The quality is
              top-notch and the customer service is exceptional.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              As a freelancer, I rely on online platforms for my purchases. This
              website has become my go-to for all my shopping needs.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              I recommend this website to all my friends. The variety of
              products available is impressive, and the prices are unbeatable.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Northeast Street, Nordeste City, NE
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              For any inquiries or assistance, please contact our customer
              support team at support@northeastcompany.com
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Northeast Company Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Customer Support Center</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">FAQ</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
