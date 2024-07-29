import React from 'react';
import './Blog.css';
import pic1 from '../pictures/122.Idea.svg'; // Ensure these paths are correct
const blogs = [
    {
        imageUrl: pic1,
        title: 'Demystifying Estate and Long-Term Planning:',
        blurb: 'a Conversation with Eleanor from Familial'
    },
    {
        imageUrl: pic1, 
        title: 'The Caregiving Crisis:',
        blurb: 'a conversation with Cindy Diogo-Kociuba'
    },
    {
        imageUrl: pic1, 
        title: 'How to talk about finances with your partner:',
        blurb: 'a conversation with Brian Page from Modern Husbands'
    },
    {
        imageUrl: pic1, 
        title: 'Breaking the mold:',
        blurb: 'a conversation with Kate Mangino on achieving gender equity at home'
    }
];

const Blog = () => {
    return (
        <div className="blog-container">
            <h2>check out our blog!</h2>
            <div className="blog-grid">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-post">
                        <div className="image-wrapper">
                            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                        </div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-blurb">{blog.blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
