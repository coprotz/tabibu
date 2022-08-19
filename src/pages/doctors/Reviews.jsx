import React from 'react'
import { BsStar,BsStarFill } from "react-icons/bs";

const Reviews = ({reviews, RenderReview, rate, setReview}) => {
  return (
    <>
        <div className="reviews_top">
            <h3>Reviews Summary</h3>
            <button className='btn_review' onClick={() => setReview(true)}>Write a review</button>
        </div>
        <div className="review_summary">
            <h1>{rate}</h1>
            <div className="review_stars">
                <div className="stars_items">
                    {reviews.map((value, index) => (
                        <span key={index}>
                            {RenderReview(value)}
                        </span>
                    ))}
                </div>
                <span>13 reviews</span>
            </div>            
        </div>
        <h2 className='patient_reviews'>Patients reviews</h2>
        <div className="reviews_patients">
            <div className="review_card">
                <div className="review_photo">
                    photo
                </div>
                <div className="reviews_body">
                    <div className="review_body_name">
                        <h3>Juma Kaseja</h3>
                        <span>2 month ago</span>
                    </div>
                    
                    <div className="review_status">
                        <div className="stars_items">ddd</div>
                        
                    </div>
                    <p>Jamaa yupo vizuri sana, namkubali kinoma aisee, amesaidia sana, Mungu ambariki.</p>
                </div>
            </div>
            <div className="review_card">
                <div className="review_photo">
                    photo
                </div>
                <div className="reviews_body">
                    <div className="review_body_name">
                        <h3>Juma Kaseja</h3>
                        <span>2 month ago</span>
                    </div>
                    
                    <div className="review_status">
                        <div className="stars_items">ddd</div>
                        
                    </div>
                    <p>Jamaa yupo vizuri sana, namkubali kinoma aisee, amesaidia sana, Mungu ambariki.</p>
                </div>
            </div>
            <div className="review_card">
                <div className="review_photo">
                    photo
                </div>
                <div className="reviews_body">
                    <div className="review_body_name">
                        <h3>Juma Kaseja</h3>
                        <span>2 month ago</span>
                    </div>
                    
                    <div className="review_status">
                        <div className="stars_items">ddd</div>
                        
                    </div>
                    <p>Jamaa yupo vizuri sana, namkubali kinoma aisee, amesaidia sana, Mungu ambariki.</p>
                </div>
            </div>
            <div className="review_card">
                <div className="review_photo">
                    photo
                </div>
                <div className="reviews_body">
                    <div className="review_body_name">
                        <h3>Juma Kaseja</h3>
                        <span>2 month ago</span>
                    </div>
                    
                    <div className="review_status">
                        <div className="stars_items">ddd</div>
                        
                    </div>
                    <p>Jamaa yupo vizuri sana, namkubali kinoma aisee, amesaidia sana, Mungu ambariki.</p>
                </div>
            </div>
         
        </div>
      
    </>
  )
}

export default Reviews
