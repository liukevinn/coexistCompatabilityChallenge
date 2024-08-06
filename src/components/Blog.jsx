import React from 'react';
import './Blog.css';
import pic1 from '../pictures/174.Project.svg';
import pic2 from '../pictures/87.Alert.svg';
import pic3 from '../pictures/123.Website-builder.svg';
import pic4 from '../pictures/140.Balance.svg';
import appStore from '../pictures/App Store.svg';
import googlePlay from '../pictures/Google Play.svg';

const blogs = [
    {
        imageUrl: pic4,
        title: 'Breaking the mold:',
        blurb: 'a conversation with Kate Mangino on achieving gender equity at home',
        link: 'https://www.getcoexist.com/blog/equal-partners',
        tintClass: 'tint4' // Add tint class here
    },
    {
        imageUrl: pic3,
        title: 'How to talk about finances with your partner:',
        blurb: 'a conversation with Brian Page from Modern Husbands',
        link: 'https://www.getcoexist.com/blog/talk-about-finances-with-partner',
        tintClass: 'tint3' // Add tint class here
        
    },
    {
        
        imageUrl: pic2,
        title: 'The Caregiving Crisis:',
        blurb: 'a conversation with Cindy Diogo-Kociuba',
        link: 'https://www.getcoexist.com/blog/the-caregiving-crisis',
        tintClass: 'tint2' // Add tint class here
    },
    {
        imageUrl: pic1,
        title: 'Demystifying Estate and Long-Term Planning:',
        blurb: 'a Conversation with Eleanor from Familial',
        link: 'https://www.getcoexist.com/blog/long-term-estate-planning',
        tintClass: 'tint1' // Add tint class here
    }
];

const Blog = () => {
    return (
        <div className="blog-container">
            <h2 style={{color: 'black'}}>try 2 weeks free</h2>
            
            <a href="https://apps.apple.com/us/app/coexist-simplify-housework/id1659744046" target="_blank" rel="noopener noreferrer" style={{ paddingRight: '10px' }}>
    <img src={appStore} alt="Apple Store" />
</a>

<a href="https://play.google.com/store/search?q=coexist&c=apps" target="_blank" rel="noopener noreferrer" style={{ paddingRight: '10px' }}>
    <img src={googlePlay} alt="Google Play" />
</a>
            

            <h2 style={{ marginTop: '6vh', color: 'black' }}>check out our blog!</h2>

            <div className="blog-grid">
                {blogs.map((blog, index) => (
                    <a href={blog.link} key={index} className={`blog-post ${blog.tintClass}`} target="_blank" rel="noopener noreferrer">
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
