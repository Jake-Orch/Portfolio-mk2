import { attributes, skills } from '../data';
import Profile from '../assets/images/me.jpg'
import Icon from '../components/Icon';
import './about.css'

const About = () => {
    return (
        <div>
            <section className='container-fluid d-flex flex-wrap pt-5'>
                <section className='col-12 col-lg-2'>
                    <h1>About Me</h1>
                </section>
                {/* <section className='col-12 col-md-2 col-lg-2 about_main_img'>
                    <img src={Profile} alt='portrait'></img>
                </section> */}
                <section className='col-12 col-lg-10 d-flex flex-wrap'>
                    <section className='container-fluid'>
                        <section className=''>
                            <img src={Profile} alt='portrait'></img>
                        </section>
                        <section className=''>
                            <p>
                                Hello, My name is Jake Orchard, a Full Stack Web Developer.
                            </p>
                            <p>
                                I have been studying at the University of Birmingham through their Full Stack Web Developer bootcamp
                            </p>
                            <p>
                                Throughout my time learning Web Development, I have created many front end, back end and full stack applications.
                            </p>
                        </section>
                    </section>
                </section>

            </section>

            <section>
                <h3>Skills</h3>
                <section className='sa_section'>
                    {skills.map((data) => {
                        return <Icon key={data.id} title={data.title} src={data.src}></Icon>
                    })}
                </section>
                <section className='margin'>
                    <h3>Attributes</h3>
                </section>
                <section className='sa_section'>
                    {attributes.map((data) => {
                        return <p key={data.id} className='sa'>{data.title}</p>
                    })}
                </section>
            </section>
        </div>
    )
}

export default About;