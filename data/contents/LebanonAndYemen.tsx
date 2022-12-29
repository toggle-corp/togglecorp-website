import ListContent from 'components/general/ListContent';

function LebanonAndYemenContent() {
    const whatWeDidList = [
        'Discovered the current and forecasted priority needs in Yemen West Coast (Ta’izz and Hodeidah Governorate) and Lebanon (North and Beqaa Governorate)  to inform SI annual programming for 2022.',
        'Documented the nature and characteristics of the shocks that led to the crisis and identified the drivers',
        'Determined the impact of the shock/event/ongoing conditions on people (e.g. IDPs, etc.) and services.',
        'Recorded the existing responses and capacities of the organizations and estimated response gaps',
        'Identified information such as locations, sectors, and/or affected groups that require more in-depth assessment',
        'Recognized the various types, numbers, and characteristics of displacement, as well as the driving forces and intentions.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default LebanonAndYemenContent;
