import calendarIcon from '../images/calendar.png';
import aboutIcon from '../images/about.png';
import contactIcon from '../images/contact.png';
import dashboardIcon from '../images/dashboard.png';
import helpIcon from '../images/support.png';
import homeIcon from '../images/home.png';
import settingsIcon from '../images/setting.png';

export default function sidebar() {

    return (

        <div className="sideBar">
            <h2><img src={calendarIcon} alt="Calendar" />Sidebar Menu</h2>
            <ul>
                <h3>Menu</h3>
                    <li><img src={dashboardIcon} alt="-" width="20px" />Dashboard</li>
                    <li><img src={homeIcon} alt="-" width="20px" />Home</li>
                    <li><img src={aboutIcon} alt="-" width="20px" />About</li>
                    <li><img src={contactIcon} alt="-" width="20px" />Contact</li>
                    <hr/>
                <h3>Other</h3>
                    <li><img src={settingsIcon} alt="-" width="20px" />Settings</li>
                    <li><img src={helpIcon} alt="-" width="20px" />Help</li>
            </ul>
            <div className="foot-Section-Sidebar">
                <h4>Member+</h4>
                <p>Get unlimited access to all features</p>
                <button >Upgrade</button>
            </div>

        </div>
    );

}