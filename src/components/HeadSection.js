export default function HeadSection(){

    return (
        <div className="head-container">
            <div className="head-Section">
                <h1>Calendar App</h1>
                <div className="buttons-container">
                    <button className='share'><img src="" alt="Share" /></button>
                    <button className="notification"><img src="" alt="Notification" /></button>
                    <button className="user-Profile"><img src="" alt="User Profile" />Name<br></br><span>email</span></button>
                </div>
            </div>
            <div className="bottom-buttons-headSection">
                <button className="month-View">Yearly</button>
                <button className="week-View">Monthly</button>
                <button className="day-View">Weekly</button>
            </div>
            <div className="bottom-edit-settings-headSection">
                <button className="export">Export</button>
                <button className="deleted-data">Deleted Data</button>
                <button className="folders">Folders</button>
            </div>
        </div>
    );


}