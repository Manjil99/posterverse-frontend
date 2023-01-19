import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import MailOutline from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


export default function App() {
  
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Poster Verse
              </h6>
              <p>
                Amazing Posters for you ❤️
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  DC
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Marvel
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Anime
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href="/login" className='text-reset' >
                  Login
                </a>
              </p>
              <p>
                <a href='/login' className='text-reset'>
                  Sign up
                </a>
              </p>
              <p>
                <a href='/myOrders' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='/account' className='text-reset'>
                  Settings
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <span>  Manjil Kumar Choudhury</span>
              </p>
              <p>
                <MailOutline />
                <></>  manzilhacker0@gmail.com
              </p>
              <p>
                <FaLinkedin /> <a href="#" className='text-reset'>Linked In</a>
              </p>
              <p>
                <BsGithub /> <a href="https://github.com/Manjil99" className='text-reset' target="_blank">Github</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Poster Verse
        </a>
      </div>
    </MDBFooter>
  );
}