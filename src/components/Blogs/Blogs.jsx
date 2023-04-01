import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setData(data));
    }, [])
    return (
        <div>
            {/* blog data */}
            <div>
                {
                    // data.map(blog=>console.log(blog))
                    data.map(blog=>console.log(blog))
                }
            </div>
            {/* summery */}
            <div>

            </div>
        </div>
    );
};

export default Blogs;