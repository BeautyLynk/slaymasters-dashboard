import React, { useEffect} from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom' 
import { Helmet } from "react-helmet";
import { useAuth } from '../Auth/auth'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'



const Home = () => {

    return (
        <Layout>
            <Helmet>   
                <title>SLAYMASTER - Create Beauty Content That Slays, Hair Tutorial</title>
                <meta 
                    name="description" 
                    content="Build an empowering community for #EVERYONES beauty journey through video, blogging, and other forms of media. CREATE BEAUTY CONTENT THAT SLAYS!" 
                />
            </Helmet>
            <div className="home-layout">
                <div className="home-content-container">
                    <div className="content-header-container">
                        <h1 className="content-header">Time to Slay!</h1>
                    </div>
                    <div className="content-textfield">
                        <p1>
                            OUR TEAM APPREACITAES YOUR TALENT AND EFFORT IN MAKING #EVERYONEBEAUTY MORE THAN A HASHTAG.  LOGIN TO GET ALL THE TOOLS TO TEACH THE WORLD TO SLAY!                             <br></br>
                            <br></br>XO, 
​                            <br></br>SLAYMASTER TEAM  
                        </p1>
                    </div>
                    <div className="content-signin-button-container">
                        <div><Link to="/sign-in"><button className="home-signin-button">SIGN IN</button></Link></div>
                    </div>
                </div>
                <div className="home-video-container">
                    <video
                        autoPlay={true}
                        src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/dashboardvid/slay masters.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXNoYm9hcmR2aWQvc2xheSBtYXN0ZXJzLm1wNCIsImlhdCI6MTY0OTAxNDA4NCwiZXhwIjoxOTY0Mzc0MDg0fQ.cUn9h_tfCxTfTuygMZ8N-LDKe4HV1LPbwbqdFDKOOes"
                        loop
                        muted
                        controls
                        className="home-video"
                    ></video>
                </div>
            </div>
        </Layout>
    )
}

export default Home
