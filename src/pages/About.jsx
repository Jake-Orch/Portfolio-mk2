import { attributes } from "../data";
import Profile from "../assets/images/me.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      <section>
        <section className="grid justify-items-center mt-10 custom-color text-bold">
          <h1>About Me</h1>
        </section>
        <section className="flex justify-around items-center flex-col sm:flex-row px-5 sm:px-10">
          <section>
            {/* Here, we are getting the portfolio picture "profile"  from assets/imagesme.jpg and displaying it in the about page*/}
            <img src={Profile} alt="portrait" className="mb-5 sm:mb-0 sm:mr-10"></img>
          </section>
          <section className="w-5/6">
            <p>Hello, My name is Jake Orchard, a Full Stack Web Developer.</p>
            <p>
              I have been studying at the University of Birmingham through their Full Stack Web Developer bootcamp. Throughout my time learning Web Development, I have created many
              front end, back end and full stack applications. I am enjoying the journey of learning web devlopment and looking forward to future endevours in the industry
            </p>
            <p>
              
            </p>
          </section>
        </section>
      </section>
      <section>
        <section className="sm:mt-48 sm:mb-24">
          <h3 className="grid justify-items-center mt-10 custom-color text-bold">Attributes</h3>
        </section>
        <section className="flex justify-around sa_section md:m-10">
          {/* This map is mapping through the attributes that I defined in data.jsx, and dispaying all the information needed from the data I have provided*/}
          {attributes.map((data) => {
            return (
              <p key={data.id} className="sa">
                {data.title}
              </p>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default About;
