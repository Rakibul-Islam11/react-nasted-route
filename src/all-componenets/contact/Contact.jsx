import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); //(1)

    const handleSubmit = (e) => {
        e.preventDefault(); // পেজ রিলোড বন্ধ করতে

        const info = {
            "name": "rakib",
            "age": 29
        }

        // নাম ও পাসওয়ার্ড চেক করা
        if (name === 'rakib' && password === 'rakib') {
            navigate('/about',{ state: info }); // about পেজে নেভিগেট করা সাথে ডাটা পাঠানো এছাড়াও এখানে state এরমাদ্ধমে about এ আমরা ডাটা পাটাইছি (১)
        } else {
            alert('Invalid name or password'); // ভুল হলে এলার্ট দেখানো
        }
    };

    return (
        <div>
            <p>contact ......</p>

            <form onSubmit={handleSubmit} className="flex flex-col w-1/4 gap-2">
                <input
                    className="bg-gray-500"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // ইনপুটের মান সেট করা
                />
                <input
                    className="bg-gray-500"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // ইনপুটের মান সেট করা
                />
                <button className="py-2 px-4 bg-red-400" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

// ==> 1 আপনি মূলত তিনটি জিনিস navigate-এর মাধ্যমে পাস করতে পারেন:

// navigate এর প্যারামিটার সমূহ
// javascript
// Copy code
// navigate(path, { state, replace });
// path:

// নেভিগেশনের লক্ষ্য পাথ (URL)।
// উদাহরণ: /about, /profile, /dashboard.
// state:

// ডেটা বা অবজেক্ট যা গন্তব্য পেজে পাঠাতে চান।
// উদাহরণ: { id: 123, name: 'Rakib' }
// replace:

// একটি বুলিয়ান (সত্য/মিথ্যা) মান যা নির্দেশ করে যে ব্রাউজারের হিস্ট্রিতে নতুন এন্ট্রি যোগ করা হবে কিনা।
// true হলে, বর্তমান এন্ট্রি প্রতিস্থাপিত হবে।
// ডিফল্ট মান: false।
// উদাহরণ:
// javascript
// Copy code
// navigate('/about', { replace: true });
// প্যারামিটার ব্যবহার করার উদাহরণ
// ১. state সহ নেভিগেট করা:
// javascript
// Copy code
// navigate('/about', { state: { username: 'Rakib', role: 'Admin' } });
// ২. replace ব্যবহার করা:
// javascript
// Copy code
// navigate('/dashboard', { replace: true });
// replace: true ব্যবহার করলে ব্রাউজারের Back বোতাম চাপলে আগের পেজে যাওয়া যাবে না।

// ৩. state এবং replace একসাথে ব্যবহার করা:
// javascript
// Copy code
// navigate('/profile', { state: { id: 123 }, replace: true }); state এর উদ্দেশ্য
// পেজ রিফ্রেশ না করেই ডেটা পাঠানোর জন্য।
// গ্লোবাল স্টেট ম্যানেজমেন্ট (যেমন Redux) ব্যবহার না করেও ডেটা পাস করার জন্য।
// নির্দিষ্ট রাউটে নেভিগেট করার সময় অতিরিক্ত তথ্য যোগ করার জন্য। path সবসময় দেওয়া প্রয়োজন, এটি নেভিগেশনের গন্তব্য।
// state অপশনাল এবং শুধুমাত্র ডেটা পাস করার জন্য।
// replace অপশনাল এবং এটি ডিফল্টভাবে false থাকে।
// আপনার প্রয়োজন অনুযায়ী আপনি এই তিনটি প্যারামিটার ব্যবহার করতে পারেন। 😊