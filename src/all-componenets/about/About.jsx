import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation(); // (1)
    const data = location.state || {};

    return (
        <div>
            <h1>About Page</h1>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    );
};

export default About;


// (১) এখানে navigate এর মাদ্ধমে যে ডাটা পাঠানো হয় তা রিসিসভ করা হয় এই useLocation() hook এর মাদ্ধমে