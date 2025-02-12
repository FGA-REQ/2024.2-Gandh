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
      </Helmet>
      <Navbar8
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
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Fidelidade</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Menu</span>
          </Fragment>
        }
        action3={
          <Fragment>
            <span className="home-text115">Sobre</span>
          </Fragment>
        }

        action4={
          <Fragment>
            <span className="home-text115">Carrinho</span>
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
              O cachorro quente mais arretado do centro-oeste
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Explore uma variedade de pratos do Nordeste
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">diversidade regional</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Peça agora
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Sabor autentico do Nordeste</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Venha experimentar as delicias da paraíba
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Super conveniente</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Descubra os sabores do Nordeste!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore a varidade com tradicionais sabores do Nordeste!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Uma cozinha com muita história e paixão por traz de cada ingrediente, seu hotdog montado com o amor que voocê merece.
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
            <span className="home-text129">Fácil e rápido</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Comida autêntica nordestina</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Nossa interface fácil e agradável para pedir em apenas alguns cliques!
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">O abraço que só o Nordeste tem</span>
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
            <span className="home-text134">Conferir</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Conferir</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Acompanhamentos e sobremesas arretadas</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Mandacaru simples, duplo e triplo</span>
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
              Tradicional simples e duplo
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
            <span className="home-text145">Arretado simples e duplo</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Conferir</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Paraíba Chips</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Paraibano simples e duplo</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Hotdog Molho</span>
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
              Maioneses Artesanais
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Uma varidade de opções e cardápios para se aventurar
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Bixin simples e duplo</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">O que temos a oferecer</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Smashdog | Smashburger</span>
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
            <span className="home-text163">Brownie tradicional</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">E muito mais!</span>
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
        plan3Yearly={
          <Fragment>
            <span className="home-text172">Sempre cai bem | Que tal adoçar?</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">UauFajor!</span>
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
              Xique-xique simples, duplo e triplo
            </span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">
              Facheiro simples, duplo e triplo
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">
              Brownie Tradicional
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Selecione entre individual e combo para ver!
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
        plan3={
          <Fragment>
            <span className="home-text183">Acompanhamentos e sobremesas arretadas</span>
          </Fragment>
        }
      ></Pricing14>

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
            <span className="home-text203">Alguns feedbacks!</span>
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
              Aguas claras
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Nos faça uma visita</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
            Araucárias
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Unidade Águas Claras</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Unidade Araucárias</span>
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
