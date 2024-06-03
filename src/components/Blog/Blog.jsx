import PropTypes from 'prop-types';
import bookmarkLogo from '/img/bookmark.svg'
const Blog = ({blog}) => {
    const {title, cover_photo, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='py-10'>
            <img className='w-full' src={cover_photo} alt="" />
            <div className='flex justify-between items-center py-4'>
                <div className="w-auto flex items-center gap-6">
                    <img className='rounded-full' src={author_img} alt="" />
                    <div>
                        <h5 className='text-2xl font-bold'>{author}</h5>
                        <p className='font-semibold opacity-60'>{posted_date}</p>
                    </div>
                </div>
                <p className='flex gap-2 font-medium opacity-60 items-center text-xl'><span>{reading_time} read</span><img src={bookmarkLogo} alt=''/></p>
            </div>
            <h2 className='font-bold text-[40px]'>{title}</h2>
            <p className='flex gap-4 flex-wrap py-4'>
                {hashtags.map( (hashtag, idx) => <span key={idx}><a className='font-medium text-xl opacity-60' href="#">#{hashtag}</a></span>)}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;