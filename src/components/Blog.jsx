import React from 'react';
import './Blog.css';
import pic1 from '../pictures/122.Idea.svg'; // Ensure these paths are correct

const blogs = [
    {
        imageUrl: pic1,
        title: 'Demystifying Estate and Long-Term Planning:',
        blurb: 'a Conversation with Eleanor from Familial',
        link: 'https://www.getcoexist.com/blog/long-term-estate-planning' // Example link, replace with actual URL
    },
    {
        imageUrl: pic1,
        title: 'The Caregiving Crisis:',
        blurb: 'a conversation with Cindy Diogo-Kociuba',
        link: 'https://www.getcoexist.com/blog/the-caregiving-crisis' // Example link, replace with actual URL
    },
    {
        imageUrl: pic1,
        title: 'How to talk about finances with your partner:',
        blurb: 'a conversation with Brian Page from Modern Husbands',
        link: 'https://www.getcoexist.com/blog/talk-about-finances-with-partner' // Example link, replace with actual URL
    },
    {
        imageUrl: pic1,
        title: 'Breaking the mold:',
        blurb: 'a conversation with Kate Mangino on achieving gender equity at home',
        link: 'https://www.getcoexist.com/blog/equal-partners' // Example link, replace with actual URL
    }
];

const Blog = () => {
    return (
        <div className="blog-container">
            <h2>check out our blog!</h2>
            <div className="blog-grid">
                {blogs.map((blog, index) => (
                    <a href={blog.link} key={index} className="blog-post" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                        </div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-blurb">{blog.blurb}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Blog;
