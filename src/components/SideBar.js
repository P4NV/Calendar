import calendarIcon from '../images/calendar.png';

export default function sidebar() {

    return (

        <div className="sideBar">
            <h2><img src={calendarIcon} alt="Calendar" />Sidebar Menu</h2>
            <ul>
                <h3>Menu</h3>
                    <li><img src="" alt="Dashboard-  " />Dashboard</li>
                    <li><img src="" alt="Home-  " />Home</li>
                    <li><img src="" alt="About-  " />About</li>
                    <li><img src="" alt="Contact-  " />Contact</li>
                <h3>Other</h3>
                    <li><img src="" alt="Settings-  " />Settings</li>
                    <li><img src="" alt="Help-  " />Help</li>
            </ul>
            <div className="foot-Section-Sidebar">
                <h4>Member+</h4>
                <p>Get unlimited access to all features</p>
                <button >Upgrade</button>
            </div>

        </div>
    );

}