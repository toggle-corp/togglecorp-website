import ListContent from 'components/general/ListContent';

function GlobalCovid19Content() {
    const whatWeDidList = [
        'Regularly monitor the humanitarian situation during and post-COVID-19 in three countries (Syria, Bangladesh, and Nigeria).',
        'Assessed data availability and quality, coping strategies, priority needs, and opportunities that emerged in six humanitarian sectors: education, food security, livelihoods, nutrition, protection, and water, sanitation and hygiene (WASH), etc.',
        'Collected and analyzed data provided by humanitarian stakeholders and other relevant actors such as academia, the private sector, and government agencies.',
        'Produced regular joint situational analysis reports to facilitate a better understanding of the humanitarian impact of COVID-19 to support response operations.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default GlobalCovid19Content;
