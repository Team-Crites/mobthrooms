class BathroomsManager extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Mobiquity Bathroom Occupancy Checker</h1>
                <BathroomsTable />
            </div>
        );
    }
}

window.BathroomsManager = BathroomsManager;
