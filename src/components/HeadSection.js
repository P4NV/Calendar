import share from '../images/icons8-share-50.png';
import notification from '../images/icons8-notification-50.png';
import user from '../images/icons8-profile-48.png';
export default function HeadSection({ showTask, setShowTask }){

    return (
        <div className="head-container">
            <div className="head-Section">
                <h1>Calendar App</h1>
                <div className="buttons-container">
                    <button className='share'><img src={share} alt="Share" /></button>
                    <button className="notification"><img src={notification} alt="Notification" /></button>
                    <button className="user-Profile"><img src={user} alt="User Profile" />Name<br></br><span>email</span></button>
                </div>
            </div>
            <div className="bottom-buttons-headSection">
                <button className="month-View">Yearly</button>
                <button className="week-View">Monthly</button>
                <button className="day-View">Weekly</button>
                <div className='left-buttons-headSection'>
                    <button 
                      className={`task-View ${showTask ? 'active' : ''}`}
                      onClick={() => setShowTask(true)}
                    >
                      Tasks
                    </button>
                    <button 
                      className={`notes-View ${showTask ? '' : 'active'}`}
                      onClick={() => setShowTask(false)}
                    >
                      Notes
                    </button>
                </div>
            </div>
        </div>
    );
}
