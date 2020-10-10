import React, { Component } from 'react';

import './carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.slideIndex = 0
    }

    componentDidMount() {
        this.showSlides();
    }

    showSlides = () => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {this.slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";  
        dots[this.slideIndex-1].className += " active";
        setTimeout(this.showSlides, 2000); // Change image every 2 seconds
    }

    render() {
        return (
            <div>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.subTitle }</p>
                <div className="slideshow-container">
                    {
                        this.props.data.images.map((image, index) => {
                            return (
                                <div className="mySlides fade" key={ index }>
                                    <div className="numbertext">
                                        { index+1 } / { this.props.data.images.length }
                                    </div>
                                    <img src={ image.url } className="sliderImg" alt={ image.name } />
                                </div>
                            );
                        })
                    }
                </div>

                <div className="dotsWrapper">
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                </div>
            </div>
        );
    }
}

export default Carousel;