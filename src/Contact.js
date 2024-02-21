import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14132.975368914778!2d83.
    45910154363702!3d27.6788574380527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.676043399999998!2d83.4658962!4m5!1s0x399686803ee1
    138b%3A0xcc8bbd1a3101d946!2sKalika%20Nagar%2C%20Butwal%2032907!3m2!1d27.6809387!2d83.4663557!5e0!3m2!1sen!2snp!4v1698464884670!5m2!1sen!2snp" 
    width="100%" 
    height="400" 
    style= {{ border:0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mpzgbbgg" method="POST" className="contact-inputs">
        <input 
        type="text" 
        placeholder="username" 
        name="username"
        required
        autoComplete="off"
         />

         <input 
         type="email" 
         name="Email" 
         placeholder="Email" 
         autoComplete="off" 
         required
         />

         <textarea 
         name="Message" 
         cols="30" 
         rows="10"
         required
         placeholder="Enter your message"
         autoComplete="off">
         </textarea>

         <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
